$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function() {
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
//		console.log(wScroll);
		$('.logo').css({
			'transform' : 'translate(0px, '+ wScroll /2 +'px)'
		});
		
		
		if($(".header-box").isInViewport()) {
			console.log("visible");
			$("#nav_bar").removeClass("sticky");
			$("#nav_bar").addClass("navbar");
			$("#nav_bar_placeholder").addClass("hidden");
		} else {
			$("#nav_bar").addClass("sticky");
			$("#nav_bar").removeClass("navbar");
			console.log("invisible");
			$("#nav_bar_placeholder").removeClass("hidden");
			
		}

	});

});

$("#about-nav").click(function() {
	console.log('clicky');
    $('html, body').animate({
        scrollTop: $("#about-div").offset().top
    }, 1500);
});

$("#contact-nav").click(function() {
	console.log('clicky');
    $('html, body').animate({
        scrollTop: $("#contact-div").offset().top
    }, 1500);
});

$("#projects-nav").click(function() {
	console.log('clicky');
	var height = $(window).height();
    $('html, body').animate({
        scrollTop: $("#projects-div").offset().top - height * 0.15
    }, 1500);
});

$("#resume-nav").click(function() {
	console.log('clicky');
	var height = $(window).height();
	console.log(height);
    $('html, body').animate({
        scrollTop: $("#resume-div").offset().top - height * 0.15
    }, 1500);
});