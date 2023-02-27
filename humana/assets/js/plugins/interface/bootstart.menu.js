


/*
OPTIONS:
.menu-
*/

(function($){

$ = jQuery;

$('[data-menu]').each(function(){
	
	var $menu = $(this),
			$data_menu = $menu.data('menu'),
			$spacer_class = 'spacer-'+$data_menu,
			$menu_height = $menu.outerHeight(),
			$menu_top = Math.round($menu.offset().top);

	$menu.addClass('menu-'+$data_menu);
	


	// MENU FIXED TOP
	if( $data_menu == 'fixed-top' ){
		$(this).before('<div class="menu-spacer '+ $spacer_class +'" style="height:'+ $menu_height +'px;"></div>');
	}


	// MENU FIXED BOTTOM
	if( $data_menu == 'fixed-bottom' ){
		$(this).before('<div class="menu-spacer '+ $spacer_class +'" style="height:'+ $menu_height +'px;"></div>');
	}


	// STICKY
	if( $data_menu == 'sticky' ){
		$menu.before('<div class="menu-spacer '+ $spacer_class +'" style="height:'+ $menu_height +'px;"></div>');
		$menu.css('marginTop', -$menu_height);

		function sticknav(){
			var $scroll_top = $(window).scrollTop();

			if( $scroll_top >= $menu_top ){
				$menu.addClass('affix').css('top', $menu_height);
			}
			if( $scroll_top <= $menu_top ){
				$menu.removeClass('affix').css('top', 'auto');
			}
		}

		sticknav();


		$(window).scroll(function(){			
			sticknav();
		});
	}





	// MAGIC
	if( $data_menu == 'magic' ){
		$(this).before('<div class="menu-spacer '+ $spacer_class +'" style="height:'+ $menu_height +'px;"></div>');

		function sticknav(){
			var $scroll_top = $(window).scrollTop();

			if( $scroll_top >= $menu_height ){
				$menu.addClass('affix').css('top', -($menu_height +1));
			}
			if( $scroll_top == $menu_top ){
				$menu.removeClass('affix').css('top', 0);
			}
		}

		sticknav();


		$(window).scroll(function(){			
			sticknav();
		});
	}

});


}());