console.log("Sanity check - Javascript is working!");

angular.module('myApp', ['ui.router'])
.controller('MainCtrl', function() {

})
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: 'templates/home',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise("/");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);