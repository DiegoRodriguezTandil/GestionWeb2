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
            authService
                .login(vm.user)
                .then(
                    function(result){
                        console.log(result);
                        $location.path('/cliente');
                    },
                    function(error){
                        console.log(error);
                    }
                );
                        
        }

        //////////
    }
})();