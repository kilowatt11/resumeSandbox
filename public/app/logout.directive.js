; (function () {

    'use strict';

    angular.module('app')
        .directive('logoutNav', logoutNav)
        .controller('DirectiveCtrl', DirectiveCtrl)

    function logoutNav() {
        var directive = {
            restrict: 'E',
            template:
            `<div class="container">
            <div>
              <h5 class="navbar-right"><a href="#" ng-click="logout()">Log Out</a></h5>
              </div>
            </div>`,
            controller: 'DirectiveCtrl'
        }
        return directive;
    }

    DirectiveCtrl.$inject = ['$scope', '$state', 'AuthService'];

    function DirectiveCtrl($scope, $state, AuthService) {
        $scope.logout = logout;

        function logout() {
            AuthService.logout().then(function () {
                $state.go('login');
            }).catch(function (error) {
                console.log('Error: ' + error)
            });
        }
    }



}());