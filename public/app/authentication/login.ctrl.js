;(function(){

    angular.module('app')
    .controller('LoginCtrl', LoginCtrl)

    LoginCtrl.$inject = ['$scope', '$state', 'AuthService']

    function LoginCtrl($scope, $state, AuthService){
        $scope.login = login;
        $scope.isLoggedIn = isLoggedIn;
        $scope.logOut = logOut;

        function login(){
            AuthService.login($scope.email, $scope.password)
            .then(function(data){
                console.log("Successfully logged in User: " + data.uid)
                $state.go('setup.summary', {id: data.uid});

                $scope.email = '';
                $scope.password = '';
            });
        }

        function isLoggedIn(){
            console.log(AuthService.isLoggedIn() !== null)
        }

        function logOut(){
            AuthService.logout()
            console.log("You have been successfully logged out")
        }




    }

  

}());