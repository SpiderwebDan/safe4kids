$(document).ready(function() {
    //Load the homepage slider
    var unslider = $('.banner').unslider({
        speed: 1000,               //  The speed to animate each slide (in milliseconds)
    	delay: 6000,              //  The delay between slide animations (in milliseconds)
    	dots: true,               //  Display dot navigation
    	fluid: true              //  Support responsive design. May break non-responsive designs
    });
    var data = unslider.data('unslider');

    var isOverIFrame = false;

    //Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

    //Move the menu icon if user scrolls down page for tablet.
    $window = $(window);
    $window.scroll(function() {
        if ( $window.scrollTop() < 100) {
            $('.icon-menu').removeClass('fixed');
        }
        else {
            $('.icon-menu').addClass('fixed');
        }
    });

    //Change the products page category with drop down list.
    $(".content aside section select").change(function() {
        window.location = $(this).find("option:selected").val();
    });

    //Show hide menu for tablet and mobile.
    $('.icon-menu').click(function(){
      console.log("working?");
        $('.menu ul').toggleClass('active');
    });
    $('.icon-cross').click(function(){
        $('.menu ul').toggleClass('active');
    });

});
