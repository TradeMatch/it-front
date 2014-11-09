angular.module('itrade-mobile').controller('profileCtrl', function ($scope, $timeout) {
    $scope.chartConfig = {
        options: {
            title: {
                text: null
            },
            chart: {
                type: 'line'
            },
            exporting: {
                buttons: {
                    contextButton: {
                        enabled: false
                    }
                }
            },
            legend: {
                enabled: false
            }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        size: {
            width: 370,
            height: 200
        },
        xAxis: {
            title: {
                text: null
            }
        },
        yAxis: {
            title: {
                text: null
            }
        },
        loading: false
    }
});
