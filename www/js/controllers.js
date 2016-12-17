angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('panggilanCtrl', function($scope, $stateParams) {
})

.controller('kategoriCtrl', function($scope, $stateParams, wisataService) {
$scope.showData = function() {
    wisataService.ambilSemua().success(function(dataChat) {
      $scope.chats = dataChat;
    });  
  };

  $scope.showData();
 })

.controller('tentangCtrl', function($scope, $stateParams, wisataService) {
$scope.showData = function() {
    wisataService.tentang().success(function(dataChat) {
      $scope.chats = dataChat;
    });  
  };

  $scope.showData();
 })

.controller('petaCtrl', function($scope, $stateParams, wisataService) {
$scope.showData = function() {
    wisataService.peta1().success(function(peta) {
      $scope.peta1 = peta;
    });  
  };

  $scope.showData();
 })
    .directive('map1', function() {
    return {
        restrict: 'A',
        link:function(scope, element, attrs){

          var zValue = scope.$eval(attrs.zoom);
          var lat = scope.$eval(attrs.lat);
          var lng = scope.$eval(attrs.lng);
		 
		  var myLatlng = new google.maps.LatLng(lat,lng)
		  mapOptions = {
                  zoom: zValue,
                  center: myLatlng
                },
		map = new google.maps.Map(element[0],mapOptions),
		marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      draggable:false
	  });
        
        var marker, i;
        for (var i = 0; i < peta.length; i++) {
            marker = new google.maps.Marker({
        position: new google.maps.LatLng(peta[i][1], peta[i][2]),
        map: map
      });
    }
    }
        };
})

.controller('detailCtrl', function($scope,$stateParams,$ionicPopup,$ionicModal,$state,ionicDatePicker,$timeout, $ionicSlideBoxDelegate, wisataService) {

  $scope.showDataId = function() {
  wisataService.ambilSatu($stateParams.id_wisata).success(function(wisata) {
    $scope.wisata = wisata;
  });  
  };

  $scope.showDataId();
$scope.back = function (){
        $state.go('app.search');
    };
    
    $ionicModal.fromTemplateUrl('edit.html', function(modal){
        $scope.taskModal = modal;
	}, {
            scope : $scope,
            animation : 'slide-in-up'	
	});
        
        $scope.showAlert = function(msg) {
            $ionicPopup.alert({
                title: msg.title,
                template: msg.message,
                okText: 'Ok',
                okType: 'button-positive'
            });
          };
	
	$scope.editModal = function(){
            $scope.taskModal.show();
	};
	
	$scope.batal = function(){
            $scope.taskModal.hide();
            $scope.showDataId();
	};
    
     $scope.selected;
    $scope.openDatePicker = function (val) {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          console.log('Return value from the datepicker popup is : ' + val, new Date(val));
          $scope.selected = new Date(val);
        },
        disabledDates: [
          new Date(2016, 2, 16),
          new Date(2015, 3, 16),
          new Date(2015, 4, 16),
          new Date(2015, 5, 16),
          new Date('Wednesday, August 12, 2015'),
          new Date("08-16-2016"),
          new Date(1439676000000)
        ],
        from: new Date(2012, 1, 1),
        to: new Date(2018, 10, 30),
        inputDate: new Date(),
        mondayFirst: true,
        disableWeekdays: [],
        closeOnSelect: false,
        templateType: 'popup'
      };
      ionicDatePicker.openDatePicker(ipObj1);
    };
    
	$scope.edit = function(tujuan_wisata,nama_wisata,p_nama,no_identitas,tgl_wisata,jumlah_orang,harga,p_telp,p_email){
            if (!p_nama){
                $scope.showAlert({
                    title: "Information",
                    message: "Nama Mohon Diisi"
                });
            }else if(!no_identitas){
                $scope.showAlert({
                    title: "Information",
                    message: "Nomor Identitas Mohon Diisi"
                });
            }else if(!tgl_wisata){
                $scope.showAlert({
                    title: "Information",
                    message: "Tanggal Mohon Diisi"
                });
            
            }else if(!jumlah_orang){
                $scope.showAlert({
                    title: "Information",
                    message: "jumlah Mohon Diisi"
                });
            }else if(!p_telp){
                $scope.showAlert({
                    title: "Information",
                    message: "telp Mohon Diisi"
                });
            }else if(!p_email){
                $scope.showAlert({
                    title: "Information",
                    message: "email Mohon Diisi"
                });
            }else{
                $scope.tujuan_wisata = tujuan_wisata;
                $scope.nama_wisata = nama_wisata;
                $scope.p_nama = p_nama;
                $scope.no_identitas = no_identitas;
                $scope.tgl_wisata = tgl_wisata;
                $scope.jumlah_orang = jumlah_orang;
                $scope.harga = harga;
                $scope.p_telp = p_telp;
                $scope.p_email = p_email;
                wisataService.update({
                    'tujuan_wisata' : tujuan_wisata,
                    'nama_wisata' : nama_wisata,
                    'p_nama': p_nama,
                    'no_identitas': no_identitas,
                    'tgl_wisata': tgl_wisata,
                    'jumlah_orang': jumlah_orang,
                    'harga': harga,                    
                    'p_telp': p_telp,
                    'p_email': p_email
                }).then(function(resp) {
                  console.log('Success', resp);
                  $scope.showAlert({
                        title: "Information",
                        message: "Data Telah Dikirim"
                    });
                },function(err) {
                  console.error('Error', err);
                }); 
            }
	};
	
})


.directive('map', function() {
    return {
        restrict: 'A',
        link:function(scope, element, attrs){

          var zValue = scope.$eval(attrs.zoom);
          var lat = scope.$eval(attrs.lat);
          var lng = scope.$eval(attrs.lng);
		  
		  var myLatlng = new google.maps.LatLng(lat,lng)
		  mapOptions = {
                  zoom: zValue,
                  center: myLatlng
                },
		map = new google.maps.Map(element[0],mapOptions),
		marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      draggable:false
	  });
	  google.maps.event.addListener(marker, 'dragend', function(evt){
    scope.$parent.user.latitude = evt.latLng.lat();
    scope.$parent.user.longitude = evt.latLng.lng();
    scope.$apply();
	});

        }
    };
})



/*.controller('tiketCtrl', function($scope,$ionicPopup,ionicDatePicker,wisataService){
    $scope.selected;
    $scope.openDatePicker = function (val) {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          console.log('Return value from the datepicker popup is : ' + val, new Date(val));
          $scope.selected = new Date(val);
        },
        disabledDates: [
          new Date(2016, 2, 16),
          new Date(2015, 3, 16),
          new Date(2015, 4, 16),
          new Date(2015, 5, 16),
          new Date('Wednesday, August 12, 2015'),
          new Date("08-16-2016"),
          new Date(1439676000000)
        ],
        from: new Date(2012, 1, 1),
        to: new Date(2018, 10, 30),
        inputDate: new Date(),
        mondayFirst: true,
        disableWeekdays: [],
        closeOnSelect: false,
        templateType: 'popup'
      };
      ionicDatePicker.openDatePicker(ipObj1);
    };
    $scope.tiket_wisata={};
    $scope.simpan = function (){
        if (!$scope.tiket_wisata.p_nama){
            $scope.showAlert({
                title: "Information",
                message: "nama mohon diisi"
            });
        }else if (!$scope.tiket_wisata.no_identitas){
            $scope.showAlert({
                title: "Information",
                message: "nomor identitas mohon diisi"
            });
        }else if (!$scope.tiket_wisata.tujuan_wisata){
            $scope.showAlert({
                title: "Information",
                message: "tujuan wisata mohon diisi"
            });
        }else if (!$scope.tiket_wisata.tgl_wisata){
            $scope.showAlert({
                title: "Information",
                message: "tanggal mohon diisi"
            });
        }else if (!$scope.tiket_wisata.jumlah_orang){
            $scope.showAlert({
                title: "Information",
                message: "jumlah orang mohon diisi"
            });
        }else if (!$scope.tiket_wisata.p_telp){
            $scope.showAlert({
                title: "Information",
                message: "telepon mohon diisi"
            });
        }else if (!$scope.tiket_wisata.p_email){
            $scope.showAlert({
                title: "Information",
                message: "email mohon diisi"
            });
        }else{
            wisataService.create({
                p_nama: $scope.tiket_wisata.p_nama,
                no_identitas: $scope.tiket_wisata.no_identitas,
                tujuan_wisata: $scope.tiket_wisata.tujuan_wisata,
                tgl_wisata: $scope.tiket_wisata.tgl_wisata,
                jumlah_orang: $scope.tiket_wisata.jumlah_orang,
                p_telp: $scope.tiket_wisata.p_telp,
                p_email: $scope.tiket_wisata.p_email
            }).success(function(data){
                $scope.showAlert({
                    title: "Information",
                    message: "Data Telah Tersimpan"
                });
            });
        }
        
    };
       
})*/


.controller('aduanCtrl', function($scope,$ionicPopup,$cordovaCamera,$ionicModal,wisataService){
    $scope.showAlert = function(msg) {
      $ionicPopup.alert({
          title: msg.title,
          template: msg.message,
          okText: 'Ok',
          okType: 'button-balanced'
      });
    };
    /*$scope.takePhoto = function getImage() {
        navigator.camera.getPicture(uploadPhoto, function(message) {
            alert('get picture failed');
        }, {
            quality: 100,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        });

    }

    function uploadPhoto(imageURI) {
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
        options.mimeType = "image/jpeg";
        console.log(options.fileName);
        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, "http://192.168.1.129/upload/upload.php", function(result){
            console.log(JSON.stringify(result));
        }, function(error){
            console.log(JSON.stringify(error));
        }, options);
    }; */
    $scope.aduan={};
    $scope.simpan = function (){
        if (!$scope.aduan.nama_aduan){
            $scope.showAlert({
                title: "Information",
                message: "nama mohon diisi"
            });
        }else if (!$scope.aduan.email){
            $scope.showAlert({
                title: "Information",
                message: "email mohon diisi"
            });
        }else if (!$scope.aduan.aduan){
            $scope.showAlert({
                title: "Information",
                message: "aduan atau keluhan mohon diisi"
            });
        }else{
            wisataService.create_aduan({
                nama_aduan: $scope.aduan.nama_aduan,
                email: $scope.aduan.email,
                aduan: $scope.aduan.aduan,
				foto: $scope.aduan.foto
            }).success(function(data){
                $scope.showAlert({
                    title: "Information",
                    message: "Data Telah Tersimpan"
                });
            });
        }
        
    }
       
});
