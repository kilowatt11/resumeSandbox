(function () {
    'use strict';

    angular
        .module('app')
        .controller('EducationCtrl', EducationCtrl);

    EducationCtrl.$inject = ['$scope', '$stateParams', 'ResumeService', '$timeout'];

    function EducationCtrl($scope, $stateParams, ResumeService, $timeout) {
        $scope.uid = $stateParams.id;
        $scope.showMessage = false;

        $scope.addEducation = addEducation;
        $scope.removeEducation = removeEducation;
        $scope.saveEducation = saveEducation;

        $scope.addEducationDescription = addEducationDescription;
        $scope.removeEducationDescription = removeEducationDescription;
        $scope.saveEducationDescriptions = saveEducationDescriptions;

        activate();

        /////////////////////

        function activate() {
            ResumeService.initResume($stateParams.id);
            $scope.education = ResumeService.getEducation();

        }

        function saveMessage() {
            $scope.message = 'Saving...';
            $scope.showMessage = true;
            $timeout(function () {
                $scope.showMessage = false;
            }, 2000);
        }

        /*Education*/

        function addEducation() {
            $scope.education.$add({ title: '', location1: '', organization: '', startYear: '', endYear: '' });
        }

        function removeEducation() {
            $scope.education.$remove(school)
        }

        function saveEducation() {
            $scope.education.forEach(function (school) {
                $scope.education.$save(school);
            });
            saveMessage();
            saveEducationDescriptions();
        }

        /*Education Descriptions*/

        function addEducationDescription(school) {
            $scope.educationDescriptions.$add({ uid: $scope.uid, schoolId: school.$id, item: '' })
        }

        function removeEducationDescription(description) {
            $scope.educationDescriptions.$remove(description)
        }

        function saveEducationDescriptions() {
            $scope.educationDescriptions.forEach(function (description) {
                $scope.educationDescriptions.$save(description);
            });
        }
    }
})();