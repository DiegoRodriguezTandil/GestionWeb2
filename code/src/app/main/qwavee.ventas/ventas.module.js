(function ()
{
    'use strict';

    angular
        .module('app.qwavee.ventas', [
            'app.qwavee.cliente',
            'app.qwavee.facturacion'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('ventas', {
            title : 'VENTAS',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('ventas.nuevo', {
            title : 'Nuevos',
            icon  : 'icon-account-multiple',            
            weight: 1
        });

        msNavigationServiceProvider.saveItem('ventas.nuevo.cliente', {
            title : 'Clientes',
            state : 'app.cliente',
            weight: 1
        });
        msNavigationServiceProvider.saveItem('ventas.nuevo.facturacion', {
            title : 'Facturación',
            state : 'app.facturacion',
            weight: 1
        });
    }
})();