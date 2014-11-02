angular.module('itrade-mobile').controller('recoListCtrl', function ($scope, $timeout) {
    var generateDateInFuture = function() {
        return new Date(new Date().getTime() + Math.floor( Math.random()*5000000000 ) );
    };
    $scope.recos = [
        {id: "7b9057b4", ticker: 'AAPL', when: generateDateInFuture(), pt: 112, confidence: 67, followed: true, followers:873, starred: true, title: 'Apple' },
        {id: "e1aa45da", ticker: 'AMZN', when: generateDateInFuture(), pt: 86,  confidence: 19, followed:false, followers:112, starred:false, title: 'Amazon' },
        {id: "c9dd77e3", ticker: 'GOOG', when: generateDateInFuture(), pt: 1021,confidence: 93, followed: true, followers:542, starred:false, title: 'Google' },
        {id: "06a80382", ticker: 'MSFT', when: generateDateInFuture(), pt: 82,  confidence: 32, followed:false, followers:  2, starred:false, title: 'Microsoft' },
        {id: "55f1d3f3", ticker: 'CSCO', when: generateDateInFuture(), pt: 33,  confidence:  9, followed: true, followers: 23, starred: true, title: 'Cisco' },
        {id: "692ca0a5", ticker: 'FB'  , when: generateDateInFuture(), pt: 183, confidence: 56, followed: true, followers:199, starred:false, title: 'Facebook' }
    ];

    $scope.doRefresh = function() {
        console.log('Refreshing!');
        $timeout( function() {
            //simulate async response
            var id = Math.floor(Math.random() * 1000) + 4;
            $scope.recos.unshift({title: 'New Item ' + id, id: id });
            //Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    };

    $scope.toggleReco = function(reco, $event) {
        if ($event.defaultPrevented) return;
        var oldValue = reco.selected;
        _.forEach($scope.recos, function(reco) {
            reco.selected = false;
        });

        reco.selected = !oldValue;
    };
    $scope.toggleFollow = function(reco, $event) {
        $event.preventDefault();
        reco.followed = !reco.followed;
    };
});
