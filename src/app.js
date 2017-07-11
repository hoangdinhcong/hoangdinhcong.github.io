var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get('../asset/data/info.json')
        .then(function (response) {
            console.log(response);
        });
});