// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova','ionic-datepicker','ksSwiper'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("f71d0297-2519-4925-a1bf-44d6f7acc2a4", "563694979542")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  // untuk menu wisata
   .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/wisata/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
	
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/wisata/search.html',
		controller: 'kategoriCtrl'
      }
    }
  })
  
    .state('app.search1', {
    url: '/search1',
    views: {
      'menuContent': {
        templateUrl: 'templates/wisata/search1.html',
		controller: 'kategoriCtrl'
      }
    }
  })
  
      .state('app.search2', {
    url: '/search2',
    views: {
      'menuContent': {
        templateUrl: 'templates/wisata/search2.html',
		controller: 'kategoriCtrl'
      }
    }
  })
  
      .state('app.search3', {
    url: '/search3',
    views: {
      'menuContent': {
        templateUrl: 'templates/wisata/search3.html',
		controller: 'kategoriCtrl'
      }
    }
  })
  
  .state('app.search4', {
    url: '/search4',
    views: {
      'menuContent': {
        templateUrl: 'templates/wisata/search4.html',
		controller: 'kategoriCtrl'
      }
    }
  })
  
  .state('app.search5', {
    url: '/search5',
    views: {
      'menuContent': {
        templateUrl: 'templates/wisata/search5.html',
		controller: 'kategoriCtrl'
      }
    }
  })
  
  .state('app.search-detail', {
    url: '/search/:id_wisata',
    views: {
      'menuContent': {
        templateUrl: 'templates/wisata/detail.html',
		controller: 'detailCtrl'
      }
    }
  })

  //untuk menu tiket
  .state('app.tiket', {
      url: '/tiket',
      views: {
        'menuContent': {
          templateUrl: 'templates/tiket/tiket.html',
            controller: 'tiketCtrl'
        }
      }
    })
    .state('app.tiket_wisata', {
      url: '/tiket_wisata',
      views: {
        'menuContent': {
          templateUrl: 'templates/tiket/tiket_wisata.html'
        }
      }
    })
  .state('app.konfirmasi', {
      url: '/konfirmasi',
      views: {
        'menuContent': {
          templateUrl: 'templates/tiket/konfirmasi.html'
        }
      }
    })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
          controller: 'tentangCtrl'
        }
      }
    })
	
	// untuk menu panggilan
	    .state('app.panggilan', {
      url: '/panggilan',
      views: {
        'menuContent': {
          templateUrl: 'templates/panggilan.html',
          controller: 'panggilanCtrl'
        }
      }
    })

    //untuk menu peta
    .state('app.peta', {
      url: '/peta',
      views: {
        'menuContent': {
          templateUrl: 'templates/wisata/peta.html',
          controller: 'petaCtrl'
        }
      }
    })
  
	//untuk menu layanan aduan
	.state('app.aduan', {
      url: '/aduan',
      views: {
        'menuContent': {
          templateUrl: 'templates/aduan.html',
            controller: 'aduanCtrl'
        }
      }
    })
		
	//untuk menu notifikasi
	.state('app.notifikasi', {
      url: '/notifikasi',
      views: {
        'menuContent': {
          templateUrl: 'templates/notifikasi.html'
        }
      }
    })
	
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
