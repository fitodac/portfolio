$.noConflict();
jQuery(document).ready(function($){

	
	//$('.custom-select').customSelect();




	/*---------------------------------------------------------*/
	/*  CUSTOM SELECTOR  */
	/*---------------------------------------------------------*/
	$('.dropdown-menu .checkbox, .dropdown-menu label').on('click', function(e){
		e.stopImmediatePropagation();
	});
	
	
	
	/*---------------------------------------------------------*/
	/*  TABS  */
	/*---------------------------------------------------------*/
	$('.tab').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
	});
	
	
	
	/*---------------------------------------------------------*/
	/*  RESOURCES  */
	/*---------------------------------------------------------*/
	/// TABS
	$('.tab-buttons .btn').on('click', function(){
		$(this).closest('.tab-buttons').find('.btn').removeClass('btn-primary').addClass('btn-default');
		$(this).removeClass('btn-default').addClass('btn-primary');
	});
	
	
	/// Toggle visibility between excerpt and full content
	$('.btn-more').on('click', function(e){
		e.preventDefault();
		$(this).closest('article').find('.excerpt').toggleClass('hidden');
		$(this).closest('article').find('.content').toggleClass('hidden');
	});
	
	
	
});//jQuery