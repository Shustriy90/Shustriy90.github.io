<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = $_POST['faq-form-name'];
$email = $_POST['faq-form-email'];
$number = $_POST['faq-form-message'];

// Настройки
$mail = new PHPMailer;

$mail->isSMTP(); 
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;
$mail->CharSet = 'UTF-8';
$mail->Username = 'info.icanweb@gmail.com'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'Info123456'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
//$mail->addReplyTo('shustriy90@gmail.com');
//$mail->setFrom("");
$mail->setFrom('info.icanweb@gmail.com', 'Icanweb');
//$mail->setFrom('.$email.'); // Ваш Email
$mail->addAddress('info.icanweb@gmail.com'); // Email получателя
$mail->addReplyTo('shustriy90@gmail.com');
                                 
// Письмо
$mail->isHTML(true); 
$mail->Subject = "Вопрос из формы обратной связи"; // Заголовок письма
$mail->Body    = "<p> Имя $name </p>
                  <p> Почта $email </p>
                  <p> Текст письма $number </p>
                "; // Текст письма
//$mail->Body    = "Почта $email</p> . "; // Текст письма
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>