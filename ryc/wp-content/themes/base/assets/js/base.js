// $.noConflict();


var smpx = {

	featured_image_gallery: function(){

		if( $.isFunction( $.fn.slick ) ){
			$('.single-featured-image .wp-block-gallery').slick({
				autoplay: 1,
				autoplaySpeed: 5000,
				dots: false,
				arrows: true,
				swipe:  true,
				swipeToSlide: true,
				cssEase: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
				fade: true,
				speed: 500,
				slidesToScroll: 0,
			});
		}

	}




}







$(document).ready(function($){

	if( $('.single-featured-image .wp-block-gallery').length ){
		smpx.featured_image_gallery();
	}

});


// (function($){
// 'use strict';




// })(jQuery)