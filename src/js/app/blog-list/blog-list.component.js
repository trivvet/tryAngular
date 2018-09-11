'use strict';

angular.module('blogList').
    component('someList', {
        templateUrl: "/templates/blog-list.html",
        controller: function(Post, $location, $routeParams, $rootScope, $scope){
            $scope.ordering = '-publishedDate';
            $scope.goToItem = function(item) {
                $rootScope.$apply(function() {
                    $location.path('/blog/' + item.id);        
                });
            }

            $scope.changeColumns = function(number) {
                if (angular.isNumber(number)) {
                    var colNumber = number;
                } else {
                    var colNumber = 3;
                }
                setupColumns($scope.items, colNumber);
            }

            function setupColumns(data, number) {
                $scope.cssClass = 'col-sm-' + 12/number;
                $scope.items = data;
                $scope.new_items = chunkArrayInGroups(data, number); 
            }

            Post.query(function(data){
                setupColumns(data, 3)
            });

            function chunkArrayInGroups(array, unit) {
                var results = [],
                length = Math.ceil(array.length / unit);
                for (var i = 0; i < length; i++) {
                    results.push(array.slice(i * unit, (i + 1) * unit))
                }
                return results
            }

            $scope.loadingQuery = false;
            $scope.$watch(function(){
                if($scope.blogFilter2) {
                    $scope.loadingQuery = true;
                    $scope.cssClass = 'col-sm-12';
                } else if($scope.loadingQuery) {
                    setupColumns($scope.items, 3);
                    $scope.loadingQuery = false;
                }
            })

            $scope.title = "hello guys";
            $scope.click = 1;
            $scope.onlyTest = function(){
                console.log("is Clicked");
                $scope.title = "is clicked " + $scope.click;
                $scope.click += 1;
            }
        }
    });