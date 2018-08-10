var app = angular
    .module("app", [])
    .controller("userCtrl", ["$scope", "$window", function ($scope, $window) {
        
        // declarations
        $scope.emptyUser = {};
        $scope.editUserRow = {};
        $scope.userId = 0;
        
        $scope.message = "Welcome to User Dashboard";
        
        var user = {
            name: null,
            phone: null,
            email: null,
            id: $scope.userId
        };

        $scope.user = user;

        $scope.userArray = [];

        $scope.addUser = function () {            
            if ($scope.user.name.length > 0) {                
                $scope.user.id = $scope.userId++;
                $scope.userArray.push($scope.user);
                $scope.editUserRow[$scope.user.id] = false;
                $scope.user = angular.copy($scope.emptyUser);
            }
            else if ($scope.user.name == undefined || $scope.user.name == null) {
                $window.alert("Empty value can't be added.");
            }
            else {
                $window.alert("Empty value can't be added.");
            }
        };

        $scope.editUser = function (editUserSelected) {
            $scope.editUserRow[editUserSelected.id] = true;            
        };

        $scope.saveUser=function(saveUserSelected){
            $scope.editUserRow[saveUserSelected.id] = false;
        };

        $scope.resetUser = function () {
            $scope.user = angular.copy($scope.emptyUser);
        };
    }
    ]);