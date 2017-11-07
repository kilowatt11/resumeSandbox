(function () {
    'use strict';

    angular
        .module('app')
        .controller('SkillsCtrl', SkillsCtrl);

    SkillsCtrl.$inject = ['$scope', '$stateParams', 'ResumeService', '$timeout'];

    function SkillsCtrl($scope, $stateParams, ResumeService, $timeout) {

        $scope.uid = $stateParams.id;
        $scope.showMessage = false;

        $scope.saveSkills = saveSkills;
        $scope.addSkills = addSkills;
        $scope.removeSkill = removeSkill;

        activate();

        /////////////////////

        function activate() {
            ResumeService.initResume($stateParams.id);
            $scope.skills = ResumeService.getSkills();
        }

        function saveMessage() {
            $scope.message = 'Saving...';
            $scope.showMessage = true;
            $timeout(function () {
                $scope.showMessage = false;
            }, 2000);

        }

         /*Skills*/
         function addSkills() {
            $scope.skills.$add({ uid: $scope.uid, skill: '' });
        }

        function removeSkill(skill) {
            $scope.skills.$remove(skill);
        }

        function saveSkills() {
            $scope.skills.forEach(function (skill) {
                $scope.skills.$save(skill);
            });
            saveMessage();
        }
    }
})();