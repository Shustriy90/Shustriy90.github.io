$(document).ready(function(){
  $('.reviews-slider').slick();
});

var num = 160; //number of pixels before modifying styles
$(window).bind('scroll', function () {
    if ($(window).scrollTop() >= num) {
        $('.menu').addClass('menu-dark');
        $('.menu-list').addClass('menu-dark-list');
    } else {
        $('.menu').removeClass('menu-dark');
        $('.menu-list').removeClass('menu-dark-list');
    }
});

var basePrice = 9700;
var currentPrice = basePrice;
document.querySelector("#price").textContent = currentPrice;

function updatePrice(chk, value) {
  if (chk.checked) {
    currentPrice += value;
  }
  else {
    currentPrice -= value;
  }
  document.querySelector("#price").textContent = currentPrice;
}

$(".menu-btn__trigger").click(function() {
  $(".menu-btn__trigger").toggleClass('show-menu-btn');
  $(".menu").toggleClass('menu-hide');
  $(".menu").toggleClass('main-dropdown');
  $("body").toggleClass('body-overflow');
})

$(".menu-link").click(function() {
  $(".menu-btn__trigger").toggleClass('show-menu-btn');
  $(".menu").toggleClass('menu-hide');
  $(".menu").toggleClass('main-dropdown');
  $("body").toggleClass('body-overflow');
})



$(function($){
    $.mask.definitions['~']='[ 1234567890+_]';
    $("input[name='phone']").mask("~~~ (999) 999-9999");
});

$(function(){
  'use strict';
$('#faq-form').on('submit', function(e){
    e.preventDefault();
    var fd = new FormData( this );
    $.ajax({
      url: '../php/send.php',
      type: 'POST',
      contentType: false, 
      processData: false, 
      data: fd,
      success: function(msg){
if(msg == 'ok') {
  //$(".button").val("Отправлено");
  $('#faq-form')[0].reset();
} else {
        $(".button").val("Ошибка");
        setTimeout(function() {$(".button").val("Отправить");}, 3000);
}
      }
    });
  });
});

// $(".faq-form").submit(function() {
// var str = $(this).serialize();

// $.ajax({
// type: "POST",
// url: "../php/contact.php",
// data: str,
// success: function(msg) {
// if(msg == 'OK') {
// result = '<p>Ваш заказ принят</p>';
// $(".fields").hide();
// } else {
// result = msg;
// }
// $('.note').html(result);
// }
// });
// return false;
// });











