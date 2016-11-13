/**
 * Created by Rameez Aijaz on 3/11/2016.
 */
(function () {
    'use strict';

    angular.module('bot').config(routesConfig);
    routesConfig.$inject = [
        "$stateProvider",
        "$urlRouterProvider"
    ];
    function routesConfig($stateProvider, $urlRouterProvider) {


        $stateProvider
            .state('base_template', {
                abstract: true,
                templateUrl: "base_template/base_template.html"
            }).state('base_template.partials', {
            abstract: true,
            views: {
                header: {
                    templateUrl: "base_template/common_partials/_header.html"
                },
                right_side_bar: {
                    templateUrl: "base_template/common_partials/_right_side_bar.html"
                },
                content_wrapper: {
                    templateUrl: "base_template/common_partials/_content_wrapper.html"
                },
                footer: {
                    templateUrl: "base_template/common_partials/_footer.html"
                }


            }
        }).state('base_template.partials.dashboard', {
            url: "/dashboard",
            data:{page_title:'Dashboard', sub_title:'summary'},
            views: {
                'content@base_template.partials': {
                    templateUrl: "dashboard/dashboard.html",
                    controller: "dashboardController as dashboardCtrl"
                }
            }
        }).state('login', {
            url: "/login",
            data:{page_title:'Login', sub_title:''},
            templateUrl: "login/login.html",
            controller: "loginController as loginCtrl"
        }).state('base_template.partials.stats', {
            url: "/stats",
            data:{page_title:'Statistics', sub_title:''},
            views: {
                'content@base_template.partials': {
                    templateUrl: "stats/stats.html",
                    controller: "statsController as statsCtrl"
                }

            }
        }).state('base_template.partials.daily_record', {
            url: "/daily_record",
            data:{page_title:'Daily Record', sub_title:''},
            views: {
                'content@base_template.partials': {
                    templateUrl: "daily_record/daily_record.html",
                    controller: "dailyRecordController as dailyRecordCtrl"
                }

            }
        }).state('base_template.partials.history', {
            url: "/history",
            data:{page_title:'History', sub_title:''},
            views: {
                'content@base_template.partials': {
                    templateUrl: "history/history.html",
                    controller: "historyController as historyCtrl"
                }

            }
        }).state('base_template.partials.project', {
            url: "/project",
            views: {
                'content@base_template.partials': {
                    templateUrl: "project/project.html",
                    controller: "projectController as projectCtrl"
                }

            }
        }).state('base_template.partials.projects', {
            url: "/projects_summary",
            views: {
                'content@base_template.partials': {
                    templateUrl: "projects_summary/projects_summary.html",
                    controller: "projectsSummaryController as projectSummaryCtrl"
                }

            }
        });
        /* Add New Routes Above */
        $urlRouterProvider.otherwise('/login');

    }

})();
