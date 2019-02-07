(function($) {
'use strict';


	/*---------------------------------------------------------*/
	/*	HERO SLIDER
	/*---------------------------------------------------------*/
	if( $('.hero .owl-carousel')[0] ){

		$('.hero .owl-carousel').owlCarousel({
			items:              1,
			loop:               true,
			smartSpeed:         1200,
			autoplay:           false,
			autoplay:           true,
			autoplayTimeout:    4000,
			autoplayHoverPause: true
		});

	}







	/*---------------------------------------------------------*/
	/*	HOME PAGE SLIDER PRODUCTS
	/*---------------------------------------------------------*/
	if( $('.prod-slider-wrapper')[0] ){

		$('.prod-slider-wrapper').owlCarousel({
			startPosition: 	1,
			center: 				true,
			margin: 				20,
			nav: 						false,
			stagePadding: 	1,
			dots: 					false,
			responsive:{
				0:{
					items: 1,
					stagePadding: 15,
				},
				440:{
					items: 2
				},
				768:{
					items: 3
				},
				991:{
					items: 4
				}
			}
		})
		.closest('.prod-slider').find('.fa-angle-left').on('click', function(){
			$(this).closest('.prod-slider').find('.prod-slider-wrapper').trigger('prev.owl.carousel');
		})
		.closest('.prod-slider').find('.fa-angle-right').on('click', function(){
			$(this).closest('.prod-slider').find('.prod-slider-wrapper').trigger('next.owl.carousel');
		});

	}







	/*---------------------------------------------------------*/
	/*	PRODUCTS SLIDER
	/*---------------------------------------------------------*/
	if( $('.slider-products')[0] ){

		$('.slider-products').owlCarousel({
			items: 						1,
			loop: 						true,
			smartSpeed: 			1200,
			URLhashListener: 	true,
			startPosition: 		'URLHash',
			dots: 						false,
			animateOut: 			'fadeOut',
  		animateIn: 				'fadeIn'
		})
		.on('changed.owl.carousel', function(event){
			$('.navbar-products .btn').removeClass('active');
			$('.navbar-products [href="'+location.hash+'"]').addClass('active');
		});

		$('.slider-products .fa-angle-left').on('click', function(){
			$(this).closest('.slider-products').trigger('prev.owl.carousel');
		})

		$('.slider-products .fa-angle-right').on('click', function(){
			$(this).closest('.slider-products').trigger('next.owl.carousel');
		});

	}








	/*---------------------------------------------------------*/
	/*	HASH
	/*---------------------------------------------------------*/
	$(document).ready(function(){

		var _hash = location.hash,
				_pathname = location.pathname,
				_pathname = _pathname.split('/');


		if( $.inArray('prodcat', _pathname) > 0 ){
			if( $('.navbar-products')[0] ){

				if(_hash){
					$('.navbar-products [href="'+_hash+'"]').addClass('active');
				}else{
					$('.navbar-products .btn').eq(0).addClass('active');
				}
				
				$('.navbar-products .btn').on('click', function(){
					if( !$(this).hasClass('active') ){
						$('.navbar-products .btn').removeClass('active');
						$(this).addClass('active');
					}
				});

			}
		}


	});







	/*---------------------------------------------------------*/
	/*	MAP
	/*---------------------------------------------------------*/
	if( $('.gmap')[0] ){

		var _map = $('.gmap'),
				_lat = _map.data('lat'),
				_lng = _map.data('lng'),
				_zoom = _map.data('zoom');

		_map.gmap3({
			center:[_lat, _lng],
			zoom: _zoom,
			scrollwheel: false
		})
		.marker({
			position:[_lat, _lng],
			icon: window.location.origin + '/wp-content/themes/graficset/assets/images/marker.png'
		});

	}//$('.default-map')




	// On chane language switcher
	// $('.selectpicker').on('changed.bs.select', function(){ 
	// 	location.href = $(this).val();
	// });






}(jQuery));






