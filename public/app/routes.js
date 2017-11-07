; (function () {

    'use strict';

    angular.module('app')
        .config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/register');

        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: "app/authentication/register.tmp.html",
                controller: "RegisterCtrl"
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/authentication/login.tmp.html',
                controller: 'LoginCtrl'
            })
            .state('setup', {
                url: '/setup/{id}',
                templateUrl: 'app/setup/setup.tmp.html',
                controller: 'SetupCtrl'
            })
            .state('setup.summary', {
                url: '/summary',
                templateUrl: 'app/setup/steps/summary/summary.tmp.html',
                controller: 'SummaryCtrl'
            })
            .state('setup.skills', {
                url: '/skills',
                templateUrl: 'app/setup/steps/skills/skills.tmp.html',
                controller: 'SkillsCtrl'
            })
            .state('setup.experience', {
                url: '/experience',
                templateUrl: 'app/setup/steps/experience/experience.tmp.html',
                controller: 'ExperienceCtrl'
            })
            .state('setup.education', {
                url: '/education',
                templateUrl: 'app/setup/steps/education/education.tmp.html',
                controller: 'EducationCtrl'
            })
            .state('setup.affiliations', {
                url: '/affiliations',
                templateUrl: 'app/setup/steps/affiliations/affiliations.tmp.html',
                controller: 'AffiliationsCtrl'
            })
            .state('resume', {
                url: '/resume/{id}',
                templateUrl: 'app/resume/resumeViews/resume.tmp.html',
                controller: 'ResumeCtrl',
            })
            .state('resume.skills', {
                url: '/skills',
                templateUrl: 'app/resume/resumeViews/resume.skills.tmp.html',
                controller: 'ResumeCtrl'
            })
            .state('resume.experience', {
                url: '/experience',
                templateUrl: 'app/resume/resumeViews/resume.experience.tmp.html',
                controller: 'ResumeCtrl'
            })
            .state('resume.education', {
                url: '/education',
                templateUrl: 'app/resume/resumeViews/resume.education.tmp.html',
                controller: 'ResumeCtrl'
            })
            .state('resume.affiliations', {
                url: '/affiliations',
                templateUrl: 'app/resume/resumeViews/resume.affiliations.tmp.html',
                controller: 'ResumeCtrl'
            })
    }



}());