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
                    content_wrapper:{
                        templateUrl: "base_template/common_partials/_content_wrapper.html"
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
            views:{
                'content@base_template.partials':{
                    templateUrl: "home/home.html",
                    controller: "homeController",
                    controllerAs: "homeController"
                }
            }
        }).state('base_template.partials.login', {
            url: "/login",
            views:{
                'content@base_template.partials':{
                    templateUrl: "home/login.html",
                    controller: "loginController",
                    controllerAs: "loginController"
                }

            }
        }).state('base_template.partials.stats', {
            url: "/stats",
            views:{
                'content@base_template.partials':{
                    templateUrl: "home/stats.html",
                    controller: "statsController",
                    controllerAs: "statsController"
                }

            }
        }).state('base_template.partials.day', {
            url: "/day",
            views:{
                'content@base_template.partials':{
                    templateUrl: "home/day.html",
                    controller: "dayController",
                    controllerAs: "dayController"
                }

            }
        }).state('base_template.partials.history', {
            url: "/history",
            views:{
                'content@base_template.partials':{
                    templateUrl: "home/history.html",
                    controller: "historyController",
                    controllerAs: "historyController"
                }

            }
        });
    }

})();
