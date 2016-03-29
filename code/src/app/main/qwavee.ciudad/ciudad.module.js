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


    }
})();