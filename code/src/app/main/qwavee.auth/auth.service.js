(function ()
{
    'use strict';

    angular
        .module('fuse')    
//        .module('app.qwavee.auth')
        .factory('authService', AuthService)
        .factory('authInterceptor', AuthInterceptor)
        .config(InterceptorConfig);

    function AuthService(api)
    {
        var login = function(user){
            api.auth.save(
                user,
                function(response)
                {
                    console.log(response);
                    vm.clientes = response;
                },
                function(error)
                {
                    console.log(error);
                    vm.error = error;
                }
            );    
        }
        
        return {
            login: login
        }

    }
    
    function AuthInterceptor($rootScope, $q, $window ){
        var request = function(config){
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }
            return config;            
        };
        var response = function(response){
            if (response.status === 401) {
                // handle the case where the user is not authenticated
            }
            return response || $q.when(response);
        }
        
        return {
            request: request,
            response: response
        }
    }
    
    function InterceptorConfig($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }       
})();