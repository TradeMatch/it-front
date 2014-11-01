angular.module('reco').controller('recoListCtrl', function ($scope) {
    $scope.recos = [
        { title: 'Apple', id: 1 },
        { title: 'Amazon', id: 2 },
        { title: 'Google', id: 3 },
        { title: 'Microsoft', id: 4 },
        { title: 'Cisco', id: 5 },
        { title: 'Facebook', id: 6 }
    ];
});
