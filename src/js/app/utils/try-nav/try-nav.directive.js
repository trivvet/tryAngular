'use strict';

angular.module('tryNav').
    directive('tryNav', function(Post) {
        return {
            restrict: "E",
            templateUrl: '/templates/nav-bar.html',
            link: function (scope, element, attr) {
                var getElements = []
                Post.query(function(data) {
                    scope.getElements = data;
                });
                // element.find("input").bind("input", function(event) {
                //     var answers = []
                //     getElements.forEach(function(findItem) {
                //         if (findItem.title.search(scope.blogFilter) > 0) {
                //             answers.push(findItem);
                //         }
                //     });
                //     scope.answers = answers;
                // });
            }
        }
    });