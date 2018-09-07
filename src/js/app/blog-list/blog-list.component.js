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
                $scope.new_items = chunkArrayInGroups(data, 3);
            });

            function chunkArrayInGroups(array, unit) {
                var results = [],
                length = Math.ceil(array.length / unit);
                for (var i = 0; i < length; i++) {
                    results.push(array.slice(i * unit, (i + 1) * unit))
                }
                return results
            }

            $scope.title = "hello guys";
            $scope.click = 1;
            $scope.onlyTest = function(){
                console.log("is Clicked");
                $scope.title = "is clicked " + $scope.click;
                $scope.click += 1;
            }
        }
    });