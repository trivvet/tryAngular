'use strict';

angular.module('blogList').
    component('someList', {
        templateUrl: "/templates/blog-list.html",
        controller: function($scope){
            $scope.title = "hello guys";
            $scope.click = 1;
            $scope.onlyTest = function(){
                console.log("is Clicked");
                $scope.title = "is clicked " + $scope.click;
                $scope.click += 1;
            }
        }
    });