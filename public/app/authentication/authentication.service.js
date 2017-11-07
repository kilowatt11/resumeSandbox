; (function () {

    'use strict'

    angular.module('app')
        .factory('AuthService', AuthService)

    AuthService.$inject = ['$firebaseAuth']

    function AuthService($firebaseAuth) {
        var authObj = $firebaseAuth();

        return {
            isLoggedIn: isLoggedIn,
            login: login,
            logout: logout,
            register: register
        };


        //////////////////


        /* These functions return a promise that will be dealt with in the Controller*/

        function isLoggedIn() {
            return authObj.$getAuth();
        }

        function login(email, password) {
            return authObj.$signInWithEmailAndPassword(email, password);
        }

        function logout() {
            return authObj.$signOut();
            $state.go('register')
        }

        function register(email, password) {
            return authObj.$createUserWithEmailAndPassword(email, password);
        }
    }
}());