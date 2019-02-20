var s = skrollr.init();
if (s.isMobile()) {
  s.destroy();
}

(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {

    $('.tw-share').sharing('twitter');
    $('.fb-share').sharing('facebook');
    
    $(".fancybox").fancybox({
        /*maxWidth: 800,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,*/
        openEffect: 'elastic',
        closeEffect: 'elastic',
        afterLoad: function () {
            if (this.type == "iframe") {
                $.extend(this, {
                    iframe: {
                        preload: false
                    }
                });
            }
        }
    });

  });

}(jQuery));
