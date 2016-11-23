var myApp = angular.module('myApp');

myApp.controller('ImagesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ImagesController loaded...');

	$scope.getImages = function(){
		$http.get('/api/images').success(function(response){
			$scope.images = response;
		});
	}

	$scope.getImage = function(){
		var id = $routeParams.id;
		$http.get('/api/images/'+id).success(function(response){
			$scope.image = response;
		});
	}

	$scope.addImage = function(){
		console.log($scope.image);
		$http.post('/api/images/', $scope.image).success(function(response){
			window.location.href='#/images';
		});
	}

	$scope.removeImage = function(id){
		$http.delete('/api/images/'+id).success(function(response){
			window.location.href='#/images';
		});
	}
}]);