function _autoplayVideo(){

	setTimeout(function(){

		if( jQuery('#elementor-popup-modal-179 video').length ){
			jQuery('#elementor-popup-modal-179 video')[0].play();
			jQuery('#elementor-popup-modal-179 .mejs-layers').hide();
			jQuery('#elementor-popup-modal-179 .mejs-controls').hide();
		}else{
			_autoplayVideo();
		}

	}, 800);

}




function _slickBanners(){

	if( jQuery('.section-banners').length ){

		jQuery('.section-banners .elementor-container').slick({
			arrows: false,
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true,
			// autoplaySpeed: 2000,
			infinite: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						// slidesToShow: 1,
						// slidesToScroll: 1,
						// dots: true,
					}
				},
				{
					breakpoint: 99999,
					settings: "unslick"
				}
			]
		});

	}
}





jQuery(document).ready(function(){

	jQuery('#openVideo a').on('click', function(){
		console.log('click');
		_autoplayVideo();
	});


	_slickBanners();
	_scale()

});


jQuery(window).resize(function(){
	if( jQuery(window).width() < 768 ){
		_slickBanners();
	}

	_scale();

});




function _scale(){
	if( jQuery(window).width() > 1200 ){
		var _ww = jQuery(window).width(),
				_scalePercent = (1*_ww)/1200;

		jQuery('.elementor[data-elementor-type=wp-page]').css({transform: 'scale('+ _scalePercent +')', transformOrigin: 'center top'});
	}else{
		jQuery('.elementor[data-elementor-type=wp-page]').removeProp('style');
	}
}
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */