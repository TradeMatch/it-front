angular.module('itrade-mobile').controller('authCtrl', function ($scope, $state) {
    $scope.authenticateUser = function() {
        $state.go('app.recos');
    };
});
