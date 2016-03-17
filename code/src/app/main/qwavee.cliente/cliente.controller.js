(function ()
{
    'use strict';

    angular
        .module('app.qwavee.cliente')
        .controller('ClienteController', ClienteController);

    /** @ngInject */
    function ClienteController(Clientes)
    {
        var vm = this;

        // Data
        console.log(Clientes);
        vm.helloText = Clientes.data.nombre;

        // Methods

        //////////
    }
})();
