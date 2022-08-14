var acompaniaRYC = {
	init: function(){
		return;
	},



	/*---------------------------------------------------*/
	/*	MODAL VIDEO
	/*---------------------------------------------------*/
	videoReel: function(){

		if( $('.video-link a').length ){

			var _modal = $('#videoReel'),
					_iframe = $('#videoReel iframe'),
					_src = _iframe.attr('src');

			_iframe.attr('src','');
			

			$('.video-link a').on('click', (e) => {
				e.preventDefault();
				
				_modal
				.modal('show')
				.on('shown.bs.modal', () => {
					_iframe.attr('src', _src+'&autoplay=1&loop=1&autopause=0');
				})
				.on('hidden.bs.modal', () => {
					_iframe.attr('src', '');
				});
			})
		}

	},




	/*---------------------------------------------------*/
	/*	FAQ COMPONENT
	/*---------------------------------------------------*/
	faq: function(){
		if( $('.smpx-faq').length ){

			$('.smpx-faq .smpx-faq-nav').addClass('sticky-top');
			var _faq_nav_top = $('.smpx-faq .smpx-faq-nav').offset().top;
	
			$('.smpx-faq .nav-item').on('click', function(e){
				e.preventDefault();
				var _id = $(this).attr('href'),
						_top = $(_id).offset().top;
				// console.log( $(_id).offset().top );
	
				$('body, html').animate({scrollTop: _top - 80}, 800);
			});
	
	
			// Add margin top to faq menu
			function amttfm(){
				if( $(window).scrollTop() > _faq_nav_top ){
					$('.smpx-faq .smpx-faq-nav').css('paddingTop', 80);
				}else{
					$('.smpx-faq .smpx-faq-nav').css('paddingTop', 0);
				}
			}
	
			amttfm();
			$(window).on('scroll', amttfm);
	
		}


		if( $('.wpcf7-form').length ){
			$('.wpcf7-form').on('submit', function(){ $('.wpcf7-form .wpcf7-submit').fadeOut(300) });
		}

	},


	/*---------------------------------------------------*/
	/*	CONTACT
	/*---------------------------------------------------*/
	contact: function(){

		function validate(el){

			var field = $('#'+$(el).data('validate')),
					valid = false,
					message = '';


			// Valida si es un input email
			if( field.hasClass('wpcf7-validates-as-email') ){
				valid = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(field.val());
				message = 'Debes completar este campo con un email válido para continuar';
			
			// Valida si es un input text
			}else{
				valid = ( field.val() != '' );
				message = 'Debes completar este campo para continuar';
			}


			if( valid ){
				field.removeClass('wpcf7-not-valid');
				field.next( $('.wpcf7-not-valid-tip') ).length ? field.next('.wpcf7-not-valid-tip' ).hide() : false;
			}else{
				field.addClass('wpcf7-not-valid');
				field.next( $('.wpcf7-not-valid-tip') ).length ? field.next('.wpcf7-not-valid-tip' ).show() : field.after('<span class="wpcf7-not-valid-tip">'+message+'</span>' );
			}

			return valid;

  	}



		if( $('.page-template-page-contact').length ){

			$('.wpcf7-form').attr('data-step', 'step1');

			$('[data-next]').on('click', function(){
				if( validate( $(this) ) ){
					$('.wpcf7-form').attr('data-step', $(this).data('next'));
					$('.step').removeClass('active');
					$('#'+$(this).data('next')).addClass('active');

					$('.wizzard .indicators span').removeClass('active');
					$('.wizzard .indicators span.'+$(this).data('next')).addClass('active');
				}
			});
		}

	}

};


(function(){
	acompaniaRYC.faq();
	acompaniaRYC.contact();
	acompaniaRYC.videoReel();
	// $(document).ready(function(){
	// });
})()