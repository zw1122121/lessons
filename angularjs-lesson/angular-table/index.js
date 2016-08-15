var myApp = angular.module("myApp",['ui.router','ngAnimate','ui.bootstrap',"smart-table", "bsTable"]);
myApp.controller("bodyController", function ($scope,$log) {
    $scope.selectedDevice = null;
    $scope.setDevice = function (device) {
        $log.info(device);
        $scope.selectedDevice = device;
    }
});