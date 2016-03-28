(function ()
{
    'use strict';

    angular
        .module('app.qwavee.login', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.login', {
                url    : '/login',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/qwavee.login/login.html',
                        controller : 'LoginController as vm'
                    }
                },
//                resolve: {
//                    CiudadData: function (msApi)
//                    {
//                        return msApi.resolve('ciudad@get');
//                    }
//                }
                bodyClass: 'forms',
            });

        // Translation

        // Api
//        msApiProvider.register('ciudad', ['app/data/ciudad/ciudad.json']);

        // Navigation - lo tengo que agregar al método 

        // Navigation
//        msNavigationServiceProvider.saveItem('fuse.project', {
//            title: 'Casa Sebastián',
//            state: 'app.dashboards_project',
//            icon : 'icon-home',
//            weight: 1
//        });
//        
//        msNavigationServiceProvider.saveItem('fuse', {
//            title : 'SAMPLE',
//            group : true,
////            weight: 1
//        });
//        
//
//        msNavigationServiceProvider.saveItem('fuse.sample', {
//            title    : 'Sample',
//            icon     : 'icon-tile-four',
//            state    : 'app.sample',
//            /*stateParams: {
//                'param1': 'page'
//             },*/
//            translate: 'SAMPLE.SAMPLE_NAV',
//            weight   : 1
//        });
//       
//
//        msNavigationServiceProvider.saveItem('fuse.project', {
//            title: 'Project',
//            state: 'app.dashboards_project',
//            icon : 'icon-home',
//        });

        
    }
})();