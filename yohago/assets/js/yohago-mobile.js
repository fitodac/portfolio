$.noConflict();
  
jQuery(document).ready(function($){
	
	/*----------------------------------------------*/
	/*  MINIMIZE LAYOUT  */
	/*----------------------------------------------*/
	var win_width = $(window).width();	
	
	function slideshows(){
		$('.carousel').carousel({
			 interval:7000
		});
		
		// touch function
		$('.carousel').swipe({
      swipe: function(event, direction, distance, duration, fingerCount) {
        if( direction == 'left'){
	        $('.carousel').carousel('next');
        }
        
        if( direction == 'right'){
	        $('.carousel').carousel('prev');
        }
      },
      allowPageScroll: 'vertical'
    });
    
    $('.carousel-indicators li').on('click touchstart', function(){
    	
    	var i = $(this).index(),
    			 t = $(this).data('target');
    	
	    $(t).carousel(i);
	  });
	}//slideshows()
	
	
	
	
	
	
	var $search_status = 0;	
	
	function search(){
		$('.search-button').on('click touchstart', function(e){
			e.preventDefault();
						
			if( !$('.search').hasClass('toggle-search') ){
				
				//if( win_width < 767 ){
					setTimeout(function(){
						var $window_top = $(window).scrollTop();

						if( win_width < 767 ){
							$('.navbar').removeClass('navbar-fixed-top').offset({top:$window_top + 50});
						}else{
							$('.navbar').removeClass('navbar-fixed-top').offset({top:$window_top + 150});
						}
						$('body').addClass('searching');
						
						$search_status = $window_top +1;
						

						$(window).on('touchmove', function(){
							var $updated_top_position = $(window).scrollTop() +1;
							
							if( $search_status != 0 && $search_status != $updated_top_position ){
								console.log('search status different to zero');
								$('.search #search').blur();
								hide_search();
							}
						});
		
					}, 0);
				//}//win_width
				
				$('.search #search').focus();
			}else{
				$('.search #search').blur();
				hide_search();
				return false;
			}
			            
			$('.search').toggleClass('toggle-search');
		});

					
		function hide_search(){
			//if( win_width < 767 ){
				$('.navbar').addClass('navbar-fixed-top').css({top:0});
				$('body').toggleClass('searching');
				$search_status = 0;
			//}
			
			$('.search').removeClass('toggle-search');
			return false;
		}//hide_search


		if( win_width < 768 ){
			$('.search #search').blur(function(){ 
				hide_search();
			});
		}

				
		$('.search-filter .delete-icon').on('click touchstart', function(e){
			e.preventDefault();
			
			$(this).closest('.price-range').find('input').val('');
			$(this).closest('.preferences-filter').find('input').val('');
			$(this).closest('.preferences-filter').find('input').attr('checked', null);
		});
	}//search()



	function fix_search(){
		if( win_width < 769 ){
			$('.search.visible-sm').addClass('portrait-tablet');
		}
		
		$(window).resize(function(){
			$('.search.portrait-tablet').removeClass('portrait-tablet');
		});
	}//fix_search
	
	fix_search();
	
	

	
	function fix_page_title(){
		$('.page-header').each(function(){
		
			var $header = $(this),
					 header_w = $header.outerWidth(),
					 dif = 0;
					
			$header.find('*').each(function(){
				if( !$(this).hasClass('page-title') && !$(this).hasClass('row') ){
					dif = dif + $(this).outerWidth(true);
				}
			});
			
			var page_title_w = header_w - dif;
			
			$header.find('.page-title').width(page_title_w);
			
				//console.log( dif );
				//console.log( header_w + ' - ' + dif );
				//console.log( page_title_w );
		});
	}//fix_page_title()
	
	
	
	
	function add_to_cart(){
		$('.add-to-cart .toggle-form').on('click touchstart', function(e){
			e.preventDefault();
			
			if( !$(this).hasClass('active') ){
				$(this).parent().find('form').addClass('visible');
				$(this).text('Cancelar').addClass('active');
			}else{
				$(this).parent().find('form').removeClass('visible');
				$(this).text('Comprar').removeClass('active');
			}
		});
		
		
		$('.input-group-btn .btn').on('click touchstart', function(e){
			e.preventDefault();
			
			var action = $(this).data('cant-action'), // More or less
					 i = $(this).data('input');
			
			if( action == 'more' && $('#' + i).val() > 0 ){
				var original_val = parseInt( $('#' + i).val() );
				$('#' + i).val( original_val +1);
			}
			
			if( action == 'less' && $('#' + i).val() != 1 && $('#' + i).val() > 0 ){
				var original_val = parseInt( $('#' + i).val() );
				$('#' + i).val( original_val -1);
			}
			
		});
	}//add_to_cart()
	
	
	
	
	function fixed_page(){
		
		$('.dynamic-page').each(function(){

			var page = $(this),
					 header_height = $('.navbar').height(),
					 win_h = $(window).height(),
					 initialize = page.data('initialize');
			
			page.css({height:win_h - header_height, top:header_height});
		});
		
		
		$('[data-toggle="dynamic_page"]').on('click', function(e){
			e.preventDefault();
			
			var h = $(this).attr('href');
			
			if( $(h).hasClass('dynamic-page') ){
				$(h).toggleClass('visible');
			}
			
		});
		
		
		$('[data-hide="dynamic_page"]').on('click touchstart', function(e){
			e.preventDefault();
			
			var h = $(this).attr('href');
			
			if( $(h).hasClass('dynamic-page') ){
				$(h).removeClass('visible');
			}
		});
	}//fixed_page()
	
	
	
	
	function submenu_collapse(){
		$('.navbar-collapse > .navbar-nav a').on('click touchstart', function(e){
			e.preventDefault();
		
			if( $(this).data('submenu') != null ){
				var i = $(this).data('submenu');
				
				$('.tablet-submenu #' + i).addClass('in');
				$('.navbar-collapse').addClass('subnav-in');
				$('.navbar-collapse > .navbar-nav').addClass('navbar-nav-out');
			}
		});
		
		
		
		$('.navbar-collapse > .tablet-submenu .left-arrow').on('click touchstart', function(e){
			e.preventDefault();
			
			$('.navbar-collapse > .navbar-nav').removeClass('navbar-nav-out');
			$('.navbar-collapse').removeClass('subnav-in');
			$('.tablet-submenu .navbar-nav').removeClass('in');
		});
		
		
		if( $('.navbar-collapse').hasClass('in') ){
			$('.navbar-toggle').on('click touchstart', function(e){
				e.preventDefault();
				
				setTimeout(function(){
					$('.navbar-collapse').removeClass('subnav-in');
					$('.tablet-submenu .navbar-nav').removeClass('in');
				}, 500);
			});
		}
	}//submenu_collapse()
	
	
	
	function gallery(){
		$('[data-gallery="in"]').on('click touchstart', function(e){
			e.preventDefault();
			
			var gal = $(this).data('gallery');
			
			if( gal == 'in' ){
				$('.gallery').addClass('visible');
			}
		});
		
		$('.gallery .btn.left-arrow').on('click touchstart', function(e){
			e.preventDefault();
			$(this).closest('.gallery').removeClass('visible');
		});
	}//gallery()
	
	
	
	var myScroll;
	
	
	// MOBILE FUNCTIONS
	if( win_width < 768 ){
		slideshows();
		search();
		add_to_cart();
		fixed_page();
		fix_page_title();
	}
	
	
	// TABLET FUNCTIONS
	if( win_width > 767 ){
		search();
		add_to_cart();
		submenu_collapse();
		gallery();
		slideshows();
	}
	
	
	$(window).resize(function(){
		win_width = $(window).width();
		fix_page_title();
	});
	

	
	//if(navigator.userAgent.match(/(iPad)/)){
	if( navigator.userAgent.match(/OS 6_\d like Mac OS X/i) ){

		function fix_ios6(){
			var win_width = window.innerWidth;
			$('body').width(win_width);
			$('main').width(win_width - 8);
			console.log('xoxo');
		}
		
		fix_ios6();
	
		$(window).on('resize orientationChanged', function() {
			fix_ios6();	
		});
		
	}
	
	
});//jQuery





