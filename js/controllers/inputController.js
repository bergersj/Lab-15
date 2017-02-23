var app = angular.module('myMod');

app.controller("inputController", function($scope, infoFactory, $location){

//getWords function from input.html
  $scope.getWords = function(user){
    console.log(user);

    infoFactory.sendInfo(user);

    $location.path('/output');
  };

});
