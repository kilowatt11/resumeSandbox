(function () {
    'use strict';

    angular
        .module('app')
        .controller('SummaryCtrl', SummaryCtrl);

    SummaryCtrl.$inject = ['$scope', '$stateParams', 'ResumeService', '$timeout'];

    function SummaryCtrl($scope, $stateParams, ResumeService, $timeout) {
        $scope.uid = $stateParams.id;
        $scope.showMessage = false;

        $scope.saveSummary = saveSummary;

        activate();

        /////////////////////

        function activate() {
            ResumeService.initResume($stateParams.id);
            $scope.summary = ResumeService.getSummary();
        }

        function saveMessage() {
            $scope.message = 'Saving...';
            $scope.showMessage = true;
            $timeout(function () {
                $scope.showMessage = false;
            }, 2000);
        }

        /*Summary*/
        function saveSummary() {
            $scope.summary.$save().then(function (data) {
                if (data.key == $scope.summary.$id) {
                    console.log('You have successfully saved')
                    saveMessage();
                }
            }, function (error) {
                console.log("Error:", error);
            });
        }
    }
})();