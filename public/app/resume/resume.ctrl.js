; (function () {
    'use strict';

    angular.module('app')
        .controller('ResumeCtrl', ResumeCtrl)

    ResumeCtrl.$inject = ['$scope', '$state', '$stateParams', 'ResumeService']

    function ResumeCtrl($scope, $state, $stateParams, ResumeService) {

        $scope.uid = $stateParams.id
        $scope.editSummary = editSummary;
        $scope.saveSummary = saveSummary;
        $scope.showSummaryForm = false;

        $scope.editSkills = editSkills;
        $scope.addSkill = addSkill;
        $scope.saveSkills = saveSkills;
        $scope.removeSkill = removeSkill;
        $scope.showSkillsForm = false;

        $scope.editExperience = editExperience;
        $scope.addExperience = addExperience;
        $scope.saveExperience = saveExperience;
        $scope.removeExperience = removeExperience;
        $scope.experienceShow = false;

        $scope.addDescription = addDescription;
        $scope.saveDescriptions = saveDescriptions;
        $scope.removeDescription = removeDescription;

        $scope.editEducation = editEducation;
        $scope.addEducation = addEducation;
        $scope.saveEducation = saveEducation;
        $scope.educationShow = false;

        $scope.addEducationDescription = addEducationDescription;
        $scope.removeEducationDescription = removeEducationDescription;
        $scope.saveEducationDescriptions = saveEducationDescriptions;

        $scope.editAffiliations = editAffiliations;
        $scope.addAffiliations = addAffiliations;
        $scope.removeAffiliation = removeAffiliation;
        $scope.saveAffiliations = saveAffiliations;
        $scope.affiliationShow = false;

        activate();


        //////////////////

        function activate() {
            ResumeService.initResume($scope.uid);
            $scope.summary = ResumeService.getSummary();
            $scope.skills = ResumeService.getSkills();
            $scope.experience = ResumeService.getExperience();
            $scope.education = ResumeService.getEducation();
            $scope.expDescriptions = ResumeService.getDescriptions()
            $scope.educationDescriptions = ResumeService.geteducationDescriptions();
            $scope.affiliations = ResumeService.getAffiliations();
        }


        /*Summary*/

        function editSummary() {
            $scope.showSummaryForm = true;
        }

        function saveSummary() {
            $scope.summary.$save();
            $scope.showSummaryForm = false;
        }

        /*Skills*/

        function editSkills() {
            $scope.showSkillsForm = true;
        }

        function addSkill() {
            $scope.skills.$add({ uid: $scope.uid, skill: '' })
        }
        
        function removeSkill(skill) {
            $scope.skills.$remove(skill);
        }

        function saveSkills() {
            $scope.skills.forEach(function (skill) {
                $scope.skills.$save(skill);
            })
            $scope.showSkillsForm = false;
        }

        /*Experience*/

        function editExperience() {
            $scope.experienceShow = true;
        }

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
            })
            $scope.experienceShow = false;
        }

        /*Experience Descriptions*/
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

        /*Education*/

        function editEducation() {
            $scope.educationShow = true;
        }

        function addEducation() {
            $scope.education.$add({ title: '', location1: '', organization: '', startYear: '', endYear: '' });
        }
        function saveEducation() {
            $scope.education.forEach(function (school) {
                $scope.education.$save(school);
            });
            $scope.educationShow = false;
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

        /*Affiliations*/

        function editAffiliations() {
            $scope.affiliationShow = true;
        }

        function addAffiliations() {
            $scope.affiliations.$add({ uid: $scope.uid, item: '' })
        }

        function saveAffiliations() {
            $scope.affiliations.forEach(function (topic) {
                $scope.affiliations.$save(topic)
            });
            $scope.affiliationShow = false;
        }

        function removeAffiliation(topic) {
            $scope.affiliations.$remove(topic)
        }
    }
}());