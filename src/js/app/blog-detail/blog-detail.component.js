'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($routeParams, $scope) {
            console.log("blog detail");
            var blogTitle = "Blog " + $routeParams.id;
            var blogInfo = {
                title: blogTitle,
                description: "Here must be an info about post"
            }

            $scope.post = blogInfo;
        }
    });