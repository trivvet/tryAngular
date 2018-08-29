'use strict';

angular.module('blogList').
    component('someList', {
        templateUrl: "/templates/blog-list.html",
        controller: function(Post, $location, $routeParams, $rootScope, $scope){
            $scope.goToItem = function(item) {
                $rootScope.$apply(function() {
                    $location.path('/blog/' + item.id);        
                });
            }
            Post.query(function(data){
                $scope.items = data;
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