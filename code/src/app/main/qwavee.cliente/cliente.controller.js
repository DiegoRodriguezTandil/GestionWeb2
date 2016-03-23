(function ()
{
    'use strict';

    angular
        .module('app.qwavee.cliente')
        .controller('ClienteController', ClienteController)
        .factory('ClienteService', ClienteServiceFn);

    /** @ngInject */
    function ClienteController(hotkeys, ClienteService)
    {
        var vm = this;
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
        vm.clientes = ClienteService.getClientes();
        // Methods

        //////////
    }
    
    
    function ClienteServiceFn($resource){
        
        var dataFactory = { } ;
        
        dataFactory.getClientes = function(){
            return $resource(
                    "http://localhost:9000/api/v1/customers/",
                    {},
                    {
                        'get': {
                            method:'GET', 
                            isArray: true
                        }
                    })
                .get();
        }
        
        return dataFactory;
        
    }
    
})();
