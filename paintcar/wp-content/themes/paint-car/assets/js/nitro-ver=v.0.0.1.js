/*------------------------------*/
/*  NITRO v.0.0.1
/*  Author: BorealisHQ
/*------------------------------*/
(function($) {
'use strict';




/*---------------------------------------------------------*/
/*  Scroll to (selected anchor)  */
/*---------------------------------------------------------*/
$('.scrollto').on('click', function(e){
	e.preventDefault();
	
	var $target = $(this).data('target');

	if( $(this).data('duration') ){var $duration = $(this).data('duration');}
	else{var $duration = 1000;}

	if( $(this).data('offset') ){var $offset = $(this).data('offset');}
	else{var $offset = 0;}

	if($target.length){
		$('html, body').animate({
			scrollTop: $($target).offset().top + $offset,
			easing: 'easeInOutCubic'
		}, $duration);
	}

});




/*---------------------------------------------------------*/
/*  Full height element  */
/*---------------------------------------------------------*/
function fullHeight() {
	// var newHeight = $("html").height() - $("#header").height() - $("#footer").height() + "px";
	$('.full-height').css('height', $(window).height());
}

$(document).ready(fullHeight);
$(window).resize(fullHeight);





/*---------------------------------------------------------*/
/*  SCROLL TO TOP  */
/*---------------------------------------------------------*/
$('.scroll-to-top').addClass('opacity-0 invisible');

$(window).scroll(function(){
	var $winHeight = $(window).height();

	if( $(window).scrollTop() >= $winHeight/2 ){
		$('.scroll-to-top').removeClass('opacity-0 invisible');
	}else{
		$('.scroll-to-top').addClass('opacity-0 invisible');
	}
});


})(jQuery);





