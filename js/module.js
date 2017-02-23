var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/input', {
      controller: 'inputController',
      templateUrl: 'js/views/input.html'
    })
    .when('/output', {
      controller: 'outputController',
      templateUrl: 'js/views/output.html'
    })
    .otherwise({redirectTo:'/'});
    $locationProvider.hashPrefix('');
});
