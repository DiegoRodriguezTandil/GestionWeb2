(function ()
{
    'use strict';

    angular
        .module('app.qwavee.facturacion', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.facturacion', {
            url      : '/facturacion',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/qwavee.facturacion/facturacion.html',
                    controller : 'FacturacionController as vm'
                }
            },
//            resolve  : {
//                Clientes: function (msApi)
//                {
//                    return msApi.resolve('cliente@get');
//                }
//            },
//            bodyClass: 'mail'
        });

//        // Translation
//        $translatePartialLoaderProvider.addPart('app/main/qwavee.cliente');
//
//        // Api
//        msApiProvider.register('cliente', ['app/data/cliente/cliente.json']);

        // Navigation
//        msNavigationServiceProvider.saveItem('ventas', {
//            title : 'VENTAS',
//            group : true,
//            weight: 1
//        });
//
//        msNavigationServiceProvider.saveItem('ventas.nuevo', {
//            title : 'Nuevos',
//            icon  : 'icon-account-multiple',            
//            weight: 1
//        });
//
//        msNavigationServiceProvider.saveItem('ventas.nuevo.cliente', {
//            title : 'Clientes',
//            icon  : 'icon-account-multiple',
//            state : 'app.cliente',
//            weight: 1
//        });
    }
})();