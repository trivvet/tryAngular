'use strict';

angular.module('blogList').
    component('someList', {
        templateUrl: "/templates/blog-list.html",
        controller: function($http, $location, $routeParams, $scope){
            $http.get("/json/posts.json").
                then(function successCallback(response) {
                    $scope.items = response.data;
                }, function errorCallback(response) {
                    $location.path("/405");    
                });

            $scope.title = "hello guys";
            $scope.click = 1;
            $scope.onlyTest = function(){
                console.log("is Clicked");
                $scope.title = "is clicked " + $scope.click;
                $scope.click += 1;
            }
        }
    });