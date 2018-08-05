'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($location, $routeParams, $scope) {
            console.log("blog detail");
            var blogItems = [
                {
                    id: 1,
                    title: "First Blog",
                    description: "It's first blog in this site",
                    publishedDate: "20-12-2016"
                },
                {
                    id: 2,
                    title: "Second Blog",
                    description: "It's about some people",
                    publishedDate: "22-12-2016"
                },
                {
                    id: 3,
                    title: "Third Blog",
                    description: "Only for testing",
                    publishedDate: "25-12-2016"
                },
                {
                    id: 4,
                    title: "Fourth Blog",
                    description: "Clear information",
                    publishedDate: "01-01-2017"
                }

            ];
            $scope.notFound = true;
            blogItems.forEach(function(post) {
                if (post.id == $routeParams.id) {
                    $scope.post = post;
                    $scope.notFound = false;
                }
            });

            if ($scope.notFound) {
                $location.path("/404");
            }
        }
    });