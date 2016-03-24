(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',
            
            // Libs 
            'cfp.hotkeys',
            
            // Functionality
            'app.sample',

            // Apps
            'app.qwavee.ventas',

            'app.ciudad',
            
        ]);
})();