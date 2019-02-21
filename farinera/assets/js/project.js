$.noConflict();

(function($){
'use strict';



// HERO
if( $('.hero')[0] ){
	$('.hero').owlCarousel({
		items:              1,
		loop:               true,
		smartSpeed:         1200,
		// autoplay:           true,
		// autoplayTimeout:    4000,
		// autoplayHoverPause: true
	});
}



// TWITTER FEED
if( $('.twitter-feed .feed')[0] ){
	$('.twitter-feed .feed .owl-carousel').owlCarousel({
		loop: 							true,
		margin: 						10,
		stagePadding: 			1,
		dots: 							false,
		// autoplay:           true,
		// autoplayTimeout:    4000,
		// autoplayHoverPause: true,
		responsive:{
			0:{
				items: 1
			},
			600:{
				items: 2
			},
			1000:{
				items: 3
			},
			// 1300:{
			// 	items: 3
			// }
		}
	});
}



// SIMPLE LIGHTBOX
if( $('.lightbox-gallery')[0] ){
	$('.lightbox-gallery .lightbox-item').simpleLightbox();
}



moment.locale('ca');


// CALENDAR
if( $('.calendar')[0] ){

	$('.calendar').each(function(){

		var _cal = $(this),
				_dateStart = _cal.data('cal-start'),
				_dateEnd = _cal.data('cal-end');

		if( $.type(_dateStart) === 'string' && $.type(_dateEnd) === 'string' ){

			_cal.datetimepicker({
				inline: true,
				format: 'day',
				minDate: _dateStart,
				maxDate: _dateEnd,
				enabledDates: ['01/01/1920'],
				icons:{
					previous: 'hidden',
					next: 'hidden'
				}
			});


			if( _cal.data('cal-dates') ){
				var _dates = _cal.data('cal-dates').split(',');
				
				$.map(_dates, function(v,i){
					_cal.find('[data-day="'+v+'"]').addClass('highlight');
				});

				_cal.find('.highlight').on('click', function(){
					var _el = $(this),
							_info = _el.data('day').replace(/\//g,'-');
					
					$('.event-info').collapse('hide');
					$('#'+_info).collapse('show');

					// console.log( $('#'+_info).length );
				});

			}

		}

	});

}




})(jQuery)













