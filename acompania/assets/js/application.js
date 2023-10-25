


// SLIDESHOW
if( jQuery('.vimeo-gallery').length > 0 ){
	var _vimeo = 'https://vimeo.com/';

	var data = {
	  'main' : _vimeo+'171062843',
	  'videos' : [
	    { 'url' : _vimeo+'171062841' },
	    { 'url' : _vimeo+'171062840' },
	    { 'url' : _vimeo+'132174621' },
	    { 'url' : _vimeo+'132173729' },
	    { 'url' : _vimeo+'91840674' },
	    { 'url' : _vimeo+'91840672' },
	    { 'url' : _vimeo+'45972631' },
	    { 'url' : _vimeo+'45972634' },
	    { 'url' : _vimeo+'45972066' },
	    { 'url' : _vimeo+'45972168' },
	    { 'url' : _vimeo+'45972166' },
	    { 'url' : _vimeo+'45972167' },
	    { 'url' : _vimeo+'45972627' },
	    { 'url' : _vimeo+'45973103' },
	    { 'url' : _vimeo+'45973103' },
	    { 'url' : _vimeo+'45973104' }
	  ]
	}

	Vimeo.init({
	  container: jQuery('.vimeo-gallery')
	});

}





$.noConflict();
jQuery(document).ready(function($){



/*---------------------------------------------------------*/
/*  SLIDESHOW
/*---------------------------------------------------------*/
if( $('.main-slider-container').length > 0 ){
  $('.main-slider-container').slick({
    dots: true,
    arrows: true,
    draggable: false,
    fade: true,
    speed: 500,
    cssEase: 'ease-out',
    slidesToShow: 1,
  	slidesToScroll: 1,
    // autoplay: true,
    autoplay: false,
  	autoplaySpeed: 3500,
  	responsive: [
	  	{ breakpoint: 480,
	      settings: {
	        draggable: true,
	        arrows: false,
	        autoplay: false
	      }
	    }
	  ]
  });
}



$('*[data-toggle="lightbox"]').on('click', function(e){
	e.preventDefault();
	$(this).ekkoLightbox();
});








/*---------------------------------------------------------*/
/*  TESTIMONIAL SLIDER  */
/*---------------------------------------------------------*/
if( $('.testimonial-slider').length > 0 ){
  $('.testimonial-slider-container').slick({
    dots: true,
    arrows: false,
    draggable: true,
    //fade: true,
    speed: 500,
    cssEase: 'ease-out',
    slidesToShow: 1,
  	slidesToScroll: 1,
    autoplay: true,
  	autoplaySpeed: 4000
  });
}






$('.afiliece-con-nosotros').on('click', function(e){
	e.preventDefault();
	$('#afiliation').modal();
});




/*---------------------------------------------------------*/
/*  MAP  */
/*---------------------------------------------------------*/
if( $('#map').length > 0 ){
	$('#map').gmap3({
		defaults:{ 
      classes:{
        Marker:MarkerWithLabel
      }
    },
    map:{
      // address: 'Andes 1365, Montevideo, Uruguay',
      options:{
	      center:[-34.9060027,-56.1976560],
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
        	latLng:[-34.905515, -56.198220],
		      options:{
		        labelContent: "$425K",
		        labelAnchor: new google.maps.Point(52, -2),
		        labelClass: "pin-tooltip-a pin-tooltip",
		        labelStyle: {opacity: 0.75},
		        labelContent: '<span class="pin-tooltip-head">OFICINAS ADMINISTRATIVAS</span><span class="pin-tooltip-body"<br>Torre Independencia<br>Andes 1365 Of.103</span>'
		      }
        },
        {
        	latLng:[-34.907218, -56.196927],
		      options:{
		        labelContent: "$425K",
		        labelAnchor: new google.maps.Point(52, -2),
		        labelClass: "pin-tooltip-b pin-tooltip",
		        labelStyle: {opacity: 0.75},
		        labelContent: '<span class="pin-tooltip-head">OFICINAS COMERCIALES</span><span class="pin-tooltip-body"<br>Torre Latorre<br>Convención 1343 Of.202</span>'
		      }
        }
      ]
    }
	});
}









/*---------------------------------------------------------*/
/*  CONTACT FORM
/*---------------------------------------------------------*/
if( $('#contact-form')[0] ){
	
	$('#contact-form')
	.parsley()
	.on('field:validated', function() {
		// console.log('formulario validado');
  })
  .on('form:submit', function() {

  	var $this = $('#contact-form');

		$this.find('> .loading').removeClass('hidden');
  	
  	console.log('formulario enviado');
  	console.log($this);

		setTimeout(function(){
			$.ajax({
		    type 			: 'POST',
		    url 			: $this.attr('action'),
		    data 			: $this.serialize(),
		    beforeSend 	: function(data) {
		    	$this.find('> .loading').removeClass('hidden');
		    },
		    success 	: function(data) {
					$this.find('> .loading').addClass('hidden');
					$this.find('.form-container').addClass('hidden');
					$this.find('> .submitted').removeClass('hidden');

					// setTimeout(function(){
					// 	window.location.href = location.origin + '/conversion.html';	
					// },300);
					
		    },
		    error 	: function(xhr, status, error, data) {
					$this.find('> .loading').addClass('hidden');
					
		    }
		  });
		}, 400);

    return false; // Don't submit form for this demo
  });

}







$('form:not(#contact-form)').submit(function(){

	var $this = $(this);

	$this.find('> .loading').removeClass('hidden');

	setTimeout(function(){
		$.ajax({
	    type 			: 'POST',
	    url 			: $this.attr('action'),
	    data 			: $this.serialize(),
	    beforeSend 	: function(data) {
	    	$this.find('> .loading').removeClass('hidden');
	    },
	    success 	: function(data) {
				$this.find('> .loading').addClass('hidden');
				$this.find('.form-container').addClass('hidden');
				$this.find('> .submitted').removeClass('hidden');

				// setTimeout(function(){
				// 	window.location.href = location.origin + '/conversion.html';	
				// },300);
				
	    },
	    error 	: function(xhr, status, error, data) {
				$this.find('> .loading').addClass('hidden');
				
	    }
	  });
	}, 400);


  return false;
});


// console.log( $('body').attr('class') );

	
pageload();


});//jQuery






/*---------------------------------------------------------*/
/*  FORM VALIDATION  */
/*---------------------------------------------------------*/
function InvalidMsg(textbox){

  if( textbox.type == 'text' && textbox.value == '' ){
		textbox.setCustomValidity('Debe completar este campo');
  }else if( textbox.type == 'email' && textbox.value == '' ){
		textbox.setCustomValidity('Debe incluir un email');
	}else if( textbox.nodeName == 'TEXTAREA' && textbox.value == '' ){
		textbox.setCustomValidity('Debe incluir un mensaje');
  }else if( textbox.type == 'email' && textbox.validity.typeMismatch ){
		textbox.setCustomValidity('Necesita un email válido');
  }

  return true;

}






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
		if(current >= items.length) {
			setTimeout(function(){
				$('body > *').removeClass('loading');
				$('body > .loader-wrapper').addClass('animated zoomOut');
			}, 300);
			
			current = items.length;
		}	
	}//completeLoading()


	getImages(document);
	preloading();

}//pageload







	

