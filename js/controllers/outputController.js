var app = angular.module('myMod');

app.controller("outputController", function($scope, infoFactory){

  $scope.user = infoFactory.getInfo();

});
