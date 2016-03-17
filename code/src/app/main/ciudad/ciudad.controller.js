(function ()
{
    'use strict';

    angular
        .module('app.ciudad')
        .controller('CiudadController', CiudadController);

    /** @ngInject */
    function CiudadController(CiudadData)
    {
        var vm = this;

        // Data
//        console.log(CiudadData);
//        vm.helloText = CiudadData.data.helloText;
        vm.employees = CiudadData.data;
        
         vm.dtOptions = {
            dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple',
            autoWidth : false,
            responsive: true
        };

        // Methods

        //////////
    }
})();
