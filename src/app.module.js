'use strict';

var app = angular.module('myApp', [
    'ngRoute',
    'ngSanitize'
]);

app.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);

app.controller('myCtrl', function ($scope, $http, $location) {

    $scope.info = {};

    $http.get('../asset/data/info.json')
        .then(function (response) {
            $scope.info = response.data;
        });

    $scope.isActive = function (route) {
        return route == $location.path();
    }
});