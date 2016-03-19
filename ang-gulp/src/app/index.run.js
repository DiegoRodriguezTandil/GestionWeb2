(function() {
  'use strict';

  angular
    .module('angGulp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
