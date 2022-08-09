$.noConflict();

(function($) {
'use strict';



  function calc_equal_heights()
  {
    $('[data-equal-height], [equal-height]').each(function () {
      var $this = $(this),
          maxH = 0;
      var $items = $('[data-equal-height-item], [equal-height-item]', $this).filter(function (index) {
        var $obj = $(this);
        $obj.height('auto');
        return $obj.is('img') || $obj.width() !== $obj.parent().width() || $obj.parent().width() !== $obj.parent().parent().width();
      });
      //$items.height('auto');
      $items.each(function () {
        var h = $(this).outerHeight();
        if (h > maxH)
        {
          maxH = h;
        }
      }).promise().done(function () {
        $items.height(maxH+1);
      });
    });
  }

  $(window).bind('orientationchange resize', function () {
    calc_equal_heights();
  });
  $(window).on('load', function () {
    calc_equal_heights();
  });

jQuery(document).ready(function($){

  function openProdModal()
  {
    $('#productos-modal-wrapper').addClass('active');
  }
  function closeProdModal()
  {
    $('#productos-modal-wrapper').removeClass('active');
  }
  function toggleProdModal()
  {
    $('#productos-modal-wrapper').toggleClass('active');
  }
  
  $('.products-modal-trigger > a, #productos-modal-wrapper').on('click', function(e){
    console.log(this, e.target);
    if (e.target !== this)
    {
      return;
    }
		e.preventDefault();
    toggleProdModal();
    return false;
  });

	// NAVBAR
	$('.navbar-toggle').on('click', function(e){
		e.preventDefault();

		var menu = $($(this).data('target'));

		if( menu.hasClass('in') ){
			menu.removeClass('in');
			$('.login-overlay').removeClass('active').css('zIndex',95);
		}else{
			menu.addClass('in');
			$('.login-overlay').addClass('active').css('zIndex',55);
		}


		$('.login-overlay').on('click', function(){
			menu.removeClass('in');
			$(this).removeClass('active').css('zIndex',95);
		});
	});



	// Language selector
	if( $('.main-header .lang')[0] ){
		$('.main-header .lang').chosen({
			disable_search_threshold: 10
		}).change(function(){
      window.location = $('.main-header .lang').val();
    });
	}



	// Chosen
	if( $('.chosen')[0] ){
		$('select.chosen').each(function(){
			$(this).chosen({
				disable_search_threshold: 10
			});
		});
	}


  // Owl carousel - featured products
  var owl = $("#products");
 
  owl.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //3 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : true, // itemsMobile active
  });
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })


	// Login
	if( $('.access .login')[0] ){
		$('.access .login').on('click', function(e){
			e.preventDefault();

			var $x = $(this).offset().left - ($('.login-dropdown').outerWidth() / 2),
					$y = $('.topbar').outerHeight();
			
			$('.login-dropdown').css({
				'left': $x - 20,
				'top': $y + 15,
				'visibility': 'visible'
			});

			$('.login-overlay').addClass('active');

		});



		$('.login-overlay').on('click', function(){
			
			$(this).removeClass('active');

			$('.login-dropdown').css({
				'left': 0,
				'top': '100%',
				'visibility': 'hidden'
			});

		});

	}

  // Job Form
  if( $("#job")[0] ) {
    var select_jobs = "";
    var jobs = paintcar.btoptions;
    for (var i = 0, max = jobs.length; i < max; ++i) {
      select_jobs += '<option id="' + jobs[i].id + '" value="' + jobs[i].name + '">' + jobs[i].name +'</option>';
    }
    $("#job").append(select_jobs);
  }
  $(".btn-job").on('click', function(e) {
    var $obj = $(this);
    var link = $($obj).children('a').attr('href');
    var job_id = $obj.data('job-id');
    $('#job option').attr('selected',false);
    $('#job #' + job_id).attr('selected','selected');
    
    $('html, body').animate({
        scrollTop: $( link ).offset().top
    }, 500);
    return false;
  });
  $('#btn-attachment').click(function(e){
    $('#attachment').click();
  });
  $('#attachment').on('change', function(e) {
    var filepath = this.value.replace("C:\\fakepath\\", "");
    $("#uploadFile").val(filepath);
  });

});

})(jQuery);