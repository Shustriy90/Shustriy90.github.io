
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
