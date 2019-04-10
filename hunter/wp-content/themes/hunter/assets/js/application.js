(function($) {
'use strict';


jQuery(document).ready(function($){


/*-------------------------------------------------*/
/*  MAIN SLIDER
/*-------------------------------------------------*/
$("#main-slider").owlCarousel({
  slideSpeed: 			500,
  paginationSpeed: 	500,
  singleItem: 			true,
  autoPlay: 				false,
  // autoplayTimeout: 	8000,
  afterAction: function(el){
		this
		.$owlItems
		.removeClass('active')

		this
		.$owlItems //owl internal $ object containing items
		.eq(this.currentItem)
		.addClass('active')    
	}
});






/*-------------------------------------------------*/
/* MAP
/*-------------------------------------------------*/
if( $('.gmap')[0] ){
	var $map = $('.gmap'),
			$address = $map.data('address'),
			$lat = $address.split(',')[0],
			$lan = $address.split(',')[1],
			$zoom = $map.data('zoom'),
			$marker = $map.data('marker');


	var grayStyles = [{
	  featureType: "all",
	  stylers: [
	    { saturation: -90 },
	    { lightness: 50 }
	  ]
	}];


	$('.gmap')
	.gmap3({
	  center:[$lat,$lan],
	  zoom: $zoom,
	  scrollwheel: false,
	  styles: grayStyles
	})
	.marker({
	  position:[$lat,$lan],
	  // icon: window.location.origin+'/assets/images/_nitro/marker.png'
	  icon: $marker
	});
}



getMobileOperatingSystem();


});//DOM







function getMobileOperatingSystem(){
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ){
		// If is IOS
		$('.banner-user .btn').attr('href', 'https://itunes.apple.com/us/app/car-gps-track/id1104686161?mt=8');
	}else if( userAgent.match( /Android/i ) ){
		// If is Android
		$('.banner-user .btn').attr('href', 'https://play.google.com/store/apps/details?id=com.republikapps.cartrackgps');
	}
}


})(jQuery);





