

/*------------------------------------------------------------------------------*/
/* SCRIPTS.js */
/* Here you can write all javascript. */
/*------------------------------------------------------------------------------*/


var loop = false;

$(document).ready(function(){
	
	arm();


});//document ready end


function arm(){
	setTimeout(function(){
		$('.androide_arm').addClass('anim');
		
		setTimeout(function(){
			$('.androide_arm').removeClass('anim');
		}, 5000);
		
		if(loop == false){
			arm();
		}
	}, 6000);
}