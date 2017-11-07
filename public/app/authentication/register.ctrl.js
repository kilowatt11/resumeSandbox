; (function () {

    'use strict'

    angular.module('app')
        .controller('RegisterCtrl', RegisterCtrl)

    RegisterCtrl.$inject = ['$scope', '$state', '$firebaseObject', 'AuthService'];


    function RegisterCtrl($scope, $state, $firebaseObject, AuthService) {
        var ref = firebase.database().ref();

        $scope.register = register;

        function register() {
            AuthService.register($scope.email, $scope.password)
                .then(function (data) {
                    AuthService.login($scope.email, $scope.password)
                        .then(function (data) {
                            var userObj = $firebaseObject(ref.child(data.uid));
                            userObj.email = $scope.email;
                            userObj.$save().then(function (data) {
                                console.log(data.$id);
                                console.log(data.uid)
                                $state.go('setup.summary', { id: userObj.$id });
                            });
                        });
                });
        }
    }
}());
