'use strict';

angular.module('blogDetail').
    component('blogDetail', {
        templateUrl: '/templates/blog-detail.html',
        controller: function($http, $location, $routeParams, $scope) {
            $http.get("/json/posts.json").
                then(function successCallback(response) {
                    var blogItems = response.data;
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
                }, function errorCallback(response) {
                    $location.path("/405");
                });
        }
    });