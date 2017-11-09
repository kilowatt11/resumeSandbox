(function () {
    'use strict';

    angular
        .module('app')
        .controller('SummaryCtrl', SummaryCtrl);

    SummaryCtrl.$inject = ['$scope', '$stateParams', 'ResumeService', '$timeout'];

    function SummaryCtrl($scope, $stateParams, ResumeService, $timeout) {
        $scope.uid = $stateParams.id;
        $scope.saveSummary = saveSummary;

        activate();

        /////////////////////

        function activate() {
            ResumeService.initResume($scope.uid);
            $scope.summary = ResumeService.getSummary();
        }

        /*Summary*/
        function saveSummary() {
            $scope.summary.$save().then(function (data) {
                if (data.key == $scope.summary.$id) {
                    console.log('You have successfully saved')
                    $scope.saveMessage();
                }
            }, function (error) {
                console.log("Error:", error);
            });
        }
    }
})();