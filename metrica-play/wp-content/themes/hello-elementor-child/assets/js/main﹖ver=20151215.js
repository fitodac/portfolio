jQuery(document).ready(function($){

	if( $('.clients-carousel').length ){
		$('.clients-carousel').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: false,
			dots: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}




	if( $('.collapsible').length ){
		$('.collapsible .toggler').on('click', function(){
			$(this).closest('.collapsible').toggleClass('in');
		});
	}



	function initAjaxFormPopup(){
		$( document ).on( 'click', ".form-popup-trigger a, .lets-talk-popup a", function(){
			setTimeout( function(){

				$('.elementor-popup-modal form.wpcf7-form:not(.elementor)').each( function(index){
					$(this).find('.ajax-loader').remove();
					wpcf7.initForm( $(this) );
					$(this).addClass('elementor');

					// Evita que se cierre automáticamente el popup cuando se envía el form
					$(this).on('submit', function(e){ e.preventDefault(); });
				} );

			}, 800 ); // END Timeout.

		} );
	}
	initAjaxFormPopup();





	if( $('.mc4wp-form').length ){
		
		$('.mc4wp-form #email').on('keyup', function(){
			$('.wpcf7-form #subscription-email').val( $('.mc4wp-form #email').val() );
		});

		$('.mc4wp-form').on('submit', function(e){
			$('#mailchimp-subscription-bymail form').submit();
		});

	}





	if( $('.lets-talk-popup').length ){

		$('.lets-talk-popup').on('click', function(e){
			e.preventDefault();
	
			var _cta = $(this).closest('.elementor-element').data('cta');
			if( _cta ){
				setTimeout(function(){
					$('.form-popup-wrapper #cta-form').val(_cta);
				}, 1500);
			}

		});

	}





	if( $('#btn-subscribe').length ){

		$('#btn-subscribe').on('click', function(){
			var _top = jQuery('#newsletter-form').offset().top;
			jQuery('body, html').animate({'scrollTop': _top}, 800);
			jQuery('#newsletter-form [type=email]').focus();
		});

	}




	if( $('#newsletter-form-container .tyc label').length ){
		$('#newsletter-form-container .tyc label').prop('for', 'tyc');
	}


});