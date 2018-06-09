/* var appstore = angular.module('route', ['ui.router']);
appstore.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    
}); */

var routes = {
    "home": homeroute,
    "about": aboutroute
}

var homeroute = {
    url: '/',
    views: {
        '@': {
            'templateUrl': './app/common/layout'
        },
        'header@home': {templateUrl: './app/common/header'},
        'menu@home': {templateUrl: './app/common/menu'},
        'leftsidebar@home': {templateUrl: './app/common/leftsidebar'},
        'body@home': {templateUrl: './app/home/body'},
        'aside@home': {templateUrl: './app/common/aside'},
        'footer@home': {
            templateUrl: './app/common/footer'
        }
    }
}
var aboutroute={
    
}
