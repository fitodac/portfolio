$.noConflict();

(function($) {
// 'use strict';

    if ($('#slider')[0]) {

        $('#slider').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1200,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            navContainer: '#slider-nav',
            dotsContainer: '#slider-nav-dots'
        });
    }

    if ($('#carousel')[0]) {

        $('#carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            // stagePadding: 	1,
            dots: false,
            slideBy: 4,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
    }

    // CLONA EL MENU
    if ($('.hero .navbar')[0]) {

        var _sidebar = $('.hero .navbar').clone(true, true);
        _sidebar.find('svg').detach();
        $('.off-canvas-sidebar').html(_sidebar);

    }

    // ARTISTS
    $('.artist-item').each(function(i, _el) {
        var _id = $(_el).data('id'),
                _details = $('#' + _id).clone(true, true);

        _details.addClass('visible-xs');
        $(_el).after(_details);
    });
    $('.artist-item .artist-image, .artist-item .h4').on('click', function() {

        var _this = $(this),
                _container = _this.parent(),
                _id = $(_container).data('id');

        if (!_container.hasClass('active')) {

            $('.artist-item, .artist-details').removeClass('active');
            _container.addClass('active');

            if ($(window).width() <= 480) {
                console.log('xtra small');
                $(_container).next('.artist-details').addClass('active');
            } else {
                console.log('large');
                $('#' + _id + ':not(.visible-xs)').addClass('active');
            }

        } else {
            $('.artist-item, .artist-details').removeClass('active');
        }

    });

    $(window).resize(function() {
        $('.artist-item, .artist-details').removeClass('active');
    });

    // AGENDA
    if ($('#agenda-filter')[0]) {
        var $filter = $('#agenda-filter'),
                $results = $('#agenda-results .result');
        $filter.on('changed.bs.select', function(e, i, n, o) {
            var value = $('#agenda-filter').val();
            if (value === 'all') {
                $results.show();
            } else {
                $results.filter('[data-venue="' + value + '"]').show();
                $results.not('[data-venue="' + value + '"]').hide();
            }
        });
    }

    function resizeCardUpcoming() {
        $('section.upcoming').each(function() {
            var $container = $(this), maxH = {
                blue: 0,
                sky: 0,
                orange: 0,
                egg: 0,
                pink: 0
            };
            $('.card.card-upcoming', $container).each(function() {
                var $item = $(this), h;
                $('.card.card-upcoming > .blue, .card.card-upcoming > .sky, .card.card-upcoming > .orange, .card.card-upcoming > .egg, .card.card-upcoming > .pink', $container).height('auto');
                h = $('> .blue', $item).height();
                maxH.blue = (h > maxH.blue) ? h : maxH.blue;
                h = $('> .sky', $item).height();
                maxH.sky = (h > maxH.sky) ? h : maxH.sky;
                h = $('> .orange', $item).height();
                maxH.orange = (h > maxH.orange) ? h : maxH.orange;
                h = $('> .egg', $item).height();
                maxH.egg = (h > maxH.egg) ? h : maxH.egg;
                h = $('> .pink', $item).height();
                maxH.pink = (h > maxH.pink) ? h : maxH.pink;
            }).promise().done(function() {
                $('.card.card-upcoming > .blue', $container).height(maxH.blue);
                $('.card.card-upcoming > .sky', $container).height(maxH.sky);
                $('.card.card-upcoming > .orange', $container).height(maxH.orange);
                $('.card.card-upcoming > .egg', $container).height(maxH.egg);
                $('.card.card-upcoming > .pink', $container).height(maxH.pink);
            });
        });
    }

    $(window).on('resize orientationchange', function() {
        resizeCardUpcoming();
    });
    $(document).ready(function() {
        resizeCardUpcoming();
    });

})(jQuery);