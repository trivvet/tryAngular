'use strict';

angular.module('confirmClick').
    directive('confirmClick', function(){
        return {
            scope: {
                message: '@message',
                post: '=post',
            },
            restrict: "E",
            template: "<a ng-href='/blog/{{ post.id }}'>{{ post.title }}</a>",
            link: function(scope, element, attr){
                console.log('scope');
                console.log(scope.message);
                console.log(scope.post);
                console.log('element: ' + element);
                console.log('attr');
                console.log(attr.confirmClick);
            }
        }
    });