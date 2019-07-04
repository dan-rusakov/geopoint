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

	// open gallery
	$('.popup-gallery').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',  
		tLoading: 'Loading image #%curr%...',
		// mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Изображение #%curr%</a> недоступно.',
			
		}
	  });

});
