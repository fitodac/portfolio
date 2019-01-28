$.noConflict();

jQuery(document).ready(function($){

	$("body").queryLoader2({
		barColor: "#D10019",
		backgroundColor: "#FFF",
		percentage: true,
		barHeight: 0,
		onComplete: function(){
			//$('body').fadeIn(400);
		},
		minimumTime: 100
	});





	/*---------------------------------------------------------*/
	/*  SCROLL  */
	/*---------------------------------------------------------*/
	$('#fullpage').fullpage({
		verticalCentered: true,
		resize : true,
		anchors:['casa-negrete', 'historia', 'produccio', 'productes', 'contacte'],
		scrollingSpeed: 700,
		easing: 'easeInQuart',
		menu: '.navbar .nav',
		navigation: false,
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		scrollOverflow: true,
		css3: false,
		paddingTop: '143px',
		paddingBottom: 0,
		keyboardScrolling: true,
		touchSensitivity: 15,
		continuousVertical: false,
		sectionSelector: '.section',
		slideSelector: '.slide',
		
		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){
			map();
			
		},
		afterRender: function(index){
			$('body > .navbar').fadeIn(500);
			$('body > main').fadeIn(500);
			init_animation();
			slider_dots();
		},
		afterResize: function(){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			slider_dots_active(slideAnchor);
		},
		onSlideLeave: function(anchorLink, index, slideIndex, direction){}
	});



	/*---------------------------------------------------------*/
	/*  HOME PAGE ANIMATION  */
	/*---------------------------------------------------------*/
	var $anim_height = $('.home.section').height();
	
	$('.home .anim').height($anim_height);
	
	
	
	/*---------------------------------------------------------*/
	/*  FANCYBOX  */
	/*---------------------------------------------------------*/
	$('.fancy').fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic'
	});


	
});//jQuery





/*---------------------------------------------------------*/
/*  SLIDER DOTS  */
/*---------------------------------------------------------*/
function slider_dots(){
	$ = jQuery;
	
	var $slides = $('.products .slide').length,
			 i = 1;
	
	while(i <= $slides){
		$('.slider-nav').append('<span><a href="#" data-slide="'+ i +'"></a></span>');
		i++;
	}
	
	// CLICK FUNCTION
	$('.slider-nav a').on('click', function(e){
		e.preventDefault();
		
		var $s = $(this).data('slide');
		$.fn.fullpage.moveTo('productes', $s);
	});
	
}//slider_dots()


function slider_dots_active($active){
	$active = $active -1;
	$('.slider-nav span').removeClass('active');
	$('.slider-nav span').eq($active).addClass('active');
}//slider_dots_active()





/*---------------------------------------------------------*/
/*  INITIALIZE ANIMATIONS  */
/*---------------------------------------------------------*/
function init_animation(){
	var $ = jQuery;
		
	setTimeout(function(){
		$('.anim h2').addClass('in');
		//$('.anim .bottle2').addClass('in');
		$('.anim .bottle3').addClass('in');
		
		//setTimeout(function(){
			//$('.anim .glass').addClass('in');	
		//}, 800);
	
	}, 300);
}//init_animation()




/*---------------------------------------------------------*/
/*  MAP  */
/*---------------------------------------------------------*/
function map(){	
	jQuery('.map').gmap3({
	  map:{
	    options:{
	      center:[41.960131, 3.042697],
	      zoom: 12,
	      scrollwheel: false,
	      mapTypeId: google.maps.MapTypeId.ROADMAP,
	      streetViewControl: false
	    }
	  },
	  marker:{
	    values: [
	      {
	        latLng:[41.960131, 3.042697],
	        options:{
	          icon: '/assets/images/pointer.png'
	        }
	      }
	    ]
	  }
	});
}//map()






/*---------------------------------------------------------*/
/*  BUBBLES  */
/*---------------------------------------------------------*/
(function() {
  var paper, circs, i, nowX, nowY, timer, props = {}, toggler = 0, elie, dx, dy, rad, cur, opa;
  // Returns a random integer between min and max  
  // Using Math.round() will give you a non-uniform distribution!  
  function ran(min, max){  
      return Math.floor(Math.random() * (max - min + 1)) + min;  
  } 
  
  function moveIt(){
    for(i = 0; i < circs.length; ++i){       
      // Reset when time is at zero
      if (! circs[i].time){
        circs[i].time  = ran(30, 100);
        circs[i].deg   = ran(-179, 180);
        circs[i].vel   = ran(20, 30);  
        circs[i].curve = ran(0, 1);
        circs[i].fade  = ran(0, 1);
        circs[i].grow  = ran(-2, 2); 
      }                
      // Get position
      nowX = circs[i].attr("cx");
      nowY = circs[i].attr("cy");   
      // Calc movement
      dx = circs[i].vel * Math.cos(circs[i].deg * Math.PI/180);
      dy = circs[i].vel * Math.sin(circs[i].deg * Math.PI/180);
      // Calc new position
      nowX += dx;
      nowY += dy;
      // Calc wrap around
      //if (nowX < 0) nowX = 1990 + nowX;
      //else          nowX = nowX % 1990;            
      if (nowY < 0) nowY = 1990 + nowY;
      else          nowY = nowY % 1990;
      
      // Render moved particle
      //circs[i].attr({cx: nowX, cy: nowY});
      circs[i].attr({cy: nowY});
      
      // Calc growth
      rad = circs[i].attr("r");
      if (circs[i].grow > 0) circs[i].attr("r", Math.min(2.5, rad +  1));
      else                   circs[i].attr("r", Math.max(2.5,  rad -  1));
      
      // Calc curve
      if (circs[i].curve > 0) circs[i].deg = circs[i].deg + 1;
      else                    circs[i].deg = circs[i].deg - 1;
      
      // Calc opacity
      /*
opa = circs[i].attr("fill-opacity");
      if (circs[i].fade > 0) {
          circs[i].attr("fill-opacity", Math.max(.3, opa -  .01));
          circs[i].attr("stroke-opacity", Math.max(.3, opa -  .01)); }
      else {
          circs[i].attr("fill-opacity", Math.min(1, opa +  .01));
          circs[i].attr("stroke-opacity", Math.min(1, opa +  .01)); }
*/

      // Progress timer for particle
      circs[i].time = circs[i].time - 1;
      
      // Calc damping
      if (circs[i].vel < 1) circs[i].time = 0;
      else circs[i].vel = circs[i].vel - .05;              
   
    } 
    timer = setTimeout(moveIt, 60);
	}
  
	jQuery(window).load(function(){ bubles() });
  jQuery(window).resize(function(){ bubles() });
  
  function bubles(){
		var win_width = jQuery(window).width(),
				 win_height = jQuery(window).height();
				 
    paper = Raphael('canvas', win_width, win_height);
    circs = paper.set();
    for (i = 0; i < 120; ++i){
      opa = ran(7,15);
      circs.push(paper.circle(ran(0, win_width), ran(0, win_height), ran(.02,.05)).attr({'fill-opacity': opa, 'stroke-opacity': opa, 'stroke-width': 2}));
    }
		
    circs.attr({stroke: "#CCC"});

    moveIt();  
  }
  
}());


