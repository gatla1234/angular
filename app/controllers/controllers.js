myApp.controller('myCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "http://localhost:8080/springtest/json";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

}]);




/*
var MyFirstController = function($scope, $http, userData, userGravatar, gitHubUserLookup) {
  $scope.ManyHellos = ['Hello', 'Hola', 'Bonjour', 'Guten Tag', 'Ciao', 'Namaste', 'Yiasou'];

  $scope.data = userData.user;

  $scope.getGravatar = function(email) {
    return userGravatar.getGravatar(email);
  };

  $scope.getGitHubUser = function(username) {
    console.log("username: " + username);
    gitHubUserLookup.lookupUser(username).then(onLookupComplete, onError);
  };

  var onLookupComplete = function(response) {
    $scope.user = response.data;
    $scope.status = response.status;

  };

  var onError = function(reason) {
    $scope.error = "Ooops, something went wrong..";
  };
};

app.controller("MyFirstController", MyFirstController);*/
