'use strict';
var cordovaApp = angular.module('cordovaApp', ['ngRoute','PhoneGap']);

cordovaApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/welcome.html',
            controller: 'WelcomeCtrl'
        });
        $routeProvider.
        when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        });
        $routeProvider.
        otherwise({
            redirectTo: '/'
        });
    }

]);
