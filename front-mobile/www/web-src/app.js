angular.module('itrade-mobile', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "web-src/menu.tpl.html",
                controller: 'appCtrl'
            })
            .state('app.recos', {
                url: "/recos",
                views: {
                    'menuContent': {
                        templateUrl: "web-src/reco/reco-list.tpl.html",
                        controller: 'recoListCtrl'
                    }
                }
            })
            .state('app.profile', {
                url: "/profile",
                views: {
                    'menuContent': {
                        templateUrl: "web-src/profile/profile.tpl.html",
                        controller: 'profileCtrl'
                    }
                }
            })
            .state('app.browse', {
                url: "/browse",
                views: {
                    'menuContent': {
                        templateUrl: "web-src/browse.html"
                    }
                }
            })
            .state('app.single', {
                url: "/playlists/:playlistId",
                views: {
                    'menuContent': {
                        templateUrl: "web-src/playlist.html",
                        controller: 'PlaylistCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/recos');
    })

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    });

