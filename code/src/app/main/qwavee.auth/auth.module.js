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

    function AuthService(api, userService, $q)
    {
        var login = function(user){
            var deferred = $q.defer();
            api.auth.save(
                user,
                function(response)
                {
                    console.log(response);
                    userService.saveToken(response.token);
                    deferred.resolve(response);
                    //tratar errores de login
                },
                function(error)
                {
                    deferred.reject(error);
                }
            );    
            return deferred.promise;
        }

        var logout = function(){
            userService.removeToken();
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