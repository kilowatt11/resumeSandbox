; (function () {
    'use strict';

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBJ5OWr6eyRHx3WJ3BgmkW2g4VCGNjO5HY",
        authDomain: "resumesandbox-8b053.firebaseapp.com",
        databaseURL: "https://resumesandbox-8b053.firebaseio.com",
        projectId: "resumesandbox-8b053",
        storageBucket: "resumesandbox-8b053.appspot.com",
        messagingSenderId: "82591091457"
    };
    firebase.initializeApp(config);

    angular.module('app', ['firebase', 'ui.router'])
       
}());