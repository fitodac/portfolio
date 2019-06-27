$.noConflict();


(function($) {
'use strict';


var $window = $(window),
		$body = $('body'),
		$winHeight = $window.height();

var isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};


jQuery(document).ready(function($){


	if( !isMobile.any() && $window.width() > 750 ){
		/*---------------------------------------------*/
		/*  DESKTOP VERSION  */
		/*---------------------------------------------*/

		$.stellar({
			hideDistantElements: false,
			scrollProperty: 'scroll',
			// positionProperty: 'transform',
			hideElement: function($elem){ 
				// $elem.fadeOut(200);
			},
			showElement: function($elem){
				// $elem.show();
			}
		});

		scrollme.init_if = function() { return(true); }
		// End desktop version
	}else{
		/*---------------------------------------------*/
		/*  MOBILE VERSION  */
		/*---------------------------------------------*/

		scrollme.init_if = function() { return(false); }

		$('body').css('paddingTop',$window.height());

		
		// Hide header on scroll event
		var lastScrollTop = 0,
				limit = 100;

		$window.scroll(function(event){
			var st = $(this).scrollTop();
			if( st > lastScrollTop ){

				if( $window.scrollTop() >= limit ){
					$('header').fadeOut(400);
				}
				
			}else{

				if( $window.scrollTop() < limit ){
					$('header').fadeIn(400);
				}

			}
			lastScrollTop = st;
		});

		// $('header video').get(0).play();
	}// End movbile version

	
	


	
	// alert($window.width());

	resizeSection();

	$window.resize(function(){
		resizeSection();
	});



	$window.scroll(function(){
		animateHelmet();
		animateLogo(100);
		// videoControl(100);
	});

	animateLogo(100);


	owlCarousels();
	getMaps();
	


	$('.brand').on('click', function(e){
		e.preventDefault();
		$('body, html').stop().animate({scrollTop:0}, '500', 'swing', function() { 
		  // any function
		});
	});


});//DOM ready




function resizeSection(){
	$('header').height($window.height());
}


// HELMET ANIMATION
var $scrollCont = 0,
		$imgBase = 0,
		$cur = [0,1,2,3,4,5,6,7,6,5,4,3,2,1];


function animateHelmet(){
	if( $scrollCont == 3 ){
		if( $imgBase < $cur.length ){
			$imgBase++;
		}
		if( $imgBase == $cur.length ){
			$imgBase = 0;
		}

		$scrollCont = 0;
	}else{
		$scrollCont++;
	}
	
	$('.helmet-animated > div').addClass('hide');
	$('.helmet-animated > div').eq($cur[$imgBase]).removeClass('hide');
}




// LOGO ANIMATION
function animateLogo(xTop){
	if( $window.scrollTop() >= xTop ){
		$('.brand').addClass('small-brand');
	}
	if( $window.scrollTop() < xTop ){
		$('.brand').removeClass('small-brand');
	}
}


// PLAY / PAUSE VIDEO
function videoControl(xTop){
	if( $window.scrollTop() >= xTop ){
		tv.pauseVideo();
	}
	if( $window.scrollTop() < xTop ){
		tv.playVideo();
	}
}






})(jQuery);





var owlCarousels = function(){
	var $ = jQuery;

	$('.recomendations-slider').owlCarousel({
		singleItem : true,
		slideSpeed: 700,
		autoPlay: 7000,
		stopOnHover : true,
		pagination: false,
		navigation : true,
		navigationText : ["prev","next"]
	});


	$('.brands-slider').owlCarousel({
		items : 4,
		slideSpeed: 700,
		autoPlay: 3000,
		itemsMobile: [479,2],
		itemsTablet: [768,3]
	});
}





var getMaps = function(){
	
	var $ = jQuery,
			$body = $('body');

	// MAPS
	$('.getmap').on('click', function(e){
		e.preventDefault();

		if( !$('.the-map')[0] ){
			$body.append('<div class="the-map">'+
				'<a href="#" class="closemap">CERRAR</a>'+
				'<div></div>');

			$body.addClass('overflow-hidden');

			var $lat = $(this).data('latitude');
			var $lon = $(this).data('longitude');
			
			$lat == null ? $lat = '-27.3306232' : '';
			$lon == null ? $lon = '-55.8614007' : '';

			

			$('.the-map > div').gmap3({
				defaults:{ 
		      classes:{
		        Marker:MarkerWithLabel
		      }
		    },
		    map:{
		      options:{
			      center:[parseFloat($lat), parseFloat($lon)],
			      zoom: 17,
			      scrollwheel: false,
				    navigationControl: false,
				    mapTypeControl: false,
				    scaleControl: false,
				    // draggable: false,
			    }
		    }
		    ,
		    marker:{
		    	values:[
		        {
		        	latLng:[-27.330628, -55.859212],
				      options:{
				        labelContent: "$425K",
				        labelAnchor: new google.maps.Point(52, -2),
				        labelClass: "pin-tooltip-a pin-tooltip",
				        // labelStyle: {opacity: 1},
				        labelContent: '<span class="pin-tooltip-head">CENTRAL</span><span class="pin-tooltip-body">Av. Irrazabal 1234</span>'
				      }
		        },
		        {
		        	latLng:[-27.357331, -55.851132],
				      options:{
				        labelContent: "$425K",
				        labelAnchor: new google.maps.Point(52, -2),
				        labelClass: "pin-tooltip-b pin-tooltip",
				        // labelStyle: {opacity: 0.75},
				        labelContent: '<span class="pin-tooltip-head">SUC. BEATO</span><span class="pin-tooltip-body">Av. Irrazabal 1234</span>'
				      }
		        },
		        {
		        	latLng:[-27.356944, -55.848006],
				      options:{
				        labelContent: "$425K",
				        labelAnchor: new google.maps.Point(52, -2),
				        labelClass: "pin-tooltip-b pin-tooltip",
				        // labelStyle: {opacity: 0.75},
				        labelContent: '<span class="pin-tooltip-head">CIRCUITO COMERCIAL</span><span class="pin-tooltip-body">Av. Irrazabal 1234</span>'
				      }
		        },
		      ]
		    }
			});

			$('.closemap').on('click', function(e){
				e.preventDefault();
				$('.the-map').fadeOut(400, function(){
					$body.removeClass('overflow-hidden');
					$('.the-map').detach();
				});
			});

		}

	});
}






/*----------------------------------------------*/
// VIDEO YOUTUBE
// Credits: codepen.io/ccrch/pen/GgPLVW
/*----------------------------------------------*/
var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';

var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var tv,
		playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};

var vid = [
      {'videoId': 'K_Jb8OXqXKE', 'startSeconds': 0, 'endSeconds': 470, 'suggestedQuality': 'hd720'},
		],
		randomvid = Math.floor(Math.random() * (vid.length - 1 + 1));

// console.log(vid[randomvid]);



function onYouTubePlayerAPIReady(){
	// console.log('onYouTubePlayerAPIReady');
  tv = new YT.Player('tv', 
  		{
  			events: {
	  			'onReady': onPlayerReady, 
	  			'onStateChange': onPlayerStateChange
	  		}, 
  			playerVars: playerDefaults
  		});

  vidRescale();
}



function onPlayerReady(){
  tv.loadVideoById(vid[0]);
  tv.mute();
}


var videoLoad = false;

function onPlayerStateChange(e){
	// console.log('onPlayerStateChange');
  if( e.data === 1 ){
    jQuery('#tv').addClass('active');
  }else if( e.data === 0 ){
    tv.seekTo(vid[randomvid].startSeconds)
  }

  videoLoad = true;
  // pageload();
}



function vidRescale(){
  var w = jQuery(window).width()+200,
			h = jQuery(window).height()+200;

  if( w/h > 16/9 ){
    tv.setSize(w, w/16*9);
    jQuery('.tv .screen').css({'left': '0px'});
  }else{
    tv.setSize(h/9*16, h);
    jQuery('.tv .screen').css({'left': -(jQuery('.tv .screen').outerWidth()-w)/2});
  }
}





	

