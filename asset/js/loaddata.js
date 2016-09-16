"use strict";

var loecv = angular.module('loecv', []);

loecv.controller('about',['$scope','$http',function ($scope,$http) {

    $scope.about = [];

    $http({
        method: 'GET',
        url: '/data/contact.json'
    }).then(function successCallback(response) {
        $scope.about = response.data;
    }, function errorCallback(response) {
        $scope.about = response.data;
    });
}]);
