var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'ImagesController',
		templateUrl: 'views/images.html'
	})
	.when('/images', {
		controller:'ImagesController',
		templateUrl: 'views/images.html'
	})
	.when('/images/details/:id',{
		controller:'ImagesController',
		templateUrl: 'views/image_details.html'
	})
	.when('/images/add',{
		controller:'ImagesController',
		templateUrl: 'views/add_image.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});