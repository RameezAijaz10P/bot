/**
 * Created by Rameez Aijaz on 3/11/2016.
 */
(function () {
    'use strict';

    angular.module('seedApp').config(routesConfig);
    routesConfig.$inject = [
        "$stateProvider",
        "$urlRouterProvider"
    ];
    function routesConfig($stateProvider, $urlRouterProvider) {


        $stateProvider
            .state('base_template', {
                abstract: true,
                templateUrl: "base_template/base_template.html",
                controller: "baseTemplateController",
                controllerAs: "baseTemplateController"
            }).state('base_template.partials', {
                abstract: true,
                views:{
                    header:{
                        templateUrl: "base_template/common_partials/_header.html"
                    },
                    right_side_bar:{
                        templateUrl: "base_template/common_partials/_right_side_bar.html"
                    },
                    left_side_bar:{

                        templateUrl: "base_template/common_partials/_left_side_bar.html"
                    },
                    footer:{
                        templateUrl: "base_template/common_partials/_footer.html"
                    }


                }
            }).state('base_template.partials.home', {
            url: "/home",
            templateUrl: "home/home.html",
            controller: "homeController",
            controllerAs: "homeController"

        });

        /* Add New Routes Above */
        $urlRouterProvider.otherwise('/home');

    }

})();
