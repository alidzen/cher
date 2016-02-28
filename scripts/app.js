define('app', [
    'jquery',
    'fastclick'
], function(
    $,
    FastClick
) {
    'use strict';

    FastClick.attach(document.body);

    (function($forms) {
        if (!$forms.length) {
            return;
        }

        var initForms = function initForms(Form) {
            $forms.each(function() {
                var form = new Form($(this));
                form.init();
            });
        };

        require(['app/form'], initForms);
    })($('form').filter(':not([data-noinit])'));

    // Подключение галерей
    (function($gallerys) {
        if (!$gallerys.length) {
            return;
        }

        require(['app/gallery'], function onFotoramaLoaded(gallery) {
            $gallerys.each(function() {
                gallery($(this));
            });
        });
    })($('.j-gallery'));

    //Подключение попапа
    (function($popups) {
        if (!$popups.length) {
            return;
        }

        require(['magnific-popup'], function() {
            $popups.each(function() {
                var $popup = $(this);
                var $closeBtn = $('.b-popup__close');
                var type = $popup.data('type');
                var theme = $popup.data('theme');
                var fullSize = $popup.data('fullsize');
                var toggleAnimate = $popup.data('toggle-time');

                $popup.magnificPopup({
                    type: type || 'inline',
                    showCloseBtn: false,
                    fixedContentPos: true,
                    mainClass: function() {
                        var mainClass = [];

                        if (theme) {
                            mainClass.push('b-popup_theme_' + theme);
                        }

                        if (fullSize === '') {
                            mainClass.push('b-popup_full_size');
                        }

                        if (toggleAnimate) {
                            mainClass.push('b-popup_theme_toggle');
                        }

                        return mainClass.join(' ');
                    },
                    removalDelay: toggleAnimate || 0,
                    callbacks: {
                        open: function() {
                            if (toggleAnimate) {
                                $('.mfp-bg, .mfp-wrap')
                                .css({
                                    'transition-duration' : toggleAnimate + 'ms'
                                });
                            }

                            window.history.pushState('forward', null, '#modal');
                        }
                    }
                });

                $closeBtn.click(function() {
                    $.magnificPopup.close();
                });

                $(window).on('popstate', function() {
                    $.magnificPopup.close();
                });
            });
        });
    })($('.j-popup'));

    //Анимированный label
    (function($animLabels) {
        if (!$animLabels.length) {
            return;
        }

        require(['app/animated-label'], function(AnimatedLabel) {
            $animLabels.each(function() {
                var label = new AnimatedLabel($(this));
                label.init();
            });
        });
    })($('.j-anim-label'));

    // Стилизация селекта
    (function($selects) {
        if (!$selects.length) {
            return;
        }

        require(['select'], function() {
            $selects.each(function() {
                var $select = $(this);
                $select.selectric({
                    disableOnMobile: false
                });
            });
        });
    })($('select'));

    // height of gret block on main page
    (function($greatings) {
        if (!$greatings.length) {
            return;
        }

        var setHeight = function() {
            var screenHeight = $(window).height();
            var screenSize = $(window).width();
            var $topCnt = $('.l-header');
            var $bottomCnt = $('.l-home__features');
            var topCntHeight = $topCnt.outerHeight(true);
            var bottomCntHeight = $bottomCnt.outerHeight(true);
            var height = 0;

            if (screenSize < 1025) {
                height = screenHeight - topCntHeight;
            } else {
                height = screenHeight - topCntHeight - bottomCntHeight - 20;
            }

            $greatings.css({
                height: height,
                opacity: 1
            });
        };

        setHeight();

        $(window).on('resize', function() {
            setHeight();
        });
    })($('.j-home-great'));

    return {};
});
