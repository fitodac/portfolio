$.noConflict();

jQuery(document).ready(function($){

// Code that uses jQuery's $ can follow here.

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
	window.location = window.location.origin + '/station';
});






/*---------------------------------------------------------*/
/*  NAVIGATION  */
/*---------------------------------------------------------*/
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
	window.location = window.location.origin + '/station';
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
		$('.nav-background .nav-sidebar, .nav-background .social').addClass('fade');
	}else{
		$('.nav-background .nav-sidebar, .nav-background .social').removeClass('fade');
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




$('.get-report').on('shown.bs.tab', function(e){
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
		
		console.log($(window).width());
		console.log($win_width);
	}
}//sliderwidth()


sliderwidth();
$(window).resize(function(){ sliderwidth() });











pageload();
main_map();

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
				$('body > .loader-wrapper').addClass('animated bounceOutDown');
			}, 300);
			
			current = items.length;
		}	
	}//completeLoading()


	getImages(document);
	preloading();

}//pageload







	

