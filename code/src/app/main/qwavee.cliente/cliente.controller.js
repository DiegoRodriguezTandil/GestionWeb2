(function ()
{
    'use strict';

    angular
        .module('app.qwavee.cliente')
        .controller('ClienteController', ClienteController);

    /** @ngInject */
    function ClienteController(Clientes, hotkeys)
    {
        var vm = this;
        vm.volume = 3;
        
        hotkeys.add({
            combo: 'w',
            description: 'This one goes to 11',
            callback: function() {
                vm.volume += 1;
                console.log(vm.volume);
            }
        });        

        // Data
        console.log(Clientes);
        vm.helloText = vm.volume;

        // Methods

        //////////
    }
})();
