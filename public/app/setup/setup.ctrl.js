; (function () {
    'use strict';

    angular.module('app')
        .controller('SetupCtrl', SetupCtrl)

    SetupCtrl.$inject = ['$scope', '$state', '$stateParams', 'ResumeService', '$timeout', 'SetupService']


    function SetupCtrl($scope, $state, $stateParams, ResumeService, $timeout, SetupService) {
        $scope.uid = $stateParams.id;
        $scope.steps = SetupService.getSteps();

        $scope.nextStep = nextStep;
        $scope.prevStep = prevStep;

        activate();

        ///////////////////////

        function activate() {
            ResumeService.initResume($scope.uid);

            setCurrStep();
        }

        /*Navigation*/

        function setCurrStep() {
            $scope.currStep = getCurrStep();
        }

        function getCurrStep() {
            return $scope.steps.filter(function (step) {
                return $state.$current.name === step.state
            })[0]
        }

        function nextStep() {
            $state.go($scope.currStep.next)
                .then(function (state) {
                    setCurrStep();
                }).catch(function (err) {
                    console.log(err)
                });
        }

        function prevStep() {
            $state.go($scope.currStep.prev)
                .then(function (state) {
                    setCurrStep();
                }).catch(function (err) {
                    console.log(err);
                });
        }
    }

}());