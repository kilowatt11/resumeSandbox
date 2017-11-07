; (function () {

    'use strict';

    angular
        .module('app')
        .factory('SetupService', SetupService);

    SetupService.$inject = [];

    function SetupService() {
        var service = { getSteps: getSteps };

        return service;

        ///////////////////////


        function getSteps(){
            return [
                {
                    state: 'setup.summary',
                    next: 'setup.skills',
                    prev: null
                },
                {
                    state: 'setup.skills',
                    next: 'setup.experience',
                    prev: 'setup.summary'
                },
                {
                    state: 'setup.experience',
                    next: 'setup.education',
                    prev: 'setup.skills'
                },
                {
                    state: 'setup.education',
                    next: 'setup.affiliations',
                    prev: 'setup.experience'
                },
                {
                    state: 'setup.affiliations',
                    next: null,
                    prev: 'setup.education'
                }
            ]
        }
    }



}());