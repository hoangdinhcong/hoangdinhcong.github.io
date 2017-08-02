'use strict';
app.config(function($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('!');
    // use the HTML5 History API
    // $locationProvider.html5Mode(true);

    $routeProvider
    .when("/", {
        templateUrl : "../src/skills/cv.html",
        controller: "myCtrl",
    })
    .when("/blogs", {
        templateUrl : "../src/blogs/blogs.html",
        controller: "myCtrl",
    })
    .when("/projects", {
        templateUrl : "../src/projects/projects.html",
        controller: "myCtrl",
    });

    
});