
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {

	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), 0);
	});

    /*
        Background slideshow
    */
    $('.top-content').backstretch("/bundles/thagm2m/assets/img/backgrounds/1.jpg");
    $('.testimonials-container').backstretch("/bundles/thagm2m/assets/img/backgrounds/2.jpg");
    $('.call-to-action-container').backstretch("/bundles/thagm2m/assets/img/backgrounds/1.jpg");
    $('.about-us-container').backstretch("/bundles/thagm2m/assets/img/backgrounds/2.jpg");

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });

    /*
        Wow
    */
    new WOW().init();

    /*
	    Modals
	*/
	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});

});


jQuery(window).load(function() {

	/*
		Hidden images
	*/
	$(".modal-body img, .testimonial-image img").attr("style", "width: auto !important; height: auto !important;");

});
