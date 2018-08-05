'use strict';

angular.module('blogList').
    component('someList', {
        templateUrl: "/templates/blog-list.html",
        controller: function($routeParams, $scope){
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

            ]
            $scope.items = blogItems;
            $scope.title = "hello guys";
            $scope.click = 1;
            $scope.onlyTest = function(){
                console.log("is Clicked");
                $scope.title = "is clicked " + $scope.click;
                $scope.click += 1;
            }
        }
    });