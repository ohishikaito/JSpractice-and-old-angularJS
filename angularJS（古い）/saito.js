// var app = angular.module("myApp", []);

// // app.controller("testAppController1", function () {
// //   this.message = "First App 1";
// // });

// app.controller("testAppController1", [
//   "$scope",
//   function ($scope) {
//     $scope.message = "First App 1";
//   },
// ]);
angular.module("myApp", []).controller("AppController", function ($scope) {
  $scope.username = "";
  $scope.users = [];
  $scope.submit = function () {
    $scope.users.push({
      username: $scope.username,
      url: "https://twitter.com/" + $scope.username,
    });
    $scope.username = "";
  };
});
