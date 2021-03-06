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

            // Fuse Elements
            'app.dashboards',
            
            // Apps - Qwavee Modules & Services
            'app.qwavee.auth',
            
            'app.qwavee.ventas',
            
//            'app.qwavee.login',  
            'app.pages.auth.login',

            'app.ciudad',
            
        ]);
})();