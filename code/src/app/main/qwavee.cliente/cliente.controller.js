(function ()
{
    'use strict';

    angular
        .module('app.qwavee.cliente')
        .controller('ClienteController', ClienteController)
        .factory('ClienteService', ClienteServiceFn);

    /** @ngInject */
    function ClienteController(hotkeys, api)
    {
        var vm = this;
        
        vm.error = false;
        
        vm.clientes = [];
//        vm.volume = 3;
//        
//        hotkeys.add({
//            combo: 'w',
//            description: 'This one goes to 11',
//            callback: function() {
//                vm.volume += 1;
//                console.log(vm.volume);
//            }
//        });        

        // Data
        api.clientes.get({},
            function(response)
            {
                vm.clientes = response;
            },
            function(error)
            {
                vm.error = error;
            }
        );
        // Methods

    }
        
})();
