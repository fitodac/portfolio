$.noConflict();

jQuery(document).ready(function($){


$('html').addClass( platform.name );




$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();



$('.menu-toggle')
.on('click', function(e){
	e.preventDefault();
	$('.container').toggleClass('nav-visible');
})
.on('mouseover', function(){
	$('.container').addClass('nav-prop');
})
.on('mouseout', function(){
	$('.container').removeClass('nav-prop');
});


$('.hide-nav').on('click', function(){
	$('.container').removeClass('nav-visible');

	$('.nav-user .login-form').removeClass('in');
	$('.nav-user .signin-form').removeClass('in');

	$('.nav-background .nav-sidebar, .nav-background .social').removeClass('fade');
});





/*---------------------------------------------------------*/
/*  WEATHER REPORT  */
/*---------------------------------------------------------*/
$('.weather-report .slider-container').slick({
	prevArrow: '<span class="fa fa-chevron-left"></span>',
	nextArrow: '<span class="fa fa-chevron-right"></span>',
	autoplay: true,
  autoplaySpeed: 4000
});







/*---------------------------------------------------------*/
/*  SELECT  */
/*---------------------------------------------------------*/
$('.block-nav .selector').on('click', function(){
		
	if( !$(this).hasClass('disabled') ){
		if( $(this).hasClass('location-selector') ){
			$('#station-select-home #locations').removeClass('hidden');
			$('#station-select-home #stations').addClass('hidden');
		}
		
		if( $(this).hasClass('station-selector') ){
			$('#station-select-home #locations').addClass('hidden');
			$('#station-select-home #stations').removeClass('hidden');
		}
		
		$('#station-select-home').addClass('in');
	}
});



$('body.home #locations li').on('click', function(){
	var $text = $(this).text();
	
	$('.block-nav .location-selector span').text($text);
	$('#station-select-home').removeClass('in');
	$('.block-nav .selector').removeClass('disabled');
});


$('body.home #stations li').on('click', function(){
	var $text = $(this).text();
	
	$('.block-nav .station-selector span').text($text);
	$('#station-select-home').removeClass('in');
	location.href = location.origin + '/agroclima/station';
});






/*---------------------------------------------------------*/
/*  NAVIGATION  */
/*---------------------------------------------------------*/
function nav_wrapper_height(){
	var $win_h = $(window).height(),
			$pad = parseInt($('.nav-wrapper').css('paddingTop')) + parseInt($('.nav-wrapper').css('paddingBottom'));

	$('.nav-wrapper').height($win_h - $pad);

	$
}//nav_wrapper_height()

nav_wrapper_height();

$(window).resize(function(){
	nav_wrapper_height();
});



$('.nav-station').on('click', function(e){
	e.preventDefault();
	
	$('#station-select #locations').removeClass('hidden');
	//$('#station-select #stations').removeClass('hidden');
	$('#station-select').addClass('in');
});



$('#station-select #locations li').on('click', function(){
	var $station_list = $(this).data('stations');
	
	$('#station-select #stations .selectable-list').addClass('hidden');
	$('#station-select #stations .' + $station_list).removeClass('hidden');
	
	console.log($station_list);
});


$('#station-select #stations li').on('click', function(){
	location.href = location.origin + '/agroclima/station';
});


$('.nav-sidebar .disabled').on('click', function(e){
	e.preventDefault();
});






/*---------------------------------------------------------*/
/*  NAV FORMS  */
/*---------------------------------------------------------*/
var $nav_fade = 0;


$('.btn-login').on('click', function(e){
	e.preventDefault();
	
	$('.nav-user .login-form').toggleClass('in');
	$('.nav-user .signin-form').removeClass('in');
	togglenav();
});


$('.btn-signin').on('click', function(e){
	e.preventDefault();
	
	$('.nav-user .login-form').removeClass('in');
	$('.nav-user .signin-form').toggleClass('in');
	togglenav();
});


function togglenav(){
	if( $('.nav-user .login-form').hasClass('in') || $('.nav-user .signin-form').hasClass('in') ){
		$('.nav-background .nav-sidebar, .nav-background .social').addClass('fade');
	}else{
		$('.nav-background .nav-sidebar, .nav-background .social').removeClass('fade');
	}
}







/*---------------------------------------------------------*/
/*  CONTACT  */
/*---------------------------------------------------------*/
$('.get-contact').on('click', function(e){
	e.preventDefault();
	
	$('#contact-lightbox').addClass('in');
});







/*---------------------------------------------------------*/
/*  NEWS  */
/*---------------------------------------------------------*/
function resize_news_slider(){
	
	if( $(window).width() > 887 ){
		var $w100 = parseInt( $(window).width() ) / 100,
				 $pad = parseInt( $('.block-news').css('paddingLeft') ) + parseInt( $('.block-news').css('paddingRight') ),
				 $w = (($w100*30) -$pad) - 2;
	}else{
		var $w100 = parseInt( $(window).width() ),
				 $pad = parseInt( $('.block-news').css('paddingLeft') ) + parseInt( $('.block-news').css('paddingRight') ),
				 $w = ($w100 -$pad) - 2;
	}
	
	$('.news-slider').css({width:$w});
	$('.news-slider .slick-slide').css({width:$w});
}


resize_news_slider();
$(window).resize(function(){ resize_news_slider() });


$('.news-slider').slick({
	arrows: false,
	dots: false,
	autoplay: true,
  autoplaySpeed: 9000
});

$('.block-news a.fa').on('click', function(e){
	e.preventDefault();
	
	if( $(this).hasClass('fa-chevron-left') ){
		$('.news-slider').slickPrev();
	}
	
	if( $(this).hasClass('fa-chevron-right') ){
		$('.news-slider').slickNext();
	}
});








/*---------------------------------------------------------*/
/*  OVERLAY  */
/*---------------------------------------------------------*/
$('.overlay-toggle').on('click', function(){
	$('.overlay').removeClass('in');
});





/*---------------------------------------------------------*/
/*  GET REPORT  */
/*---------------------------------------------------------*/
$('.get-report-panel').on('click', function(e){
	e.preventDefault();

	$('.station-report').addClass('in');
	$('.page-header').addClass('alt');
	setTimeout(function(){ $('.station-details').removeClass('in') }, 1000);
});




$('body.location .get-report').on('shown.bs.tab', function(e){
	e.preventDefault();
	
	var $active_nav = $(this).data('active-nav');
		
	$('.report-view').find( '.' + $active_nav ).parent().addClass('active');
	setTimeout( $charts(), 2500);
	
	$('.report-view').addClass('in');
	$('.station-report').addClass('to-left');
});






$('.btn-back-to-map').on('click', function(e){
	e.preventDefault();
	
	$('.station-report').removeClass('in');
	setTimeout(function(){ 
		$('.page-header').removeClass('alt');
		$('.station-report').removeClass('to-left');
		$('.report-view').removeClass('in');
		$('.report-view .sidebar .active').removeClass('active');
	}, 500);
});






/*---------------------------------------------------------*/
/*  STATION SLIDER  */
/*---------------------------------------------------------*/
if( $('.station-picture-slider').length > 0 ){

	$('.station-picture-slider').slick({
		arrows: false,
		speed: 700,
		autoplay: true,
	  autoplaySpeed: 6000
	});


	$('.station-picture-slider-nav a').on('click', function(e){
		e.preventDefault();
		
		if( $(this).hasClass('spn-left') ){
			$('.station-picture-slider').slickPrev();
		}
		
		if( $(this).hasClass('spn-right') ){
			$('.station-picture-slider').slickNext();
		}
	});
	
}



var sliderwidth = function(){
	
	if( $(window).width() < 887 ){
		var $win_width = parseInt( $(window).width() ) -30;
		$('.station-picture-slider, .slick-list').width($win_width);
		
		// console.log($(window).width());
		// console.log($win_width);
	}
}//sliderwidth()


sliderwidth();
$(window).resize(function(){ sliderwidth() });





// In case of IE9 :(
if(navigator.userAgent == 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; WOW64; Trident/5.0)'){
	alert('Este sitio ha sido desarrollado para un navegador mas moderno que el que estás usando. Porfavor, actualiza tu navegador para obtener una mejor experiencia de usuario.');
}




	pageload();
	main_map();
	report();







	$('#weather-week .panel-heading [data-toggle="collapse"]').on('click', function(){
		var $this = $(this);

		if( $this.closest('.panel-heading').hasClass('active') ){
			$this.closest('.panel-heading').removeClass('active');
		}else{
			$('#weather-week .panel-heading').removeClass('active');
			$this.closest('.panel-heading').addClass('active');
		}
	});


/*---------------------------------------------------------*/
/*  HOURLY REPORT  */
/*---------------------------------------------------------*/
if( $('#weather-week').length > 0 ){
	$('#weather-week').on('shown.bs.collapse', function(){
		
		var $get_id = $(this).find('.panel-collapse.in').attr('id'),
				$id = $('#' + $get_id);

		var $block_width = $id.find('.report-hourly .hour-grid > div:eq(0)').width();
		
		// console.log( $block_width );

		$id.find('.report-hourly .report > div').each(function(){
			var $w = $(this).data('blocks');

			// console.log($block_width);
			// console.log($w);

			if( $w > 0 ){
				$(this).width($block_width * $w);
				$(this).find('> div').width(($block_width * $w) -2);
			}
		});



		/*---------------------------------------------------------*/
		/*  HOUR MARKER  */
		/*---------------------------------------------------------*/
		var $cur_hour = new Date(),
				$hour = $cur_hour.getHours(),
				$elem = '',
				$elem_width = 0,
				$elem_length = $(this).find('#hg' + $hour).length,
				$arrow = parseInt($(this).find('.day-mark span i').css('border-bottom-width')),
				$pos = 0;

			if( $elem_length == 0 ){
				$elem = $(this).find('#hg' + ($hour -1));
				$elem_width = $elem.width();
				$pos = $elem.position().left;
				$(this).find('.day-mark span').css('transform', 'translateX('+($pos + ($elem_width/2) +5)+'px)');
			}else{
				$elem = $(this).find('#hg' + $hour); 
				$pos = $elem.position().left;
				$(this).find('.day-mark span').css('transform', 'translateX('+($pos +6)+'px)');
			}




	});
}








	/*---------------------------------------------------------*/
	/*  DATE SELECT  */
	/*---------------------------------------------------------*/
  if( $('.day-select')[0]){
  
	  $('.day-select').datepaginator({
		  selectedDateFormat: 'YYYY-MM-DD',
		  showOffDays: false,
		  itemWidth: 200,
		  selectedItemWidth: 300,
		  text: '<\\div \\c\\l\\a\\ss="\\mont\\h"> </\\div><\\div \\c\\l\\a\\ss="\\d\\ay">dddd</\\div><\\div \\c\\l\\a\\ss="\\d\\at\\e">Do</\\div>',
		  textSelected: '<\\div \\c\\l\\a\\ss="\\mont\\h">MMMM YYYY</\\div><\\div \\c\\l\\a\\ss="\\d\\ay">dddd</\\div><\\div \\c\\l\\a\\ss="\\d\\at\\e">Do</\\div>',
		  showCalendar: false
		})
	  .on('selectedDateChanged', function(event, date) {
		  console.log(event);
		  console.log(date);
		});

	  $('.dp-nav-left i').removeClass('glyphicon glyphicon-chevron-left').addClass('fa fa-angle-left');
	  $('.dp-nav-right i').removeClass('glyphicon glyphicon-chevron-right').addClass('fa fa-angle-right');

	  var $block_width = $('.report-hourly .hour-grid > div:eq(0)').width();

		$('.report-hourly .report > div').each(function(){
			var $w = $(this).data('blocks');

			if( $w > 0 ){
				$(this).width($block_width * $w);
				$(this).find('> div').width(($block_width * $w) -3);
			}
		});

		/*---------------------------------------------------------*/
		/*  PEP SLIDE  */
		/*---------------------------------------------------------*/
		$('.pep.x').pep({
			axis: 'x', 
			constrainTo: 'parent',
			droppable: ".droppable",
      overlapFunction: false,
      // useCSSTranslation: false,
      drag: function(ev, obj){
      	var $pepdpa = $('.pep-dpa'), 
      			$temp = $pepdpa.data('temp'), 
      			$humidity = $pepdpa.data('humidity'),
      			$pressure = $pepdpa.data('pressure'),
      			$wind = $pepdpa.data('wind'),
      			$rain = $pepdpa.data('rain');

      	$('.data-temp').text($temp);
      	$('.data-humidity').text($humidity);
      	$('.data-pressure').text($pressure);
      	$('.data-wind').text($wind);
      	$('.data-rain').text($rain);
      }
		});



		function datepagresponsive(){
			if( $(window).width() <= 768 ){
				console.log('w768');


				$('.day-select').datepaginator({
				  selectedDateFormat: 'YYYY-MM-DD',
				  showOffDays: false,
				  itemWidth: 50,
				  selectedItemWidth: 260,
				  text: '<\\div \\c\\l\\a\\ss="\\mont\\h"> </\\div><\\div \\c\\l\\a\\ss="\\d\\ay">dddd</\\div><\\div \\c\\l\\a\\ss="\\d\\at\\e">Do</\\div>',
				  textSelected: '<\\div \\c\\l\\a\\ss="\\mont\\h">MMMM YYYY</\\div><\\div \\c\\l\\a\\ss="\\d\\ay">dddd</\\div><\\div \\c\\l\\a\\ss="\\d\\at\\e">Do</\\div>',
				  showCalendar: false
				});

			}

			// if( ($(window).width() > 768) && ($(window).width() <= 992) ){
			// 	console.log('w992');

			// 	$('.day-select').datepaginator({
			// 	  selectedDateFormat: 'YYYY-MM-DD',
			// 	  showOffDays: false,
			// 	  itemWidth: 200,
			// 	  selectedItemWidth: 300,
			// 	  text: '<\\div \\c\\l\\a\\ss="\\mont\\h"> </\\div><\\div \\c\\l\\a\\ss="\\d\\ay">dddd</\\div><\\div \\c\\l\\a\\ss="\\d\\at\\e">Do</\\div>',
			// 	  textSelected: '<\\div \\c\\l\\a\\ss="\\mont\\h">MMMM YYYY</\\div><\\div \\c\\l\\a\\ss="\\d\\ay">dddd</\\div><\\div \\c\\l\\a\\ss="\\d\\at\\e">Do</\\div>',
			// 	  showCalendar: false
			// 	});

			// }

		}

		datepagresponsive();

		$(window).resize(function(){
			datepagresponsive();			
		});

	}
















	$charts();









});//jQuery






/*---------------------------------------------------------*/
/*  MAIN MAP  */
/*---------------------------------------------------------*/
function main_map(){
	$ = jQuery;
	
	var $pin = '/assets/images/pin.png';
	
	
	$('.main-map').gmap3({
	  map:{
	    options:{
	      center:[-25.368782,-54.9624596],
	      zoom: 10,
				scrollwheel: false,
	      panControl: true,
        overviewMapControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.MEDIUM,
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				panControlOptions: {
					position: google.maps.ControlPosition.LEFT_CENTER
				},
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	  },
	  marker:{
	    values: [
	      {
					address:"Doctor Juan León Mallorquín", 
					data:'Estación 1', 
					tag: 'estacion-1',
					options:{icon: $pin}
				},
				{
					address:"Juan Emilio O'Leary", 
					data:'Estación 2', 
					tag: 'estacion-2',
					options:{icon: $pin}
				},
				{
					address:"Mariscal Francisco Solano López", 
					data:'Estación 3',
					tag: 'estacion-3', 
					options:{icon: $pin}
				},
				{
					latLng:[-25.5654198,-54.9937606],
					data:'Estación 4', 
					tag: 'estacion-4',
					options:{icon: $pin}
				}
	    ],
			options:{
	      draggable: false
	    },
	    events:{
	    	click:function(marker, map, event){
		    	map_info(event.data, event.tag);
	    	},
	      mouseover: function(marker, event, context){
	      	
	        var map = $(this).gmap3('get'),
	          	 infowindow = $(this).gmap3({get:{name:'infowindow'}});
					
	        if( infowindow ){
	          infowindow.open(map, marker);
	          infowindow.setContent(context.data);
	        }else{
	          $(this).gmap3({
	            infowindow:{
	              anchor:marker, 
	              options:{content: context.data}
	            }
	          });
	        }
	        
	      },
	      mouseout: function(){
	      
	        var infowindow = $(this).gmap3({get:{name:'infowindow'}});
	        if (infowindow){
	          infowindow.close();
	        }
	        
	      }
	    }//events
	  }
	});
	
}//main_map()




function map_info($station, $data){
	// Return values for the info panel of the map
	var $ = jQuery,
			 $panel = $('.station-details'),
			 $stname = $panel.find('#station-name'),
			 $location = $panel.find('#station-location'),
			 $update = $panel.find('#station-update');
			 $air = $panel.find('#station-air'),
			 $atm = $panel.find('#station-atm'),
			 $pres = $panel.find('#station-pres'),
			 
			 $stlocation = $('.map-footer h2').text();
	
	$('.map-footer .tutorial').hide();
	
	
	switch( $data ){
		case 'estacion-1':
			var $update_info = '11 / 12 / 2014 - 08:00hs',
					 $air_info = '13.4 ºC',
					 $atm_info = '956 mb',
					 $pres_info = '0mm';
		break;
		
		case 'estacion-2':
			var $update_info = '11 / 12 / 2014 - 08:00hs',
					 $air_info = '13.4 ºC',
					 $atm_info = '956 mb',
					 $pres_info = '0mm';
		break;
		
		case 'estacion-3':
			var $update_info = '11 / 12 / 2014 - 08:00hs',
					 $air_info = '14.0 ºC',
					 $atm_info = '1021 mb',
					 $pres_info = '0.6mm';
		break;
		
		case 'estacion-4':
			var $update_info = '11 / 12 / 2014 - 08:00hs',
					 $air_info = '11.8 ºC',
					 $atm_info = '966 mb',
					 $pres_info = '0.4mm';
		break;
	}
	
	
	$stname.text($station);
	$location.text($stlocation);
	$update.text($update_info);
	$air.text($air_info);
	$atm.text($atm_info);
	$pres.text($pres_info);
	
	
	$panel.addClass('in');
		
}//map_info()







/*---------------------------------------------------------*/
/*  PRELOAD  */
/*---------------------------------------------------------*/
var pageload = function(){

	var $ = jQuery,
		 items = new Array(),
		 errors = new Array(),
		 current = 0;

	
	setTimeout(function(){
		$('body > *:not(script)').addClass('loading');
	}, 100);
	
	
	//get all images from css and <img> tag
	var getImages = function(element) {
		$(element).find('*:not(script)').each(function() {
			var url = "";
	
			if ($(this).css('background-image').indexOf('none') == -1 && $(this).css('background-image').indexOf('-gradient') == -1) {
				url = $(this).css('background-image');
				if(url.indexOf('url') != -1) {
					var temp = url.match(/url\((.*?)\)/);
					url = temp[1].replace(/\"/g, '');
				}
			} else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {
				url = $(this).attr('src');
			}
			
			if (url.length > 0) {
				items.push(url);
			}
		});
	}//getImages()


	var preloading = function(){
		if( items.length > 0 ){
			for (var i = 0; i < items.length; i++){
				if( loadImg(items[i]) );
			}
		}else{
			completeLoading();
		}
	}////preloading()
	
	var loadImg = function(url){
		var imgLoad = new Image();
		$(imgLoad)
		.load(function(){
			completeLoading();
		})
		.error(function() {
			errors.push( $(this).attr('src') );
			completeLoading();
		})
		.attr('src', url);
	}//loadImg()
	
	
	
	//update progress bar once image loaded
	var completeLoading = function() {
		current++;
	
		var per = Math.round((current / items.length) * 100),
				 dashoffset = 1000 - per *2;
		
		if( per != Infinity ){
			$('.svg-loader-circle').css({strokeDashoffset:dashoffset});
			$('.loader span').text(per+'%');
		}else{
			$('.svg-loader-circle').css({strokeDashoffset:800});
			$('.loader span').text('100%');
		}

		//if all images loaded
		if(items.length == 0 || current >= items.length){
			setTimeout(function(){
				$('body > *').removeClass('loading');
				$('body > .loader-wrapper').addClass('animated fadeOutUp');
			}, 300);
			
			current = items.length;
		}	
	}//completeLoading()

	



	getImages(document);
	preloading();

}//pageload






/*---------------------------------------------------------*/
/*  REPORT  */
/*---------------------------------------------------------*/
function report(){


	var $all_select = $('#estacion .selector').length,
			$all_active = $('#estacion .active').length;


	$('#estacion .selector').on('click', function(e){
		e.preventDefault();

		$(this).find('.fa').toggleClass('fa-toggle-off').toggleClass('fa-toggle-on');
		$(this).toggleClass('active');

		$all_active = $('#estacion .active').length;

		if( $all_active == 1 ){
			$('.info-estacion').text( $('#estacion .selector.active span').text() );
			$('#estacion .next-step').removeClass('hidden');
		}else if( $all_active > 1 ){
			$('.info-estacion').text( $all_active +' estaciones' );
			$('#estacion .next-step').removeClass('hidden');
		}else if( $all_active < 1 ){
			$('.info-estacion').text('');
			$('#estacion .next-step').addClass('hidden');
		}



		if( $(this).hasClass('toggle-all') ){
			$(this).closest('#estacion').find('.selector').each(function(){
				$(this).addClass('active');
				$(this).find('.fa').removeClass('fa-toggle-off').addClass('fa-toggle-on');
			});

			$('.info-estacion').text('Todas');

		}else{

			if( $all_select != $all_active ){
				$('#estacion .toggle-all').removeClass('active');
				$('#estacion .toggle-all .fa').removeClass('fa-toggle-on').addClass('fa-toggle-off');
			}

		}

	});




	$('#informe .btn-border').on('click', function(e){
		e.preventDefault();
		$('.info-informe').text( $(this).text() );
		$('#informe .btn-border').removeClass('active')
		$(this).addClass('active')
	});




	var $medicion_all_active = $('#medicion .active').length;


	$('#medicion .selector').on('click', function(e){
		e.preventDefault();

		$(this).toggleClass('active');

		$medicion_all_active = $('#medicion .active').length;

		if( $medicion_all_active == 1 ){
			$('.info-medicion').text( $('#medicion .selector.active span').text() );
		}else if( $medicion_all_active > 1 ){
			$('.info-medicion').text( $medicion_all_active +'+' );
		}else if( $medicion_all_active < 1 ){
			$('.info-medicion').text('');
		}



		if( $(this).hasClass('toggle-all') ){
			$(this).closest('#medicion').find('.selector').each(function(){
				$(this).addClass('active');
			});

			$('.info-medicion').text('Todas');

		}else{

			if( $all_select != $all_active ){
				$('#medicion .toggle-all').removeClass('active');
			}

		}

	});


	

	$('#intervalo .btn-border').on('click', function(e){
		e.preventDefault();
		$('.info-intervalo').text( $(this).text() );
		$('#informe .btn-border').removeClass('active')
		$(this).addClass('active')
	});





	// STEPS
	var $tep = 0;


	$('.next-step').on('click', function(){
		
		if( $tep <= 0 && $all_active > 0 ){
			next_active($tep);
		}

		if( $tep <= 1 && $('.info-informe').text() != '' ){
			next_active($tep);
		}

		if( $tep <= 2 && $('.info-medicion').text() != '' ){
			next_active($tep);
		}

		if( $tep <= 3 && $('.info-intervalo').text() != '' ){
			next_active($tep);
		}

		if( $tep <= 4 && $('.info-visualizacion').text() != '' ){
			next_active($tep);
		}
	});




	function next_active(i){
		$('.primary-nav li').eq(i).addClass('enable');

		i++;
		
		$('.primary-nav li:eq('+ i +') a').tab('show');
		$('.primary-nav li').eq(i).addClass('enable');
		
		$tep++;

		// TAB NAVIGATION
		$('.primary-nav li.enable a').on('click', function(){
			$(this).tab('show');
		});
	}




}//report()










	

