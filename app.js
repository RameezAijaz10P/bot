(function(){
    angular.module('seedApp', ['mgcrea.ngStrap','ui.router','ngAnimate']);

})();


//
//angular.module('seedApp').run(function($rootScope) {
//
//    $rootScope.safeApply = function(fn) {
//        var phase = $rootScope.$$phase;
//        if (phase === '$apply' || phase === '$digest') {
//            if (fn && (typeof(fn) === 'function')) {
//                fn();
//            }
//        } else {
//            this.$apply(fn);
//        }
//    };
//
//});
