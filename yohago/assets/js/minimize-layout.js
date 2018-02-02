jQuery(document).ready(function($){
	
	var win_width = jQuery(window).width();
	
	if( win_width > 767 ){
		jQuery('.visible-xs').detach();
	}
	
	if( win_width < 768 ){
		jQuery('.visible-md').detach();
	}

});
