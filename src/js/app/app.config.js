'use strict';

angular.module('try').
    config(
        function(
            $locationProvider,
            $routeProvider
            ){

            $locationProvider.html5Mode({
                enabled: true
            });
            $routeProvider.
                when("/", {
                    template: "<some-list></some-list>"
                }).
                when("/about", {
                    templateUrl: "/templates/about.html"
                }).
                when("/blog/1", {
                    template: "<h1>Hi</h1>"
                }).
                when("/blog/2", {
                    template: "<some-list></some-list>"
                }).
                otherwise({
                    template: "<h1>Not Found</h1>"
                })

        }
    );
