(function ()
{
    'use strict';

    angular
        .module('app.sample', [
            'app.dashboards.project',
            'app.dashboards.server',
            'app.dashboards.analytics'
        ])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.sample', {
                url    : '/sample',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/sample/sample.html',
                        controller : 'SampleController as vm'
                    }
                },
                resolve: {
                    SampleData: function (msApi)
                    {
                        return msApi.resolve('sample@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/sample');

        // Api
        msApiProvider.register('sample', ['app/data/sample/sample.json']);

//        // Navigation
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