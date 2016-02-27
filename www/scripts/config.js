/* jshint ignore:start */
require.config({
    baseUrl: '/scripts/lib',

    paths : {
        app             : '../app',
        tpl             : '../tpl',

        jquery          : 'jquery/dist/jquery.min',
        'jquery.cookie' : 'jquery.cookie',
        fastclick       : 'fastclick/lib/fastclick',
        modernizr       : 'modernizr/modernizr',
        handlebars      : 'handlebars/handlebars.runtime.min',
        polyfiller       : 'webshim/js-webshim/dev/polyfiller',
        fotorama        : 'fotorama/fotorama',
        'masked-inputs'  : 'jquery.maskedinput/dist/jquery.maskedinput.min',
        'magnific-popup' : 'magnific-popup/dist/jquery.magnific-popup.min',
        select : 'jquery-selectric/public/jquery.selectric.min'
    },
    shim : {
        'jquery.cookie' : {
            deps   : ['jquery']
        },
        fastclick : {
            exports: 'FastClick'
        },
        modernizr: {
            exports: 'Modernizr'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        'magnific-popup': {
            exports: '$.magnificPopup',
            deps: ['jquery']
        }
    },
    /* Launch app.js after config */
    deps: ['app']
});
