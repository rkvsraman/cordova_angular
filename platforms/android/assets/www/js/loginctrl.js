 'use strict';

cordovaApp.controller('LoginCtrl', 

    function LoginCtrl($scope, $location, PhoneGap) {

        $scope.showVals = function() {

            alert($scope.email + " " + $scope.password);

        };
    }
);
