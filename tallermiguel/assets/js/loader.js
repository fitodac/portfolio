/*---------------------------------------------------------*/
/*  PRELOAD  */
/*---------------------------------------------------------*/
var pageload = function(){

	var $ = jQuery,
		 images = new Array(),
		 errors = new Array(),
		 current = 0;

	
	// setTimeout(function(){

	$('body')
	.prepend('<div class="preloader">'+
		'<div class="loader">'+
			'<div class="notice">ESTAMOS CARGANDO EL SITIO</div>'+
			'<div class="preload-wrapper">'+
				'<div class="preload"/>'+
				'<div class="preload-secondary"/>'+
			'</div>'+
			'<div class="phrases"/>');
	
	
	//get all images from css and <img> tag
	var getImages = function(element){

		$(element).find('*').each(function(){

			var url = "";

			if( $(this).css('background-image').indexOf('none') == -1 && $(this).css('background-image').indexOf('-gradient') == -1 ){
				
				url = $(this).css('background-image');

				if(url.indexOf('url') != -1) {
					var temp = url.match(/url\((.*?)\)/);
					url = temp[1].replace(/\"/g, '');
				}
			}else if( $(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined' ){
				url = $(this).attr('src');
			}

			if( url.length > 0 ){				
				images.push(url);
			}

		});

		var origin = window.location.origin + '/';

		$.each(images, function(i, val){
			if( val.indexOf('http') == 0 ){
				val = val.replace(origin, '');
			}
		});

		
		preloading();

	}//getImages()


	var preloading = function(){
		if( images.length > 0 ){
			for(var i = 0; i < images.length; i++ ){
				if( loadImg(images[i]) );
			}
		}else{
			completeLoading();
		}
	}//preloading()
	

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
	var completeLoading = function(){
		current++;

		var arrLength = images.length,
				per = Math.round((current / arrLength) * 100),
				dashoffset = 1000 - per *2;

		if( per != Infinity ){
			// console.log(per+'%');
			// $('.svg-loader-circle').css({strokeDashoffset:dashoffset});
			// $('.loader span').text(per+'%');
		}else{
			// $('.svg-loader-circle').css({strokeDashoffset:800});
			// $('.loader span').text('100%');
		}

		//if all images loaded
		if(current >= arrLength){
			
			function checkVideoLoad(){
				if( videoLoad == false ){
					setTimeout(function(){
						checkVideoLoad();
					},500);
				}else{
					pageLoaded();
					window.clearInterval(interval);
				}	
			}

			checkVideoLoad();
			
			current = images.length;
		}	
	}//completeLoading()


	var phrases = [
			'...Calentando motores',
			'...Engrasando cadenas',
			'...Cargando un video cool',
			'...Regulando el embrague',
			'...Revisando pastillas de freno',
			'...Ajustando válvulas',
		];


	var i = 0;
	
	function loopForever(){
		$('.preloader .phrases').text( phrases[i] );
		(i < phrases.length +1) ? i++ : i = 0;
	}

	var interval = self.setInterval(function(){loopForever()},1500);


	getImages( $('body') );

}//pageload


// pageLoader se ejecuta
function pageLoaded(){
	$ = jQuery;

	$('body').css('overflow','auto');
	$('body > .invisible').removeClass('invisible');

	owlCarousels();
	getMaps();

	$('.preloader').fadeOut(400, function(){
		$('body').css('overflow', 'visible');
		$('.preloader').detach();
	});

}



jQuery(document).ready(function(){
	pageload();
});




