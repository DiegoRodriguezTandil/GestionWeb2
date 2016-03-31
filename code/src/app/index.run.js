(function ()
{
    'use strict';

    angular
        .module('fuse')
        .run(runBlock)
        .run(loginRedirect);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state)
    {
        // Activate loading indicator
        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function ()
        {
            $rootScope.loadingProgress = true;
        });

        // De-activate loading indicator
        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function ()
        {
            $timeout(function ()
            {
                $rootScope.loadingProgress = false;
            });
        });

        // Store state in the root scope for easy access
        $rootScope.state = $state;

        // Cleanup
        $rootScope.$on('$destroy', function ()
        {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        });
    }
    
    function loginRedirect($rootScope, $state, $location, userService, $timeout)
    {
        $rootScope.$on("$routeChangeSuccess", function() {
    console.log('$routeChangeSuccess');
  });

  $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
          console.log('$routeChangeError');

  });
        $rootScope.$on( "$stateChangeStart", function(event, toState, toParams, fromState, fromParams, options) {
            if (!userService.isLogged()) {
                var filename = toState.url.substring(toState.url.lastIndexOf('/')+1);
                if ( filename === "login") {
                } else {
                    console.log('Redirigido a Login');
                    console.log(toState);
                    event.preventDefault();
                    $state.transitionTo('app.pages_auth_login');
//$timeout(function(){ 
//                       $location.path("/pages/auth/login");
//
//},0);                    
                }
            }
        });
    }

})();