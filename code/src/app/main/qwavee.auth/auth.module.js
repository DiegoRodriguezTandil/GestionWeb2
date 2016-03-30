(function ()
{
    'use strict';

    angular
        .module('app.qwavee.auth', [])
        .factory('userService', UserService)
        .factory('authService', AuthService)
        .factory('authInterceptor', AuthInterceptor)
        .config(InterceptorConfig);

    function UserService($rootScope){
        
        var saveToken = function(token){
            $rootScope.user = {
                token: token
            };
        }

        var getToken = function(){
            if(angular.isDefined($rootScope.user) && angular.isDefined($rootScope.user.token)){
                return $rootScope.user.token;
            }
            return null;
        }
        
        var removeToken = function(){
            this.saveToken(null);
        }
        
        var isLogged = function(){
            return this.getToken() !== null;
        }

        return {
            saveToken: saveToken,
            getToken: getToken,
            removeToken: removeToken,
            isLogged: isLogged
        };
    }

    function AuthService(api, userService, $location)
    {
        var login = function(user){
            return api.auth.save(
                user,
                function(response)
                {
                    userService.saveToken(response.token);
                    $location.path('/cliente');
                },
                function(error)
                {
                    console.log(error);
                    vm.error = error;
                }
            );    
        }

        var logout = function(){
            userService.removeToken();
            $location.path('/');
        }
                
        return {
            login: login,
            logout: logout,
        }

    }
    
    function AuthInterceptor($q, userService){
        var request = function(config){
            config.headers = config.headers || {};
            if (userService.isLogged()) {
                config.headers.Authorization = 'Bearer ' + userService.getToken();
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