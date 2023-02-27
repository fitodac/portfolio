$.noConflict();
jQuery(document).ready(function($){

// Code that uses jQuery's $ can follow here.

	

$('.parallax').parallax();





/*---------------------------------------------------------*/
/*  RANDOM NUBER  */
/*---------------------------------------------------------*/
var minNumber = 1;
var maxNumber = 9;

randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max){
  var randomNumber = Math.floor(Math.random()*(max-min+1)+min);

  if( randomNumber == 1 ){ var img_src = 'banner-actividades-recreativas' }
  if( randomNumber == 2 ){ var img_src = 'banner-administracion-de-medicacion' }
  if( randomNumber == 3 ){ var img_src = 'banner-alimentacion-balanceada' }
  if( randomNumber == 4 ){ var img_src = 'banner-calefaccion-central' }
  // if( randomNumber == 5 ){ var img_src = 'banner-camaras' }
  if( randomNumber == 5 ){ var img_src = 'banner-dormitorios' }
  if( randomNumber == 6 ){ var img_src = 'banner-emergencia' }
  if( randomNumber == 7 ){ var img_src = 'banner-enfermeria' }
  if( randomNumber == 8 ){ var img_src = 'banner-fisioterapia' }
  if( randomNumber == 9 ){ var img_src = 'banner-historia-clinica' }

  // console.log(randomNumber);

	$('#banner-services').attr('src', location.origin + '/humana/assets/images/' + img_src + '.jpg')
}





/*---------------------------------------------------------*/
/*  LIGHTBOX  */
/*---------------------------------------------------------*/
// delegate calls to data-toggle="lightbox"
$(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event){
  event.preventDefault();
  return $(this).ekkoLightbox({
    onShown: function(){
      if(window.console){
        return console.log('Checking our the events huh?');
      }
    },
    onNavigate: function(direction, itemIndex){
      if(window.console){
        return console.log('Navigating '+direction+'. Current item: '+itemIndex);
      }
    }
  });
});





/*---------------------------------------------------------*/
/*  ASIDE MENU  */
/*---------------------------------------------------------*/
$('aside .list-group .list-group-item').on('click', function(e){
	// e.preventDefault();

	var $e = $(this),
			$list_group = $e.closest('.list-group');

	console.log( $list_group.find('.active').length );
	
	if( $list_group.find('.active').length > 0 ){
		$list_group.find('.active').removeClass('active');
	}

	$e.addClass('active');
});




/*---------------------------------------------------------*/
/*  SELECTER  */
/*---------------------------------------------------------*/
$('.selecter').selecter();






/*---------------------------------------------------------*/
/*  RESPONSIVE  */
/*---------------------------------------------------------*/
$('body').restive({
	breakpoints: ['10000', '1200', '992', '768'],
  classes: ['body-lg', 'body-md', 'body-sm', 'body-xs'],
	turbo_classes: 'is_mobile=mobi, is_phone=phone, is_tablet=tablet, is_landscape=landscape'
});






/*---------------------------------------------------------*/
/*  GENERATE ALERTS  */
/*---------------------------------------------------------*/
function generate(text, alert_class, position){

  if( position == ''){ position = 'topCenter' }

  var n = noty({
    text          : text,
    type          : ' alert alert-dismissible alert-' + alert_class,
    dismissQueue  : true,
    layout        : position,
    theme         : 'bootstrapTheme',
    closeWith     : ['button', 'click'],
    maxVisible    : 20,
    modal         : true
  });
}





/*---------------------------------------------------------*/
/*  CONTACT  */
/*---------------------------------------------------------*/
$('.contact-form').submit(function(){
	return false;
});

$('.contact-form').validate({
  messages: {
		'contact-name': {
      required: 'Debe escribir su nombre'
    },
    'contact-email': {
      required: 'Debe escribir su email',
      email: 'El email debe ser válido'
    },
    'contact-message':{
    	required: 'Debe escribir un mensaje'
    }
	},
  
  submitHandler: function(form){
    $.ajax({
	    type 			: 'POST',
	    url 			: $(form).attr('action'),
	    data 			: $(form).serialize(),
	    beforeSend 	: function(data){
	    	$(form).find('[type="submit"]').text('enviando...').addClass('disabled');
	    },
	    success 	: function(data){

				generate('<strong>Gracias!</strong><br> Su mensaje ha sido enviado correctamente.<br>Nos pondremos en contacto a la brevedad posible.', 'info', 'topCenter');
				
				$(form).find('input').val('');
				$(form).find('textarea').val('');

	    },
	    error 	: function(xhr, status, error, data){
				$(form).find('[type="submit"]').text('Enviar').removeClass('disabled');
				if( $(form).find('.error-submit').length == 0 ){
					// $(form).append('<span class="error-submit">Parece que hay un error en el envío. Porfavor contáctenos a info@humana.com.uy</span>');
					generate('Parece que hay un error en el envío. Porfavor contáctenos a info@humana.com.uy', 'warning', 'topCenter');
				}
	    }
	  });

	  return false;
	}
});





/*---------------------------------------------------------*/
/*  REQUEST  */
/*---------------------------------------------------------*/
$('.request-form').submit(function(){
	return false;
});




$('.request-form').validate({
  messages: {
		'request-name': {
      required: 'Debe escribir su nombre'
    },
    'request-lastname': {
      required: 'Debe escribir su apellido'
    },
    'request-address': {
      required: 'Debe escribir una dirección'
    },
    'request-city': {
      required: 'Debe escribir una ciudad'
    },
    'request-state': {
      required: 'Debe agregar un departamento'
    },
    'request-email': {
      required: 'Debe escribir su email',
      email: 'El email debe ser válido'
    },
    'request-phone': {
      required: 'Debe agregar un teléfono'
    },
    'request-title': {
      required: 'Debe especificar para quien desea contratar el servicio'
    }
	},
  
  submitHandler: function(form){
    $.ajax({
	    type 			: 'POST',
	    url 			: $(form).attr('action'),
	    data 			: $(form).serialize(),
	    beforeSend 	: function(data){
	    	$(form).find('[type="submit"]').text('enviando...').addClass('disabled');
	    },
	    success 	: function(data){

				generate('<strong>Gracias!</strong><br> Su mensaje ha sido enviado correctamente.<br>Nos pondremos en contacto a la brevedad posible.', 'info', 'topCenter');
				
				$(form).find('input').val('');
				$(form).find('textarea').val('');

	    },
	    error 	: function(xhr, status, error, data){
				$(form).find('[type="submit"]').text('Enviar').removeClass('disabled');
				if( $(form).find('.error-submit').length == 0 ){
					// $(form).append('<span class="error-submit">Parece que hay un error en el envío. Porfavor contáctenos a info@humana.com.uy</span>');
					generate('Parece que hay un error en el envío. Porfavor contáctenos a info@humana.com.uy', 'warning', 'topCenter');
				}
	    }
	  });

	  return false;
	}
});







	
pageload();


});//jQuery












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
				$('body > .loader-wrapper').addClass('animated fadeOut');

				setTimeout(function(){
					$('body > .loader-wrapper').hide();
				},300);
				
			}, 300);
			
			current = items.length;
		}	
	}//completeLoading()


	getImages(document);
	preloading();

}//pageload







	

