$(function() {

	$('.main-carousel').owlCarousel({
		items: 1,
		dots: true,
		nav: false

	});

	$('.open-popup').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

});
