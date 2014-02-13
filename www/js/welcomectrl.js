 'use strict';

cordovaApp.controller('WelcomeCtrl', 

    function WelcomeCtrl($scope, $location, PhoneGap) {
        $scope.isAppLoaded = false;
        PhoneGap.ready().then(function() {
            alert("App loaded");
            $scope.isAppLoaded = true;
        });

        $scope.gotoLogin = function() {

            $location.url('/login');
        };
    }
);
