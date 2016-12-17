angular.module('starter.services', [])

.factory('wisataService', function($http) {
    var baseUrl = 'http://equaliti.my.id/backend/api/wisata/';
    return {
        login: function(sekolahForm){
            return $http.post(baseUrl+'dataSekolah',sekolahForm,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        ambilSemua: function (){
            return $http.get(baseUrl+'select.php');  
			},
        tentang: function (){
            return $http.get(baseUrl+'selecttentang.php');  
			},
        peta: function (){
            return $http.get(baseUrl+'peta.php?id='+id_wisata);
			},
        peta1: function (){
            return $http.get(baseUrl+'peta1.php');  
			},
        ambilSatu: function (id_wisata){
            return $http.get(baseUrl+'detail.php?id='+id_wisata);
			},
        create: function (tiket_wisata){
            return $http.post(baseUrl+'insert.php',tiket_wisata,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
		create_aduan: function (aduan){
            return $http.post(baseUrl+'insert_aduan.php',aduan,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        update: function (datateman){
            return $http.post(baseUrl+'insert_tiket.php',datateman,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'
                }
            });
        },
        delete: function  (id){
            return $http.get(baseUrl+'delete.php?id='+id);
        }
    };
    
});
