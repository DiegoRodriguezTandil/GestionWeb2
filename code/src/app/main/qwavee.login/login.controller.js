(function ()
{
    'use strict';

    angular
        .module('app.qwavee.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($mdDialog, msNavigationService)
    {
        var vm = this;

        // Data
        vm.loginForm = {};
        vm.formLoginData = {
            email: '',
            password: ''
          };
 

        // Methods
        vm.sendForm = sendForm;
        vm.login = login;
        
        function login(){
            alert('Datos Usuario:'+ vm.loginForm.usuario + ' pass: '+vm.loginForm.password);
            
            msNavigationService.saveItem('fuse.project', {
                title: 'Casa Sebastián',
                state: 'app.dashboards_project',
                icon : 'icon-home',
                weight: 1
            });

            msNavigationService.saveItem('fuse', {
                title : 'compañía',
                group : true,
    //            weight: 1
            });
        


            msNavigationService.saveItem('fuse.project', {
                title: 'Project',
                state: 'app.dashboards_project',
                icon : 'icon-home',
            });
            
        msNavigationService.saveItem('ventas', {
            title : 'VENTAS',
            group : true,
            weight: 1
        });

        msNavigationService.saveItem('ventas.nuevo', {
            title : 'Nuevos',
            icon  : 'icon-account-multiple',            
            weight: 1
        });

        msNavigationService.saveItem('ventas.nuevo.cliente', {
            title : 'Clientes',
            state : 'app.cliente',
            weight: 1
        });
        msNavigationService.saveItem('ventas.nuevo.facturacion', {
            title : 'Facturación',
            state : 'app.facturacion',
            weight: 1
        });

//            msNavigationService.saveItem('apps.dashboards', {
//                title : 'Dashboards',
//                icon  : 'icon-tile-four',
//                class : 'navigation-dashboards',
//                hidden: function ()
//                {
//                    return AuthService.isAdmin; // must be a boolean value
//                },
//                weight: 1
//            });
        }
        
        /**
         * Send form
         */
        function sendForm(ev)
        {
            // You can do an API call here to send the form to your server

            // Show the sent data.. you can delete this safely.
            alert('pasa');
            $mdDialog.show({
                controller         : function ($scope, $mdDialog, formLoginData)
                {
                    $scope.formLoginData = formLoginData;
                    $scope.closeDialog = function ()
                    {
                        $mdDialog.hide();
                    }
                },
                template           : '<md-dialog>' +
                '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
                '  <md-dialog-actions>' +
                '    <md-button ng-click="closeDialog()" class="md-primary">' +
                '      Close' +
                '    </md-button>' +
                '  </md-dialog-actions>' +
                '</md-dialog>',
                parent             : angular.element('body'),
                targetEvent        : ev,
                locals             : {
                    formLoginData: vm.loginForm
                },
                clickOutsideToClose: true
            });

            // Clear the form data
            vm.loginForm = {};
        }

    }
})();
