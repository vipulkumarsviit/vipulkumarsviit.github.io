var appstore = angular.module('store', ['ui.router']);

appstore.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $stateProvider.state('home',routes.home);
});

appstore.controller("myctrl", function ($scope) {
  $scope.title = 'Store App';
});
