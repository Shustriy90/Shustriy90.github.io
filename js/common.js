$(document).ready(function(){
  $('.reviews-slider').slick();
});

var num = 140; //number of pixels before modifying styles
$(window).bind('scroll', function () {
    if ($(window).scrollTop() >= num) {
        $('.menu').addClass('menu-dark');
    } else {
        $('.menu').removeClass('menu-dark');
    }
});

var basePrice = 9800;
var currentPrice = basePrice;


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
  $(".menu").toggleClass('menu-hide');
  $(".menu").toggleClass('main-dropdown');
  $("body").toggleClass('body-overflow');
})