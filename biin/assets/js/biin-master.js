/*
 * Script for our Insight theme
 * Written By: InsightStudio
 * */

'use strict';

window.insight = {};

// inViewport
(
	function( $, win ) {
		$.fn.inViewport = function( cb ) {
			return this.each( function( i, el ) {
				function insight_vispx() {
					var H = $( this ).height(),
						r = el.getBoundingClientRect(), t = r.top, b = r.bottom;
					return cb.call( el, Math.max( 0, t > 0 ? H - t : (
						b < H ? b : H
					) ) );
				}

				insight_vispx();
				$( win ).on( "resize scroll", insight_vispx );
			} );
		};
	}( jQuery, window )
);

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Animate: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					$( '.tm-animation' ).inViewport( function( px ) {
						if ( px ) {
							$( this ).addClass( 'animate' );
						}
					} );
					$( window ).trigger( 'scroll' );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			BlogMasonry: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					var $container = $( '.blog-masonry' ).isotope( {
						itemSelector: '.blog-masonry-item',
						percentPosition: true,
						masonry: {
							isFitWidth: true,
							columnWidth: '.item-sizer'
						}
					} );

					setTimeout(function(){
						$container.isotope( 'layout' );
					}, 100);
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			BlogMetro: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					var $container = $( '.blog-metro' ).isotope( {
						itemSelector: '.blog-metro-item',
						percentPosition: true,
						masonry: {
							isFitWidth: true,
							columnWidth: '.item-sizer'
						}
					} );
					setTimeout(function(){
						$container.isotope( 'layout' );
					}, 100);
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Carousel: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					$( '[data-insight-carousel="true"]' ).each( function() {
						var data_slick = jQuery( this ).data( 'carousel-settings' );
						var responsive = {
							responsive: [
								{
									breakpoint: 768,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1
									}
								}
							]
						};

						var settings = $.extend( {}, data_slick, responsive );

						jQuery( this ).slick( settings );
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Countdown: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					// Countdown
					jQuery( '.insight-countdown' ).each( function() {
						var data_id = jQuery( this ).data( 'id' );
						var target = new Date( jQuery( '#' + data_id ).text() );
						var current = new Date();
						if ( target.getTime() < current.getTime() ) {
							document.getElementById( data_id ).innerHTML = "";
							return;
						}

						countdown.resetLabels();
						countdown.setLabels(
							' millisecond| <span>second</span>| <span>minute</span>| <span>hour</span>| <span>day</span>| <span>week</span>| <span>month</span>| <span>year</span>| <span>decade</span>| <span>century</span>| <span>millennium</span>',
							' milliseconds| <span>seconds</span>| <span>minutes</span>| <span>hours</span>| <span>days</span>| <span>weeks</span>| <span>months</span>| <span>years</span>| <span>decades</span>| <span>centuries</span>| <span>millennia</span>',
							'',
							'',
							'',
							function( n ) {
								if ( n < 10 ) {
									return '0' + n.toString();
								}
								return n.toString();
							} );
						countdown(
							target,
							function( ts ) {
								if ( ts.hours === 0 ) {
									ts.hours = '0';
								}
								if ( ts.minutes === 0 ) {
									ts.minutes = '0';
								}
								if ( ts.seconds === 0 ) {
									ts.seconds = '0';
								}
								if ( ts.days === 0 ) {
									ts.days = '0';
								}
								document.getElementById( data_id ).innerHTML = ts.toHTML( 'div' );
							},
							countdown.DAYS + countdown.HOURS + countdown.MINUTES + countdown.SECONDS
						);
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Counter: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					$( '.insight-counter' ).find( '.number span' ).each( function() {
						if($( this ).data('animation') == true) {
							var v = $( this ).html();
							var o = new Odometer( {
								el: $( this )[0],
								value: 0,
							} );
							o.render();
							$( this ).inViewport( function( px ) {
								if(px) {
									o.update( v );
								}
							} );
						}
					} );
					$(window).trigger('scroll');
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

function insight_header_side() {
	var $body = jQuery( 'body' );
	if ( ! $body.hasClass( 'has-header-07' ) ) {
		return;
	}
	var $contentWidth = jQuery( '#page' ).width();
	var $boxWidth = jQuery( '#primary' ).width();
	var $spacing = (
		               $contentWidth - $boxWidth
	               ) / 2;
	var rows = jQuery( '#main .entry-content' ).children( '.vc_row' );
	rows.each( function() {
		if ( jQuery( this ).attr( 'data-vc-full-width' ) ) {
			jQuery( this ).css( {
				left: - $spacing + 'px',
				width: $contentWidth + 'px'
			} );
			if ( ! jQuery( this ).attr( 'data-vc-stretch-content' ) ) {
				jQuery( this ).css( {
					paddingLeft: $spacing,
					paddingRight: $spacing
				} );
			}
		}
	} );
}

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			HeaderSide: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					insight_header_side();

					jQuery( window ).on( 'resize', function() {
						insight_header_side();
					} );
				}
			}
		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			HeaderSticky: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					if( jQuery('.header').hasClass('header-sticky') ){
						var offset = jQuery( '.header' ).offset();
						var hheight = jQuery( '.header' ).height();
						jQuery( '.header.header-sticky' ).not( '.header-07' ).headroom(
							{
								offset: offset.top,
								onTop: function() {
									if( !jQuery('body').hasClass('darknav') ){
										if ( jQuery( '.logo-image' ).attr( 'data-normal' ) != '' ) {
											jQuery( '.logo-image' ).attr( 'src', jQuery( '.logo-image' ).attr( 'data-normal' ) );
										}
										if ( jQuery( '.header-overlay' ).length <= 0 ) {
											jQuery( 'html' ).css( {paddingTop: 0} );
										}
									}
								},
								onNotTop: function() {
									if( !jQuery('body').hasClass('darknav') ){
										if ( jQuery( '.logo-image' ).attr( 'data-sticky' ) != '' ) {
											jQuery( '.logo-image' ).attr( 'src', jQuery( '.logo-image' ).attr( 'data-sticky' ) );
										}

										if ( jQuery( '.header-overlay' ).length <= 0 ) {
											jQuery( 'html' ).css( {paddingTop: hheight} );
										}
									}
								},
							}
						);
					}
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

// (
// 	function( insight, $ ) {
// 		insight = insight || {};
// 		$.extend( insight, {

// 			LightboxVideo: {

// 				init: function() {
// 					this.build();
// 					return this;
// 				},

// 				build: function() {
// 					$( '.insight-project-video, .insight-light-video, .insight-video' ).lightGallery();

// 					$( '.insight-video-btn, .insight-show-video' ).lightGallery( {
// 						selector: 'a'
// 					} );
// 				}
// 			}

// 		} );
// 	}
// ).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			MiniCart: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					var $mini_cart = $('.mini-cart');
					$mini_cart.on('click', function(e) {
				        $(this).closest('.mini-cart-wrap').addClass('open');
				    });
					$('.mini-cart-wrap').on('click', function(e) {
				        $(this).addClass('open');
				    });

					$(document).on('click', function(e) {
						if ( (
								 $( e.target ).closest( '.mini-cart-wrap' ).length == 0
							 ) && (
								 $( e.target ).closest( '.mini-cart' ).length == 0
							 ) ) {
							if ( $('.mini-cart-wrap').hasClass( 'open' ) ) {
								$('.mini-cart-wrap').removeClass('open');
							}
						}
				    });
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			MobileMenu: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {

					$('.open-menu-mobile').on('click', function(e) {
						if($(this).hasClass('active')) {
							$('#mobile').removeClass('active');
							$(this).removeClass('active');
							$(this).find('i').addClass('fa-bars').removeClass('fa-times');
						} else {
							$('#mobile').addClass('active');
							$(this).addClass('active');
							$(this).find('i').removeClass('fa-bars').addClass('fa-times');
						}
				    });

					// Show sub-menu
					var $menu = $( '#mobile' );

					$( '#mobile .sub-menu-toggle' ).on( 'click', function( e ) {
						var subMenu = $( this ).next();

						if ( subMenu.css( 'display' ) == 'block' ) {
							subMenu.css( 'display', 'block' ).slideUp().parent().removeClass( 'expand' );
						} else {
							subMenu.css( 'display', 'none' ).slideDown().parent().addClass( 'expand' );
						}
						e.stopPropagation();
					} );

					$( document ).on( 'click', function( e ) {
						if ( (
								 $( e.target ).closest( '#mobile' ).length == 0
							 ) && (
								 $( e.target ).closest('.open-menu-mobile').length == 0
							 ) ) {

 								$('#mobile').removeClass('active');
 								$('.open-menu-mobile').removeClass('active');
 								$('.open-menu-mobile').find('i').addClass('fa-bars').removeClass('fa-times');
						}
					} );

				},
			}
		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			OverlayMenu: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					$('.open-overlay-menu').on('click', function(e) {
						if($(this).hasClass('active')) {
							$('.insight-overlay-menu').removeClass('active');
							$(this).removeClass('active');
							$(this).find('i').addClass('fa-bars').removeClass('fa-times');
							$('body').removeClass('overflow-hidden');
						} else {
							$('.insight-overlay-menu').addClass('active');
							$(this).addClass('active');
							$(this).find('i').removeClass('fa-bars').addClass('fa-times');
							$('body').addClass('overflow-hidden');
						}
				    });

					$('.insight-overlay-menu ul li a').on('click', function(e) {
						var _self = $(this),
							$li = _self.closest('li'),
							$ul = $li.find('.sub-menu');

						if($li.hasClass('menu-item-has-children')) {
							$ul.slideToggle();
							return false;
						}
				    });

				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

function insight_404_height() {
	var wh = jQuery( window ).height();
	jQuery( 'body.error404 .content-area' ).height( wh );
}

function insight_go_back() {
	window.history.back();
}

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Page404: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					insight_404_height();

					jQuery( '.content-404-back' ).on( 'click', function( e ) {
						e.preventDefault();
						insight_go_back();
					} );

					jQuery( window ).on( 'resize', function() {
						insight_404_height();
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Piechart: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					jQuery( '.insight-pie-chart .pie-chart' ).inViewport( function( px ) {
						if ( px ) {
							var style = jQuery( this ).data('style');
							var barColor = jQuery( this ).data( 'bar-color' );
							if(style == 'grad') {
								var barColorEnd = jQuery( this ).data( 'bar-color-end' );
								jQuery( this ).easyPieChart( {
									barColor: function( percent ) {
										var ctx = this.renderer.getCtx();
										var canvas = this.renderer.getCanvas();
										var gradient = ctx.createLinearGradient( 0, 0, canvas.width, 0 );
										gradient.addColorStop( 0, "'" + barColor + "'" );
										gradient.addColorStop( 1, "'" + barColorEnd + "'" );
										return gradient;
									},
									scaleColor: false,
									lineWidth: 6,
									lineCap: 'circle',
									size: 180,
								} );
							} else {
								jQuery( this ).easyPieChart( {
									barColor: barColor,
									scaleColor: false,
									lineWidth: 6,
									lineCap: 'circle',
									size: 180,
								} );
							}

						}
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

// (
// 	function( insight, $ ) {
// 		insight = insight || {};
// 		$.extend( insight, {

// 			PopupVideo: {

// 				init: function() {
// 					this.build();
// 					return this;
// 				},

// 				build: function() {
// 					jQuery( '.video_btn' ).magnificPopup( {
// 						type: 'iframe'
// 					} );
// 				}
// 			}

// 		} );
// 	}
// ).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			ProgressBar: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					$( '[data-progress-width]' ).each( function( $index ) {
						$( this ).inViewport( function( px ) {
							if(px) {
								var $this = $( this );
								var time = 1 + (
										$index / 2
									);
								var css = '-webkit-transition: all ' + time + 's cubic-bezier(0.645, 0.045, 0.01, 0.05);transition: all ' + time + 's cubic-bezier(0.645, 0.045, 0.355, 0.1)';
								$this.attr( 'style', css ).css( {width: $this.data( 'progress-width' ) + '%'} );
							}
						} );

					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			ScrollUp: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					var $window = $( window );
					var $scrollup = $( '.scrollup' );

					$window.scroll( function() {
						if ( $window.scrollTop() > 100 ) {
							$scrollup.addClass( 'show' );
						} else {
							$scrollup.removeClass( 'show' );
						}
					} );

					$scrollup.on( 'click', function( evt ) {
						$( 'html, body' ).animate( {scrollTop: 0}, 600 );
						evt.preventDefault();
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			SearchBoxMobile: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					var topSearch = $( '.top-search-mobile' );
						$( '.open-search-mobile' ).on( 'click', function() {
							if ( ! topSearch.hasClass( 'open' ) ) {
								topSearch.addClass( 'open' );
								topSearch.slideDown();
								$( '.top-search-mobile .search-field' ).focus();
							} else {
								topSearch.slideUp();
								topSearch.removeClass( 'open' );
							}
						} );
						$( document ).on( 'click', function( e ) {
							if ( (
								     $( e.target ).closest( topSearch ).length == 0
							     ) && (
								     $( e.target ).closest( '.open-search-mobile' ).length == 0
							     ) ) {
								if ( topSearch.hasClass( 'open' ) ) {
									topSearch.slideUp();
									topSearch.removeClass( 'open' );
								}
							}
						} );
				},
			}
		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			SearchBox: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					var topSearch = $( '.top-search' );
					$( '.top-search-btn' ).on( 'click', function() {
						if ( ! topSearch.hasClass( 'open' ) ) {
							topSearch.addClass( 'open' );
							topSearch.slideDown();
							topSearch.find( '.search-field' ).focus();
						} else {
							topSearch.slideUp();
							topSearch.removeClass( 'open' );
						}
					} );
					$( document ).on( 'click', function( e ) {
						if ( (
							     $( e.target ).closest( topSearch ).length == 0
						     ) && (
							     $( e.target ).closest( '.top-search-btn' ).length == 0
						     ) ) {
							if ( topSearch.hasClass( 'open' ) ) {
								topSearch.slideUp();
								topSearch.removeClass( 'open' );
							}
						}
					} );
				},
			}
		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Tabs: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					$.fn.insightTabs = function() {
						var thisTabs = this;
						thisTabs.find( '.nav-tab .item' ).on( 'click', function() {
							$( this ).addClass( 'active' ).siblings().removeClass( 'active' );
							$( $( this ).data( 'tab-target' ) ).addClass( 'active' ).siblings().removeClass( 'active' );
						} );
					};
					$( '.insight-tabs' ).each( function() {
						$( this ).insightTabs();
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Accordion: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					$.fn.insightAccordion = function() {
						var thisAcc = this;
						var thisType = this.data( 'type' );
						thisAcc.find( '.title' ).on( 'click', function() {
							if ( thisType == 'accordion' ) {
								thisAcc.find( '.item' ).removeClass( 'active' );
								$( this ).parent().addClass( 'active' );
							} else {
								$( this ).parent().toggleClass( 'active' );
							}
						} );
					};
					$( '[data-insight-accordion="true"]' ).each( function() {
						$( this ).insightAccordion();
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Gmaps: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					// maps
					jQuery( '.insight-gmaps' ).each( function() {
						var gmMapDiv = jQuery( this );
						if ( gmMapDiv.length ) {
							var gmMarkerAddress = gmMapDiv.attr( 'data-address' );
							var gmHeight = gmMapDiv.attr( 'data-height' );
							var gmWidth = gmMapDiv.attr( 'data-width' );
							var gmZoomEnable = gmMapDiv.attr( 'data-zoom_enable' );
							var gmZoom = gmMapDiv.attr( 'data-zoom' );
							var gmIcon = gmMapDiv.attr( 'data-icon' );
							var mapTypeId = gmMapDiv.attr( 'data-mapTypeId' );
							var gmStyle = gmMapDiv.attr( 'data-style' );
							var gmContent = gmMapDiv.attr( 'data-content' );
							gmMapDiv.gmap3( {
								action: 'init',
								marker: {
									address: gmMarkerAddress,
									options: {
										icon: gmIcon
									},
									events: {
										click: function( marker, event ) {
											if ( gmContent.trim() != '' ) {
												var map = jQuery( this ).gmap3( 'get' );
												var infowindow = jQuery( this ).gmap3( {get: {name: 'infowindow'}} );
												if ( infowindow ) {
													infowindow.open( map, marker );
													infowindow.setContent( gmContent );
												}
												else {
													jQuery( this ).gmap3( {
														infowindow: {
															anchor: marker,
															options: {content: gmContent}
														}
													} );
												}
											}

										}
									}
								},
								map: {
									options: {
										zoom: parseInt( gmZoom ),
										zoomControl: true,
										mapTypeId: eval( mapTypeId ),
										mapTypeControl: false,
										scaleControl: false,
										scrollwheel: gmZoomEnable == 'enable' ? true : false,
										streetViewControl: false,
										draggable: true,
										styles: eval( gmStyle ),
									}
								}
							} ).width( gmWidth ).height( gmHeight );
						}
					} ); // end each
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

// (
// 	function( insight, $ ) {
// 		insight = insight || {};
// 		$.extend( insight, {

// 			LightboxGallery: {

// 				init: function() {
// 					this.build();
// 					return this;
// 				},

// 				build: function() {
// 					jQuery( '.insight-lightbox-gallery' ).lightGallery( {
// 						selector: 'a',
// 						thumbnail: true,
// 						animateThumb: false,
// 						showThumbByDefault: false
// 					} );
// 				}
// 			}

// 		} );
// 	}
// ).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			PortfolioFilter: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					setTimeout( function() {
						jQuery( window ).trigger( 'resize' );
					}, 1000 );

					// Portfolio filter
					jQuery( '.insight-portfolio-filter' ).each( function() {
						var $this = jQuery( this );
						var data_id = $this.data( 'id' );
						var data_paging = $this.data( 'paging' );
						var data_perpage = $this.data( 'perpage' );
						if ( data_paging == 'yes' ) {
							var filterSelector = '#' + data_id;
							var itemSelector = '.insight-item';
							var $container = $( '#' + data_id + ' .insight-items' ).isotope( {
								itemSelector: itemSelector,
								masonry: {
									isFitWidth: true
								}
							} );
							var itemsPerPageDefault = data_perpage;
							var itemsPerPage = insight_define_per_page( itemsPerPageDefault );
							var currentNumberPages = 1;
							var currentPage = 1;
							var currentFilter = '*';
							var filterAtribute = 'class';
							var pageAtribute = 'data-page';
							var pagerClass = 'insight-pager';

							insight_set_pagination( itemSelector, currentFilter, filterAtribute, itemsPerPage, pageAtribute, pagerClass, currentNumberPages, currentPage, $container );
							insight_go_to_page( 1, itemSelector, currentFilter, filterAtribute, pageAtribute, currentPage, $container )
							// Filter
							$( filterSelector + ' .insight-filter a' ).click( function() {
								$( filterSelector + ' .insight-filter a' ).removeClass( 'active' );
								$( this ).addClass( 'active' );
								var filter = $( this ).attr( 'data-filter' );
								currentFilter = filter;
								insight_set_pagination( itemSelector, currentFilter, filterAtribute, itemsPerPage, pageAtribute, pagerClass, currentNumberPages, currentPage, $container );
								insight_go_to_page( 1, itemSelector, currentFilter, filterAtribute, pageAtribute, currentPage, $container )
							} );
							// Responsive
							$( window ).resize( function() {
								itemsPerPage = insight_define_per_page( itemsPerPageDefault );
								insight_set_pagination( itemSelector, currentFilter, filterAtribute, itemsPerPage, pageAtribute, pagerClass, currentNumberPages, currentPage, $container );
								insight_go_to_page( 1, itemSelector, currentFilter, filterAtribute, pageAtribute, currentPage, $container )
							} );
							// Paging
							$( filterSelector + ' .insight-pager a' ).live( 'click', function() {
								var scroll_to = jQuery( '#' + data_id ).offset().top;
								jQuery( 'body' ).animate( {scrollTop: scroll_to} );
								$( filterSelector + ' .insight-pager a' ).removeClass( 'active' );
								$( this ).addClass( 'active' );
							} );
						} else {
							var filterSelector = '#' + data_id;
							var itemSelector = '.insight-item';
							var $container = $( '#' + data_id + ' .insight-items' ).isotope( {
								itemSelector: itemSelector,
								masonry: {
									isFitWidth: true
								}
							} );
							var currentFilter = '*';
							var filterAtribute = 'class';
							setTimeout( function() {
								insight_change_filter( itemSelector, $container );
							}, 100 );

							// Filter
							$( filterSelector + ' .insight-filter a' ).click( function() {
								$( filterSelector + ' .insight-filter a' ).removeClass( 'active' );
								$( this ).addClass( 'active' );
								var filter = $( this ).attr( 'data-filter' );
								currentFilter = filter;

								var selector = itemSelector;
								selector += (
									currentFilter != '*'
								) ? '[' + filterAtribute + '~="' + currentFilter + '"]' : '';
								insight_change_filter( selector, $container );
							} );
						}
					} );

					function insight_change_filter( selector, $container ) {
						$container.isotope( {
							filter: selector
						} );
					}

					function insight_define_per_page( itemsPerPageDefault ) {
						var pages = itemsPerPageDefault;
						return pages;
					}

					function insight_go_to_page( n, itemSelector, currentFilter, filterAtribute, pageAtribute, currentPage, $container ) {
						currentPage = n;

						var selector = itemSelector;
						selector += (
							currentFilter != '*'
						) ? '[' + filterAtribute + '~="' + currentFilter + '"]' : '';
						selector += '[' + pageAtribute + '="' + currentPage + '"]';

						insight_change_filter( selector, $container );
					}

					function insight_set_pagination( itemSelector, currentFilter, filterAtribute, itemsPerPage, pageAtribute, pagerClass, currentNumberPages, currentPage, $container ) {
						var SettingsPagesOnItems = function() {
							var itemsLength = $container.children( itemSelector ).length;
							var pages = Math.ceil( itemsLength / itemsPerPage );
							var item = 1;
							var page = 1;
							var selector = itemSelector;
							selector += (
								currentFilter != '*'
							) ? '[' + filterAtribute + '~="' + currentFilter + '"]' : '';
							$container.children( selector ).each( function() {
								if ( item > itemsPerPage ) {
									page ++;
									item = 1;
								}
								jQuery( this ).attr( pageAtribute, page );
								item ++;
							} );
							currentNumberPages = page;
						}();
						var CreatePagers = function() {
							var $isotopePager = (
								jQuery( '.' + pagerClass ).length == 0
							) ? jQuery( '<div class="' + pagerClass + '"></div>' ) : jQuery( '.' + pagerClass );
							$isotopePager.html( '' );
							for ( var i = 0; i < currentNumberPages; i ++ ) {
								var $pager = jQuery( '<a href="javascript:void(0);" ' + pageAtribute + '="' + (
								                     i + 1
									) + '"></a>' );
								$pager.html( i + 1 );
								$pager.click( function() {
									var page = jQuery( this ).eq( 0 ).attr( pageAtribute );
									jQuery( this ).eq( 0 ).addClass( 'active' );
									insight_go_to_page( page, itemSelector, currentFilter, filterAtribute, pageAtribute, currentPage, $container );
								} );
								$pager.appendTo( $isotopePager );
							}
							$container.after( $isotopePager );
						}();
					}
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			RowInner: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					jQuery( '[data-ac="true"]' ).each( function() {
						if ( jQuery( this ).attr( 'data-mw' ) ) {
							var max_width = jQuery( this ).data( 'mw' );
							jQuery( this ).css( 'max-width', max_width );
						}
						if ( jQuery( this ).attr( 'data-al' ) ) {
							var align = jQuery( this ).data( 'al' );
							if ( align == 'left' ) {
								jQuery( this ).css( 'margin-left', 0 );
							}
							if ( align == 'center' ) {
								jQuery( this ).css( 'margin-left', 'auto' );
								jQuery( this ).css( 'margin-right', 'auto' );
							}
							if ( align == 'right' ) {
								jQuery( this ).css( 'margin-left', 'auto' );
								jQuery( this ).css( 'margin-right', 0 );
							}
						}
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Separator: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					jQuery( '.insight-separator-btn' ).on( 'click', function( e ) {
						jQuery( 'html, body' ).animate( {scrollTop: 0}, 600 );
						e.preventDefault();
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			ViewDemo: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					setTimeout( function() {
						jQuery( window ).trigger( 'resize' );
					}, 1000 );
					
					var filterSelector = '.insight-view-demo';
					var itemSelector = '.insight-view-demo-item';

					var $container = jQuery( '.insight-view-demo .insight-items' ).isotope( {
						itemSelector: itemSelector,
						percentPosition: true,
						masonry: {
							isFitWidth: true,
							columnWidth: '.grid-sizer'
						}
					} );

					var currentFilter = '*';
					var filterAtribute = 'class';

					setTimeout( function() {
						changeFilter();
					}, 100 );

					function changeFilter( selector ) {
						$container.isotope( {
							filter: selector
						} );
					}

					// Filter
					jQuery( filterSelector + ' .insight-filter a' ).click( function() {
						jQuery( filterSelector + ' .insight-filter a' ).removeClass( 'active' );
						jQuery( this ).addClass( 'active' );
						var filter = jQuery( this ).attr( 'data-filter' );
						currentFilter = filter;

						var selector = itemSelector;
						selector += (
							currentFilter != '*'
						) ? '[' + filterAtribute + '~="' + currentFilter + '"]' : '';
						changeFilter( selector );
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		insight = insight || {};
		$.extend( insight, {

			Woo: {

				init: function() {
					this.build();
					return this;
				},

				build: function() {
					jQuery( '.woo-single-images, .woo-single-summary' ).stick_in_parent();
					jQuery( 'body.single-product .woo-single-images' ).lightGallery( {
						selector: 'a',
						thumbnail: true,
						animateThumb: false,
						showThumbByDefault: false
					} );

					// product carousel
					$( '.insight-product-carousel' ).each( function() {
						var this_carousel = jQuery( this ).find( '.woo-products' );
						var data_slick = jQuery( this ).data( 'carousel-settings' );
						var responsive = {
							responsive: [
								{
									breakpoint: 768,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1
									}
								}
							]
						};

						var settings = $.extend( {}, data_slick, responsive );

						this_carousel.slick( settings );
					} );
				}
			}

		} );
	}
).apply( this, [window.insight, jQuery] );

(
	function( insight, $ ) {
		function insightOnReady() {

			if ( typeof insight.SearchBox !== 'undefined' ) {
				insight.SearchBox.init();
			}

			if ( typeof insight.RowInner !== 'undefined' ) {
				insight.RowInner.init();
			}

			if ( typeof insight.HeaderSticky !== 'undefined' ) {
				insight.HeaderSticky.init();
			}

			if ( typeof insight.SearchBoxMobile !== 'undefined' ) {
				insight.SearchBoxMobile.init();
			}

			if ( typeof insight.MiniCart !== 'undefined' ) {
				insight.MiniCart.init();
			}

			if ( typeof insight.OverlayMenu !== 'undefined' ) {
				insight.OverlayMenu.init();
			}

			if ( typeof insight.MobileMenu !== 'undefined' ) {
				insight.MobileMenu.init();
			}

			if ( typeof insight.LightboxVideo !== 'undefined' ) {
				insight.LightboxVideo.init();
			}

			if ( typeof insight.BlogMasonry !== 'undefined' ) {
				insight.BlogMasonry.init();
			}

			if ( typeof insight.BlogMetro !== 'undefined' ) {
				insight.BlogMetro.init();
			}

			if ( typeof insight.ProgressBar !== 'undefined' ) {
				insight.ProgressBar.init();
			}

			if ( typeof insight.Counter !== 'undefined' ) {
				insight.Counter.init();
			}

			if ( typeof insight.Carousel !== 'undefined' ) {
				insight.Carousel.init();
			}

			if ( typeof insight.Countdown !== 'undefined' ) {
				insight.Countdown.init();
			}

			if ( typeof insight.Piechart !== 'undefined' ) {
				insight.Piechart.init();
			}

			if ( typeof insight.Accordion !== 'undefined' ) {
				insight.Accordion.init();
			}

			if ( typeof insight.Tabs !== 'undefined' ) {
				insight.Tabs.init();
			}

			if ( typeof insight.Woo !== 'undefined' ) {
				insight.Woo.init();
			}

			if ( typeof insight.Separator !== 'undefined' ) {
				insight.Separator.init();
			}

			if ( typeof insight.LightboxGallery !== 'undefined' ) {
				insight.LightboxGallery.init();
			}

			if ( typeof insight.Page404 !== 'undefined' ) {
				insight.Page404.init();
			}

			if ( typeof insight.ScrollUp !== 'undefined' ) {
				insight.ScrollUp.init();
			}

			if ( typeof insight.HeaderSide !== 'undefined' ) {
				insight.HeaderSide.init();
			}

			if ( typeof insight.Gmaps !== 'undefined' ) {
				insight.Gmaps.init();
			}

			if ( typeof insight.PortfolioFilter !== 'undefined' ) {
				insight.PortfolioFilter.init();
			}

			if ( typeof insight.PopupVideo !== 'undefined' ) {
				insight.PopupVideo.init();
			}

			if ( typeof insight.ViewDemo !== 'undefined' ) {
				insight.ViewDemo.init();
			}

			if ( typeof insight.Animate !== 'undefined' ) {
				insight.Animate.init();
			}
		}

		$( document ).ready( function() {
			insightOnReady();
		} );
	}.apply( this, [window.insight, jQuery] )
);
