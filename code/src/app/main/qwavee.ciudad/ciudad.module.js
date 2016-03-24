(function ()
{
    'use strict';

    angular
        .module('app.ciudad', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.ciudad', {
                url    : '/ciudad',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/ciudad/ciudad.html',
                        controller : 'CiudadController as vm'
                    }
                },
                resolve: {
                    CiudadData: function (msApi)
                    {
                        return msApi.resolve('ciudad@get');
                    }
                }
            });

        // Translation
//        $translatePartialLoaderProvider.addPart('app/main/ciudad');

        // Api
        msApiProvider.register('ciudad', ['app/data/ciudad/ciudad.json']);

//        // Navigation
//        msNavigationServiceProvider.saveItem('fuse', {
//            title : 'Ciudad',
//            group : true,
//            weight: 1
//        });
//        

        msNavigationServiceProvider.saveItem('fuse.ciudad', {
            title    : 'Ciudad',
            icon     : 'icon-email',
            state    : 'app.ciudad',
            /*stateParams: {
                'param1': 'page'
             },*/
//            translate: 'SAMPLE.SAMPLE_NAV',
            weight   : 1
        });

    }
})();