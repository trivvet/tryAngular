'use strict';

angular.module('blogList').
    component('someList', {
        template: "<div><h1 class='new'>{{ title }}</h1><button ng-click='onlyTest()'>Click me!</button></div>",
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