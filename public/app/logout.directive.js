; (function () {

    'use strict';

    angular.module('app')
        .directive('logoutNav', logoutNav)
        .controller('DirectiveCtrl', DirectiveCtrl)


    logoutNav.$inject = [];

    function logoutNav($scope, AuthService) {

        var directive = {
            restrict: 'E',
            template: 
           ` <div class="container">
            <div>
              <h5 class="navbar-right"><a href="#" ng-click="logout()">Log Out</a></h5>
              </div>
            </div>`
        }

        return directive;
    }

    DirectiveCtrl.$inject = ['$scope', 'AuthService'];

    function DirectiveCtrl($scope, AuthService) {
        $scope.logout = AuthService.logout();
    }



}());