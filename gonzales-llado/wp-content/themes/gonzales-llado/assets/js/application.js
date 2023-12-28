(function($) {
'use strict';

jQuery(document).ready(function($){

/*-------------------------------------------------*/
/*  SLIDER
/*-------------------------------------------------*/
if( $('.mail-slider')[0] ){
  $('.mail-slider').owlCarousel({
    rtl:false,
    items:              1,
    loop:               true,
    smartSpeed:         1000,
    nav:                false,
    autoplay:           true,
    autoplayTimeout:    3000,
    autoplayHoverPause: true
  });
}





/*-------------------------------------------------*/
/*  MAP
/*-------------------------------------------------*/
if( $('.gmap')[0] ){
	var $map = $('.gmap'),
			$lat = $map.data('latitude'),
			$lan = $map.data('longitude'),
			$zoom = $map.data('zoom');

	$lat ? $lat : $lat = 40.7307712;
	$lan ? $lan : $lan = -74.0029208;
	$zoom ? $zoom : $zoom = 15;

	$('.gmap')
	.gmap3({
	  center:[$lat,$lan],
	  zoom: $zoom,
	  scrollwheel: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    }
	})
	.marker({
	  position:[$lat,$lan],
	  // icon: window.location.origin+'/assets/images/_nitro/marker.png'
	});
}




/*-------------------------------------------------*/
/* LIGHTBOX
/*-------------------------------------------------*/
if( $('.lightbox-gallery')[0] ){
	$('.lightbox-gallery .lightbox-item').simpleLightbox({
		captions: true,
		captionDelay: 600,
		captionSelector: 'img',
		captionsData: 'title'
	});
}




});

}(jQuery));
