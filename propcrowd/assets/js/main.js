$.noConflict();

(function($){
'use strict';



$(document).ready(function(){


	// Main hero
	if( $('#mainHero')[0] ){

		$('#mainHeroSlider').owlCarousel({
			items: 1,
			loop: true,
			smartSpeed: 800,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause: true,
			dots: true
		});

	}





	// Tabbbs
	if( $('#tabbbsSlider')[0] ){

		var _limit = 992;

		$('#tabbbsSlider')
		.on('changed.owl.carousel', function(e){
			setTimeout(function(){
			let clones = $('#tabbbsSlider .owl-item.cloned').length/2,
					i = $('#tabbbsSlider .owl-item.active').index();

			if( $(window).width() > _limit){
				$(`.logos .logo`).removeClass('active');
				$(`.logos .logo:eq(${i - clones})`).addClass('active');
			}else{
				$('#tabbbs .logos').trigger('to.owl.carousel', i - clones);
			}
			}, 200);
		})
		.owlCarousel({
			items: 1,
			loop: true,
			smartSpeed: 800,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			dots: false,
			nav: true
		});


		if( $(window).width() > _limit){
			$(`.logos .logo`).on('click', function(){
				let i = $(this).data('tabbb');
				$('#tabbbsSlider').trigger('to.owl.carousel', i);
			})
		}


		function toggleTabbbNav(){
			if( $(window).width() < _limit){

				$('#tabbbs .logos').owlCarousel({
					items: 1,
					loop: true,
					smartSpeed: 800,
					autoplay: false,
					autoplayTimeout: 3000,
					autoplayHoverPause: true,
					dots: false,
					nav: true
				});

			}else{

				$('#tabbbs .logos').owlCarousel('destroy');

			}
		}

		$(window).on('resize', toggleTabbbNav);
		toggleTabbbNav();

	}










	// Testimonials
	if( $('#testimonialsSlider')[0] ){
	
		$('#testimonialsSlider')
		.on('changed.owl.carousel', function(e){
			let i = $('#testimonialsSlider .owl-item.active').index();
			$('#testimonialsPicturesSlider').trigger('to.owl.carousel', i-1);
		})
		.owlCarousel({
			items: 1,
			loop: true,
			smartSpeed: 800,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			dots: true,
			// nav: true
		});

		$('#testimonialsPicturesSlider').owlCarousel({
			items: 1,
			loop: true,
			smartSpeed: 800,
			autoplay: false,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			dots: false,
			// nav: true
		});

	}











	// Range slider
	if( $('.range')[0] ){

		var _w = $('.range').parent().outerWidth();

		$(window).resize(function(){ 
			_w = $('.range').parent().outerWidth();
			var _val = $('.slider .range').val();
			$('.slider .range, .slider .slider-container').remove();
			$('form.slider').prepend('<input type="hidden" class="range" value="'+_val+'">');
			createRange();
		});

		createRange();

		function createRange(){
			$('.range').jRange({
				from: 100,
				to: 10000,
				step: 50,
				// scale: [-2.0,-1.0,0.0,1.0,2.0],
				format: 'Inviertes %s€',
				width: _w,
				showLabels: true,
				snap: true,
				
				polyfill: false,
				// Callback function
				onInit: function() {
						valueOutput(this.$element[0]);
				},
				// Callback function
				onSlide: function(position, value) {
						console.log('onSlide');
						console.log('position: ' + position, 'value: ' + value);
				},
				// Callback function
				onSlideEnd: function(position, value) {
						console.log('onSlideEnd');
						console.log('position: ' + position, 'value: ' + value);
				}

			});
		}

	}



	$('.slider input.range').on('change', function(){
		let val = parseInt($(this).val()),
				percent = (val / 100)*10;

		$('.slider [type=number]').val(percent);
	})

});





if( $('.back-to-top')[0] ){

	function bttVisibilityToggler(){
		let winHeight = $(window).height(),
		winTop = $(window).scrollTop();
		
		if( winTop > winHeight/2 ){
			$('.back-to-top').addClass('on');
		}else{
			$('.back-to-top').removeClass('on');
		}
	}
	

	$('.back-to-top').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: 0});
	});

	bttVisibilityToggler();
	$(window).on('scroll', bttVisibilityToggler);
}





// Porque Propcrowd - Overlay de iconos
if( $('[data-hv]')[0] ){

$('[data-hv]').on('mouseenter', function(){
	let id = $(this).data('hv');
	$(`#ov-${id}`).addClass('on');
});

$('.hover').on('mouseleave click', function(){
	$('.hover').removeClass('on');
});


function positionForIconsHovers(){

	if( $(window).width() >= 992 ){

		$('[data-hv]').each(function(){
			
			let pos = $(this).offset(),
			id = $(this).data('hv'),
			limit = $('.icons-grid').offset().top,
			width = $(this).outerWidth(),
			left = pos.left,
			top = pos.top - limit;
			
			
			if( $(`#ov-${id}`).hasClass('icon-right') ){
				left = pos.left - ($(`#ov-${id}`).outerWidth() - width);
			}
			
			$(`#ov-${id}`).css({left:`${left}px`, top:`${top}px`});
			
		});

	}else{

		$('[data-hv]').each(function(){
			
			let pos = $(this).offset(),
					id = $(this).data('hv'),
					limit = $('.icons-grid').offset().top,
					top = (pos.top - limit) - 40;
			
			$(`#ov-${id}`).css({left: 0, top:`${top}px`});
			
		});

	}
	
}


positionForIconsHovers();
$(window).on('resize', positionForIconsHovers);

}//[data-hv]





})(jQuery)