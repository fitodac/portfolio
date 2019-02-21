/*---------------------------------------------------------*/
/*  NITRO v.1.0.0 (Beta)
/*  Author: Smartpixl
/*---------------------------------------------------------*/
(function($){



/*---------------------------------------------------------*/
/*  SCROLL TO TOP
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





/*---------------------------------------------------------*/
/*	OPEN EXTERNAL LINKS IN NEW WINDOW
/*---------------------------------------------------------*/
$('a[href^="http"], a[href^="//"]').each(function(){
	var _this = $(this);
	if( _this.attr('target') != '_self' && _this.attr('href').indexOf(location.origin) < 0 )
		_this.attr('target', '_blank');
});

$('a[href^="' + window.location.origin + '"]').each(function(){
	var _this = $(this);
	if( _this.attr('target') != '_blank' )
		_this.attr('target', '_self');
});






/*---------------------------------------------------------*/
/*  MODALS (Bootstrap modals)
/*---------------------------------------------------------*/
if( $('.modal')[0] )
	$('.modal').each(function(){
		var _this = $(this);

		_this.on('show.bs.modal',function(e){
			_this.addClass('modal-showing');
		});

		_this.on('shown.bs.modal',function(e){
			_this.removeClass('modal-showing');
		});
	});





/*---------------------------------------------------------*/
/*  INITIALIZE TOOLTIPS (Bootstrap tooltips)
/*---------------------------------------------------------*/
if( $('[data-toggle="tooltip"]')[0] )
	$('[data-toggle="tooltip"]').tooltip();




/*---------------------------------------------------------*/
/*  INITIALIZE POPOVERS (Bootstrap popovers)
/*---------------------------------------------------------*/
if( $('[data-toggle="popover"]')[0] )
	$('[data-toggle="popover"]').popover();






/*---------------------------------------------------------*/
/*  CIRCULAR PROGRESS
/*---------------------------------------------------------*/
$.fn.progressCircular = function(options){
	return this.each(function(){

		var _this = $(this),

				_svg = $('<svg viewBox="0 0 120 120">'
									+'<circle class="meter" cx="60" cy="60" r="54" />'
									+'<circle class="value" cx="60" cy="60" r="54" />'
							+'</svg>');

		_this.prepend(_svg);


		if( _this.data('size') )
			var _width = _this.data('size');
			_this.width(_width);
		
		if( _this.data('value') ){	
			var _value = parseInt(_this.data('value'))/100,
					_val = 339.292 * (1 - _value);

			_this.find('.value').attr('stroke-dashoffset', _val);
		}



	});
};


if( $('.progress-circular')[0] )
	$('.progress-circular').progressCircular();






/*---------------------------------------------------------*/
/*  NOTIFY
/*---------------------------------------------------------*/




})(jQuery);














/*-----------------------------------------------*/
/*	BROWSER DETECT
/*-----------------------------------------------*/
(function($){
	var _prefix = 'browser-',
			_is_chrome = navigator.userAgent.indexOf('Chrome') > -1,
			_is_explorer = navigator.userAgent.indexOf('MSIE') > -1,
			_is_explorer_9 = navigator.userAgent.indexOf('9') > -1,
			_is_explorer_10 = navigator.userAgent.indexOf('10') > -1,
			_is_explorer_11 = navigator.userAgent.indexOf('11') > -1,
			_is_edge = navigator.userAgent.indexOf('Edge') > -1,
			_is_firefox = navigator.userAgent.indexOf('Firefox') > -1,
			_is_safari = navigator.userAgent.indexOf("Safari") > -1,
			_is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;

	if( (_is_chrome)&&(_is_safari) )
		_is_safari = false;

	if( (_is_chrome)&&(_is_opera) )
		_is_chrome = false;

	if( (_is_chrome) )
		$('body').addClass(_prefix + 'chrome');

	if( (_is_explorer) )
		$('body').addClass(_prefix + 'msie');   

	if( (_is_edge) )
		$('body').addClass(_prefix + 'edge');   

	if( (_is_firefox) )
		$('body').addClass(_prefix + 'firefox');

	if( (_is_safari) )
		$('body').addClass(_prefix + 'safari'); 

	if( (_is_opera) )
		$('body').addClass(_prefix + 'opera');  

	if( (_is_explorer)&&(_is_explorer_9) )
			$('body').addClass(_prefix + 'msie-9');

	if( (_is_explorer)&&(_is_explorer_10) )
		$('body').addClass(_prefix + 'msie-10');

	if( (_is_explorer)&&(_is_explorer_11) )
		$('body').addClass(_prefix + 'msie-11');

}(jQuery));




/*-----------------------------------------------*/
/*	FAKE SCROLL
/*	Based on https://github.com/yairEO/fakescroll
/*-----------------------------------------------*/
(function($, win){
	"use strict";

	var docElm = document.documentElement,
			$doc   = $(document),
			raf = win.requestAnimationFrame
				 || win.webkitRequestAnimationFrame
				 || win.mozRequestAnimationFrame
				 || win.msRequestAnimationFrame
				 || function(cb) { return win.setTimeout(cb, 1000 / 60); },

			defaults = {};

	jQuery.fn.fakeScroll = function(settings){
		return this.each(function(idx, selector){
			var $el = $(this), // convert window to the HTML element
					fakeScroll;


			if(settings === 'destroy'){
				$el.removeData('_fakeScroll');
				$el.find('.fakeScrollBar').detach();
				var _content = $el.find('.scrollWrap > .scrollContent').children().clone(true,true);
				$el.html(_content);
				return;
			}


			// if element already the pluging bound to it, return
			if( $el.data('_fakeScroll') )
					return;

			// create a new FakeScroll instance
			fakeScroll = new FakeScroll($el, settings || {});
			// bind the FakeScroll instance to the DOM component
			$el.data('_fakeScroll', fakeScroll);
		});
	}

	// Mouse drag handler
	function dragDealer($el, FS_context){
		var lastPageY;

		$el.on('mousedown.drag', function(e) {
			lastPageY = e.pageY;
			$el.add(document.body).addClass('fakescroll-grabbed');
			$doc.on('mousemove.drag', drag).on('mouseup.drag', stop);
			return false;
		});

		function drag(e){
			var delta     = e.pageY - lastPageY;
					lastPageY = e.pageY;

			raf(function(){
				FS_context.el[0].scrollTop += delta / FS_context.scrollRatio;
			});
		}

		function stop() {
			$el.add(document.body).removeClass('fakescroll-grabbed');
			$doc.off("mousemove.drag mouseup.drag");
		}
	}

	// Constructor
	function FakeScroll($el, settings){
		// this.id = new Array(8).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, 7); // generate an UID for each instance
		this.target = $el;
		this.bar = $('<div class="fakeScrollBar">');
		this.settings = $.extend({}, settings, defaults);
		this.callback = settings.callback ? settings.callback : null;
		this.maxScrollSoFar = 0;

		// wrap with needed DOM structure
		this.el = this.target.wrapInner('<div class="scrollWrap"><div class="scrollContent"></div></div>').find('.scrollContent');

		// insert the fake scroll bar into the container
		this.bar.appendTo(this.el.closest(this.target));
		// initiate drag controller on the instance
		dragDealer(this.bar, this);
		// run "moveBar" once
		this.moveBar();

		this.el.on('scroll.fakeScroll mouseenter.fakeScroll', this.moveBar.bind(this) );
	 	// $(win).on('resize.fakeScroll.' + this.id, this.moveBar.bind(this) );
	}

	FakeScroll.prototype = {
		destroy : function(){
			$el.off('scroll.fakeScroll mousedown.drag').removeData('_fakeScroll');
		},

		moveBar: function(e){
			var totalHeight = this.el[0].scrollHeight,
					ownHeight   = this.el[0].clientHeight,
					that        = this;

			this.scrollRatio = ownHeight / totalHeight;
			// update fake scrollbar location on the Y axis using requestAnimationFrame
			raf(function(){
				that.bar[0].style.cssText = 'height:' + (ownHeight / totalHeight) * 100 + '%; top:' + (that.el[0].scrollTop / totalHeight ) * 100 + '%';
			});
		}
	}



	$('.fake-scroll').fakeScroll();


})(jQuery, window);





/*---------------------------------------------------------*/
/*	SCROLL TO
/*---------------------------------------------------------*/
(function($){

	$.fn.scrollTo = function(options){
		return this.each(function(){
			
			var _this = $(this),

					opt = $.extend({
							target 		: _this.attr('href'),
							speed 		: 800,
							offset 		: 0,
							easing 		: 'easeInOutCubic'
					}, options);


			if( !opt.target )
				opt.target = _this.data('target');

			if( _this.data('speed') )
				opt.speed = _this.data('speed');

			if( _this.data('offset') )
				opt.offset = _this.data('offset');

			if( _this.data('easing') )
				opt.easing = _this.data('easing');


			if( opt.target )
				_this.on('click', function(e){
					e.preventDefault();

					if( $(opt.target).length > 0 )
						$('html, body').stop().animate({
							scrollTop: $(opt.target).offset().top + opt.offset,
							easing: opt.easing
						}, opt.speed);
					// }//if

					// console.log( '.scrollto' );
				});

		});
	}//scrollTo()


	if( jQuery('.scrollto')[0] )
		jQuery('.scrollto').scrollTo();

}(jQuery));





/*---------------------------------------------------------*/
/*	IMG to SVG
/*---------------------------------------------------------*/
(function($){

	if( $('img.svg')[0] ){

		$('img.svg').each(function(){
			var _img = $(this),
					_imgID = _img.attr('id'),
					_imgClass = _img.attr('class'),
					_imgURL = _img.attr('src'),
					_imgStyle = _img.attr('style');

			$.get(_imgURL, function(data){
				// Get the SVG tag, ignore the rest
				var _svg = jQuery(data).find('svg');

				// Add replaced image's ID to the new SVG
				if(typeof _imgID !== 'undefined')
					_svg = _svg.attr('id', _imgID);

				// Add replaced image's classes to the new SVG
				if(typeof _imgClass !== 'undefined')
					_svg = _svg.attr('class', _imgClass+' replaced-svg');


				// Remove any invalid XML tags as per http://validator.w3.org
				_svg = _svg.removeAttr('xmlns:a').attr('style', _imgStyle);

				// Replace image with new SVG
				_img.replaceWith(_svg);
			}, 'xml');

		});

	}

})(jQuery);




(function(){

	$(document).ready(function(){

		if( jQuery.isFunction('notify') ){

			// Create the nitro style for notifications
			$.notify.addStyle('nitro', {
				html: '<div>'
					+'<div class="alert alert-dismissible">\n'
						+'<span data-notify-text></span>\n'
						+'<button class="btn close"></button>\n'
					+'</div>'
				+'</div>'
			});

			$.notify.pluginOptions.style = 'nitro';

		}

	});

})(jQuery);



/*---------------------------------------------------------*/
/*  MOUSE MOVE PARALLAX
/*---------------------------------------------------------*/
(function($){
	$.fn.mouseMoveParallax = function(options){

		this.each(function(){

			var _this = $(this),

					opt = $.extend({
						wrapper: _this
					}, options)

					_window = $(window);


			_window.on('mousemove', function(_e){
				var _w = _window.width(),
						_h = _window.height(),
						_offsetX = 0.5 - _e.pageX / _w,
						_offsetY = 0.5 - _e.pageY / _h;


				_this.find('.mmp-item').each(function(i, _el){

					if( $(_el).data('offset') ){
						var _offset = parseInt( $(_el).data('offset') );
					}else{
						var _offset = 10;
					}

					if( $(_el).data('index') ){
						$(_el).css('z-index', parseInt( $(_el).data('index') ) );
					}

					var _translate = 'translate3d(' + Math.round(_offsetX * _offset) + 'px,' + Math.round(_offsetY * _offset) + 'px, 0px)';


					$(_el).css({
					'transformStyle': 'preserve-3d',
					'-webkit-transform': _translate,
					'transform': _translate,
					'moz-transform': _translate
					});
				});
			});//mousemove


			// DESTROY
			if( options === 'destroy' ){
				_window.unbind('mousemove');

				// _this.find('.mmp-item').each(function(_index, _el){
				// 	console.log($(_el));
				// 	// $(_el).css('');
				// });
			}

		});//this

	};//mouseMoveParallax
}(jQuery));







/*---------------------------------------------------------*/
/*	AJAX SUBMIT
/*---------------------------------------------------------*/
(function($){
	'use strict';

	$.fn.ajaxForm = function(options){
		return this.each(function(){

			var form = $(this);

			var settings = $.extend({
					data 				: '',
					urlBin 			: location.origin + '/assets/bin/sendmail.php',
					onSuccess 	: function(){ 
						alert('Form Submitted!')
					},
					type 				: 'POST'
			}, options);


			$.ajax({
				type: settings.type,
				url: settings.urlBin,
				data: settings.data,
				success: function(){
					settings.onSuccess;
				}
			});

		});
	}//ajaxForm()

}(jQuery));
(function($){

	/*---------------------------------------------------------*/
	/*	NAVBAR TOGGLE
	/*---------------------------------------------------------*/
	$.fn.navbarToggle = function(options){
		return this.each(function(){

			$(window).unbind('scroll');


			var _this = $(this),

					opt = $.extend({
						class 		: _this.data('navbar-toggle'),
						offset 		: _this.data('navbar-offset'),
					}, options),

				_top = parseInt(_this.offset().top),
				_height = parseInt(_this.outerHeight(true));

				if( !opt.offset ){ opt.offset = 20; }

				var _limit = parseInt(_top + _height + opt.offset),
						_spacer = $('<div class="spacer"/>'),
						_spacer_css = {
							'height': _height,
							'marginBottom': -(_height),
							'position': 'relative',
							'zIndex': -2
						};


			

			if( _this.prev('.spacer').length === 0 ){
				_spacer.css(_spacer_css);
				_this.before(_spacer);
			}else{
				_this.prev('.spacer').css(_spacer_css);
			}





			function scrollEvent(){

				var _scrollTop = $(window).scrollTop();

				if( _scrollTop >= (_limit + 20) ){
					_this.removeClass('out').addClass('in');
				}else{
					_this.addClass('out');
				}

				if( _scrollTop >= _limit ){	
					_this.addClass(opt.class);
				}else{	
					_this.removeClass(opt.class);
					_this.removeClass('in');
					_this.removeClass('out');
				}

			}//scrollEvent()




			scrollEvent();


			$(window).scroll(function(){
				scrollEvent();
			});


		});
	}//navbarToggle()



	if( $('[data-navbar-toggle]')[0] )
		$('[data-navbar-toggle]').navbarToggle();








	/*---------------------------------------------------------*/
	/*	NAV STACKED
	/*---------------------------------------------------------*/
	$.fn.navbarStacked = function(options){
		return this.each(function(){
			
			var _this = $(this);


			_this.find('.nav-item').each(function(){
				
				var _navItem = $(this),
						_childrenStaked = _navItem.find('.nav-stacked');


				if( _childrenStaked[0] ){

					var _subNavStacked = _navItem.find('> .nav-stacked');


					// Navigate
					_navItem.find('> .nav-link').on('click', function(e){
						e.preventDefault();

						_subNavStacked.addClass('in');
						_this.addClass('active');
					});



					// Create a back element
					if( _subNavStacked.is('ul') ){
						_subNavStacked.prepend('<li class="nav-back"><a href="#"></a></li>');
					}else{
						_subNavStacked.prepend('<div class="nav-back"><a href="#"></a></div>');
					}



					// Back method
					_subNavStacked.find('.nav-back a').on('click', function(e){
						e.preventDefault();
						$(this).closest('.in').removeClass('in');
						$(this).closest('.nav-stacked-push').removeClass('active');

						if( _subNavStacked.find('.scrollContent')[0] )
							_subNavStacked.find('.scrollContent').scrollTop(0);
					});



					// Use fakeScroll if height of the children subnav is greater than its parent
					var _navItem = _subNavStacked.find('> .nav-item'),
							_navItemHeight = _navItem.height(),
							_elHeight = _navItemHeight * _navItem.length;

					_subNavStacked.find('.nav-back').height(_elHeight);

					if( _elHeight > _this.height() ){
						_subNavStacked.fakeScroll();
						_subNavStacked.find('.scrollContent').scrollTop(0);
					}

				}

			});

		});
	}//navbarStacked()



	if( $('.nav-stacked-push')[0] )
		$('.nav-stacked-push').navbarStacked();



})(jQuery);











(function($){

	/*---------------------------------------------------------*/
	/*	OFF CANVAS
	/*---------------------------------------------------------*/
	$.fn.offCanvas = function(options){
		return this.each(function(){

			var _this = $(this),
					_sidebar = _this.find('> .off-canvas-sidebar');



			if( _this.data('__offcanvas') )
				return;
			else
				_this.data('__offcanvas', true)



			// OVERLAY
			var _overlay = $('<div class="off-canvas-overlay"></div>');
			_this.append(_overlay);

			_overlay.on('click', function(){
				_this.removeClass('in');
			});


			// OFFSET
			if( _this.data('offset') )
				var _offset = _sidebar.outerWidth() - _this.data('offset');
				_sidebar.css({'transform': 'translate3d(-'+ _offset +'px,0,0)'});


			// HOVER
			if( _this.hasClass('off-canvas-hover') )
				_sidebar.on('mouseenter', function(e){
					e.stopPropagation();
					_this.addClass('in');
				})
				.on('mouseleave', function(e){
					e.stopPropagation();
					_this.removeClass('in');
				});



			// BUTTONS
			if( $('[data-offcanvas-target]')[0] )
				$('[data-offcanvas-target]').each(function(){

					var _btn = $(this),
							_target = _btn.data('offcanvasTarget');

					if( $(_target)[0] )
						_btn.on('click', function(){

							$(_target).addClass('in');

						});

				});

		});
	}//offCanvas()





	if($('.off-canvas-wrapper')[0])
		$('.off-canvas-wrapper').offCanvas();


})(jQuery);






/*! rangeslider.js - v2.3.0 | (c) 2016 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";function b(){var a=document.createElement("input");return a.setAttribute("type","range"),"text"!==a.type}function c(a,b){var c=Array.prototype.slice.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)}function d(a,b){return b=b||100,function(){if(!a.debouncing){var c=Array.prototype.slice.apply(arguments);a.lastReturnVal=a.apply(window,c),a.debouncing=!0}return clearTimeout(a.debounceTimeout),a.debounceTimeout=setTimeout(function(){a.debouncing=!1},b),a.lastReturnVal}}function e(a){return a&&(0===a.offsetWidth||0===a.offsetHeight||a.open===!1)}function f(a){for(var b=[],c=a.parentNode;e(c);)b.push(c),c=c.parentNode;return b}function g(a,b){function c(a){"undefined"!=typeof a.open&&(a.open=!a.open)}var d=f(a),e=d.length,g=[],h=a[b];if(e){for(var i=0;i<e;i++)g[i]=d[i].style.cssText,d[i].style.setProperty?d[i].style.setProperty("display","block","important"):d[i].style.cssText+=";display: block !important",d[i].style.height="0",d[i].style.overflow="hidden",d[i].style.visibility="hidden",c(d[i]);h=a[b];for(var j=0;j<e;j++)d[j].style.cssText=g[j],c(d[j])}return h}function h(a,b){var c=parseFloat(a);return Number.isNaN(c)?b:c}function i(a){return a.charAt(0).toUpperCase()+a.substr(1)}function j(b,e){if(this.$window=a(window),this.$document=a(document),this.$element=a(b),this.options=a.extend({},n,e),this.polyfill=this.options.polyfill,this.orientation=this.$element[0].getAttribute("data-orientation")||this.options.orientation,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.DIMENSION=o.orientation[this.orientation].dimension,this.DIRECTION=o.orientation[this.orientation].direction,this.DIRECTION_STYLE=o.orientation[this.orientation].directionStyle,this.COORDINATE=o.orientation[this.orientation].coordinate,this.polyfill&&m)return!1;this.identifier="js-"+k+"-"+l++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=a('<div class="'+this.options.fillClass+'" />'),this.$handle=a('<div class="'+this.options.handleClass+'" />'),this.$range=a('<div class="'+this.options.rangeClass+" "+this.options[this.orientation+"Class"]+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=a.proxy(this.handleDown,this),this.handleMove=a.proxy(this.handleMove,this),this.handleEnd=a.proxy(this.handleEnd,this),this.init();var f=this;this.$window.on("resize."+this.identifier,d(function(){c(function(){f.update(!1,!1)},300)},20)),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(a,b){if(!b||b.origin!==f.identifier){var c=a.target.value,d=f.getPositionFromValue(c);f.setPosition(d)}})}Number.isNaN=Number.isNaN||function(a){return"number"==typeof a&&a!==a};var k="rangeslider",l=0,m=b(),n={polyfill:!0,orientation:"horizontal",rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",activeClass:"rangeslider--active",horizontalClass:"rangeslider--horizontal",verticalClass:"rangeslider--vertical",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]},o={orientation:{horizontal:{dimension:"width",direction:"left",directionStyle:"left",coordinate:"x"},vertical:{dimension:"height",direction:"top",directionStyle:"bottom",coordinate:"y"}}};return j.prototype.init=function(){this.update(!0,!1),this.onInit&&"function"==typeof this.onInit&&this.onInit()},j.prototype.update=function(a,b){a=a||!1,a&&(this.min=h(this.$element[0].getAttribute("min"),0),this.max=h(this.$element[0].getAttribute("max"),100),this.value=h(this.$element[0].value,Math.round(this.min+(this.max-this.min)/2)),this.step=h(this.$element[0].getAttribute("step"),1)),this.handleDimension=g(this.$handle[0],"offset"+i(this.DIMENSION)),this.rangeDimension=g(this.$range[0],"offset"+i(this.DIMENSION)),this.maxHandlePos=this.rangeDimension-this.handleDimension,this.grabPos=this.handleDimension/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position,b)},j.prototype.handleDown=function(a){if(a.preventDefault(),this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),this.$range.addClass(this.options.activeClass),!((" "+a.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass)>-1)){var b=this.getRelativePosition(a),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=this.getPositionFromNode(this.$handle[0])-c,e="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(e),b>=d&&b<d+this.handleDimension&&(this.grabPos=b-d)}},j.prototype.handleMove=function(a){a.preventDefault();var b=this.getRelativePosition(a),c="vertical"===this.orientation?this.maxHandlePos-(b-this.grabPos):b-this.grabPos;this.setPosition(c)},j.prototype.handleEnd=function(a){a.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$range.removeClass(this.options.activeClass),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},j.prototype.cap=function(a,b,c){return a<b?b:a>c?c:a},j.prototype.setPosition=function(a,b){var c,d;void 0===b&&(b=!0),c=this.getValueFromPosition(this.cap(a,0,this.maxHandlePos)),d=this.getPositionFromValue(c),this.$fill[0].style[this.DIMENSION]=d+this.grabPos+"px",this.$handle[0].style[this.DIRECTION_STYLE]=d+"px",this.setValue(c),this.position=d,this.value=c,b&&this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(d,c)},j.prototype.getPositionFromNode=function(a){for(var b=0;null!==a;)b+=a.offsetLeft,a=a.offsetParent;return b},j.prototype.getRelativePosition=function(a){var b=i(this.COORDINATE),c=this.$range[0].getBoundingClientRect()[this.DIRECTION],d=0;return"undefined"!=typeof a.originalEvent["client"+b]?d=a.originalEvent["client"+b]:a.originalEvent.touches&&a.originalEvent.touches[0]&&"undefined"!=typeof a.originalEvent.touches[0]["client"+b]?d=a.originalEvent.touches[0]["client"+b]:a.currentPoint&&"undefined"!=typeof a.currentPoint[this.COORDINATE]&&(d=a.currentPoint[this.COORDINATE]),d-c},j.prototype.getPositionFromValue=function(a){var b,c;return b=(a-this.min)/(this.max-this.min),c=Number.isNaN(b)?0:b*this.maxHandlePos},j.prototype.getValueFromPosition=function(a){var b,c;return b=a/(this.maxHandlePos||1),c=this.step*Math.round(b*(this.max-this.min)/this.step)+this.min,Number(c.toFixed(this.toFixed))},j.prototype.setValue=function(a){a===this.value&&""!==this.$element[0].value||this.$element.val(a).trigger("input",{origin:this.identifier})},j.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+k),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},a.fn[k]=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),e=d.data("plugin_"+k);e||d.data("plugin_"+k,e=new j(this,b)),"string"==typeof b&&e[b].apply(e,c)})},"rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"});