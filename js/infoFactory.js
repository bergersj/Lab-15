var app = angular.module('myMod');

app.factory('infoFactory', function(){

  var finalWords = {};

  return {

    sendInfo: function(userOutputs){
      console.log(userOutputs);
      finalWords = userOutputs;
    },


    getInfo: function(){
      return finalWords;
    }
  }

});
