angular
    .module("app")
    .factory("userService",["$scope",function($scope){
        return{
            addUser: function(){
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
            }
        }
}]);