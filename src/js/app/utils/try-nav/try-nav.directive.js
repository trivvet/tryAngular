'use strict';

angular.module('tryNav').
    directive('tryNav', function() {
        return {
            restrict: "E",
            templateUrl: '/templates/nav-bar.html',
            link: function (scope, element, attr) {
                console.log("ok");
            }
        }
    });