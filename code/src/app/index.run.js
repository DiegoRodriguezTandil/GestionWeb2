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
    
    function loginRedirect($rootScope, $location, userService)
    {
        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
            debugger;
            if (!userService.isLogged()) {
                var filename = next.substring(next.lastIndexOf('/')+1);
                if ( filename === "login") {
                } else {
                    event.preventDefault();
                    $location.path("/pages/auth/login");
                }
            }
        });
    }

})();