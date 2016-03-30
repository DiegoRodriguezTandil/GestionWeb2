(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(authService, $location)
    {
        // Data
        var vm = this;
        
        vm.user = { 
            username: null,
            password: null
        };

        // Methods
        vm.loginAction = function(){
            console.log(vm.user);
            authService.login(vm.user);
        }

        //////////
    }
})();