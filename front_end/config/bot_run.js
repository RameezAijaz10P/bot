/**
 * Created by e897x724 on 11/12/2016.
 */
(function () {
    'use strict';
    angular.module('bot').run(botRun);
    botRun.$inject = ['$rootScope', '$state'];
    function botRun($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function (evt, to, params) {
            $rootScope.$state = $state;
        });
    }
})();