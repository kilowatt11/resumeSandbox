; (function () {

    'use strict';

    angular.module('app')
        .directive('messageDirective', messageDirective)
        .controller('MessageCtrl', MessageCtrl);

    function messageDirective() {
        var directive = {
            restrict: 'E',
            template: `<div ng-show="showMessage" class="message text-center">{{message}}</div>`,
            controller: 'MessageCtrl'
        }
        return directive
    }

    MessageCtrl.$inject = ['$scope', '$timeout']

    function MessageCtrl($scope, $timeout) {
        $scope.showMessage = false;
        
       $scope.saveMessage = saveMessage;
        function saveMessage() {
            $scope.message = 'Saving...';
            $scope.showMessage = true;
            $timeout(function () {
                $scope.showMessage = false;
            }, 2000);
        }
    }




}());
