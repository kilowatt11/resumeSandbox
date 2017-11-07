; (function () {

    'use strict';

    angular
        .module('app')
        .controller('AffiliationsCtrl', AffiliationsCtrl)

    AffiliationsCtrl.$inject = ['$scope', '$stateParams', 'ResumeService', '$timeout'];

    function AffiliationsCtrl($scope, $stateParams, ResumeService, $timeout) {
        $scope.uid = $stateParams.id;
        $scope.showMessage = false;

        $scope.addAffiliations = addAffiliations;
        $scope.saveAffiliations = saveAffiliations;
        $scope.removeAffiliation = removeAffiliation;

        activate();

        /////////////////////

        function activate() {
            ResumeService.initResume($scope.uid);
            $scope.affiliations = ResumeService.getAffiliations();
        }

        function saveMessage() {
            $scope.message = 'Saving...';
            $scope.showMessage = true;
            $timeout(function () {
                $scope.showMessage = false;
            }, 2000);
        }

        /*Affiliations*/

        function addAffiliations() {
            $scope.affiliations.$add({ uid: $scope.uid, item: '' })
        }

        function saveAffiliations() {
            $scope.affiliations.forEach(function (topic) {
                $scope.affiliations.$save(topic)
            });
            saveMessage();
        }

        function removeAffiliation(topic) {
            $scope.affiliations.$remove(topic)
        }
    }
}());