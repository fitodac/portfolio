

//(function($) {

	/*
	*  render_map
	*
	*  This function will render a Google Map onto the selected jQuery element
	*
	*  @type	function
	*  @date	8/11/2013
	*  @since	4.3.0
	*
	*  @param	$el (jQuery element)
	*  @return	n/a
	*/

	function render_map($el){

		var $markers = $el.find('.marker');

		var args = {
			zoom				: 16,
			center			: new google.maps.LatLng(0, 0),
			mapTypeId		: google.maps.MapTypeId.ROADMAP,
			scrollwheel : false
		};

		var map = new google.maps.Map( $el[0], args);
		map.markers = [];

		$markers.each(function(){
	    add_marker( $(this), map );
		});

		center_map( map );
	}


	/*
	*  add_marker
	*
	*  This function will add a marker to the selected Google Map
	*
	*  @type	function
	*  @date	8/11/2013
	*  @since	4.3.0
	*
	*  @param	$marker (jQuery element)
	*  @param	map (Google Map object)
	*  @return	n/a
	*/

	function add_marker($marker, map){

		var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );

		var marker = new google.maps.Marker({
			position	: latlng,
			map			: map
		});

		map.markers.push( marker );

		if( $marker.html() ){
			// create info window
			var infowindow = new google.maps.InfoWindow({
				content		: $marker.html()
			});

			// show info window when marker is clicked
			google.maps.event.addListener(marker, 'click', function(){
				infowindow.open( map, marker );
			});
		}

	}



	/*
	*  center_map
	*
	*  This function will center the map, showing all markers attached to this map
	*
	*  @type	function
	*  @date	8/11/2013
	*  @since	4.3.0
	*
	*  @param	map (Google Map object)
	*  @return	n/a
	*/

	function center_map(map){

		var bounds = new google.maps.LatLngBounds();

		$.each( map.markers, function( i, marker ){
			var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );
			bounds.extend( latlng );
		});

		if( map.markers.length == 1 ){
	    map.setCenter( bounds.getCenter() );
	    map.setZoom( 16 );
		}else{
			map.fitBounds( bounds );
		}

	}

//});








$(document).ready(function(){


	$('.map').each(function(){
		render_map($(this));
	});


	

	// YOURS WORD
	$('.branded').each(function(){
		var y = $(this).text()[0],
        o = $(this).text()[1],
        u = $(this).text()[2],
        r = $(this).text()[3],
        s = $(this).text()[4];

		var arr = [];

		(y) ? arr.push('<span class="y">'+ y +'</span>') : '';
		(o) ? arr.push('<span class="o">'+ o +'</span>') : '';
		(u) ? arr.push('<span class="u">'+ u +'</span>') : '';
		(r) ? arr.push('<span class="r">'+ r +'</span>') : '';
		(s) ? arr.push('<span class="s">'+ s +'</span>') : '';


		$(this).html(arr);

	});






	// FIX DATE
	$('.fdc-recent-posts-widget .list-group-item-date').each(function(){
		var t = $(this).text(),
				d = t.split('/');

		console.log(d[0]);
		console.log(d[1]);
		console.log(d[2]);
		
		$(this).html('<span class="day">'+ d[0] +'</span>/'+
			'<span class="month">'+ d[1] +'</span>/'+
			'<span class="year">'+ d[2] +'</span>');
		
	});



	// BUTTON TOGGLE
	$('.btn-toggle').on('click touchstart', function(){
		$(this).toggleClass('active');
		$('.nav-toggle').toggleClass('active');
	});




	// GALLERY
	$('.img-gallery a').fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});



	// FIX LA CUINA LINK
	if( $('body.home').length > 0 ){

    if ($('#menu-item-69').length > 0)
    {
      var $link = $('#menu-item-69 > ul > li:eq(0) > a').attr('href');
      $('#menu-item-69 > a').attr('href', $link);
    }
    else if ($('#menu-item-549').length > 0)
    {
      var $link = $('#menu-item-549 > ul > li:eq(0) > a').attr('href');
      $('#menu-item-549 > a').attr('href', $link);
    }
    else if ($('#menu-item-559').length > 0)
    {
      var $link = $('#menu-item-559 > ul > li:eq(0) > a').attr('href');
      $('#menu-item-559 > a').attr('href', $link);
    }
    else if ($('#menu-item-569').length > 0)
    {
      var $link = $('#menu-item-569 > ul > li:eq(0) > a').attr('href');
      $('#menu-item-569 > a').attr('href', $link);
    }

	}






	// NAVIGATION
	$('.navbar-toggle').on('click touchstart', function(e){
		e.preventDefault();
		$('body > .container').toggleClass('in');
	});

	$('.navbar-overlay').on('click touchstart', function(e){
		e.preventDefault();
		$('body > .container').removeClass('in');
	});
	


});//jQuery

























