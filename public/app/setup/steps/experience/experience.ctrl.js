(function () {
    'use strict';

    angular
        .module('app')
        .controller('ExperienceCtrl', ExperienceCtrl);

    ExperienceCtrl.$inject = ['$scope', '$stateParams', 'ResumeService', '$timeout'];

    function ExperienceCtrl($scope, $stateParams, ResumeService, $timeout) {
        $scope.uid = $stateParams.id;
        $scope.showMessage = false;

        $scope.addExperience = addExperience;
        $scope.saveExperience = saveExperience;
        $scope.removeExperience = removeExperience;

        $scope.addDescription = addDescription;
        $scope.removeDescription = removeDescription;
        $scope.saveDescriptions = saveDescriptions;

        activate();

        /////////////////////

        function activate() {
            ResumeService.initResume($stateParams.id);
            $scope.experience = ResumeService.getExperience();
        }

        function saveMessage() {
            $scope.message = 'Saving...';
            $scope.showMessage = true;
            $timeout(function () {
                $scope.showMessage = false;
            }, 2000);
        }

        /*Experience*/

        function addExperience() {
            $scope.experience.$add({ title: '', organization: '', startYear: '', endYear: '' });
        }

        function removeExperience(exp) {
            $scope.experience.$remove(exp)
            $scope.expDescriptions.forEach(function (description) {
                if (exp.$id == description.experienceId) {
                    $scope.expDescriptions.$remove(description)
                }
            })
        }

        function saveExperience() {
            $scope.experience.forEach(function (item) {
                $scope.experience.$save(item);
            });
            saveDescriptions();
            saveMessage();
        }

        /*Descriptions*/

        function addDescription(exp) {
            $scope.expDescriptions.$add({ uid: $scope.uid, experienceId: exp.$id, item: '' })
        }

        function removeDescription(description) {
            $scope.expDescriptions.$remove(description)
        }

        function saveDescriptions() {
            $scope.expDescriptions.forEach(function (description) {
                $scope.expDescriptions.$save(description);
            });
        }


    }
})();