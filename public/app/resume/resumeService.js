; (function () {

    'use strict';

    angular.module('app')
        .factory('ResumeService', ResumeService)

    ResumeService.$inject = ['$firebaseObject', '$firebaseArray']

    function ResumeService($firebaseObject, $firebaseArray) {
        var summary, skills, experience, education, expDescriptions, educationDescriptions, affiliations

        var service = {
            initResume,
            getEducation,
            getExperience,
            getSkills,
            getSummary,
            getDescriptions,
            geteducationDescriptions,
            getAffiliations
        };

        return service;


        ///////////////////

        function initResume(uid) {
            var ref = firebase.database().ref().child(uid);
            summary = $firebaseObject(ref.child('summary'));
            skills = $firebaseArray(ref.child('skills'));
            experience = $firebaseArray(ref.child('experience'));
            education = $firebaseArray(ref.child('education'));
            expDescriptions = $firebaseArray(ref.child('expDescriptions'));
            educationDescriptions = $firebaseArray(ref.child('educationDescriptions'));
            affiliations = $firebaseArray(ref.child('affiliations'))
        }

        function getAffiliations() {
            return affiliations;
        }

        function getDescriptions() {
            return expDescriptions
        }

        function geteducationDescriptions() {
            return educationDescriptions
        }

        function getEducation() {
            return education

        }

        function getExperience() {
            return experience
        }

        function getSkills() {
            return skills
        }

        function getSummary() {
            return summary
        }

    }


}());