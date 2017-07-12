'use strict';

var app = angular.module('myApp', [
    'ngRoute'
]);


app.controller('cvController', function ($scope, $http) {
    // $http.get('../asset/data/info.json')
    //     .then(function (response) {
    //         console.log(response);
    //     });
})
.controller('blogController', function ($scope) {
    console.log('blogController');
})
.controller('projectController', function ($scope) {
    console.log('projectController');
});

app.config(function($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider
    .when("/", {
        templateUrl : "../src/skills/cv.html",
        controller: "cvController"
    })
    .when("/blogs", {
        templateUrl : "../src/blogs/blogs.html",
        controller: "blogController"
    })
    .when("/projects", {
        templateUrl : "../src/projects/projects.html",
        controller: "projectController"
    });
});

