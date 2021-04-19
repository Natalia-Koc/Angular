var scotchApp = angular.module('scotchApp', ['ngRoute']); 

scotchApp.controller('mainController', function($scope) {
	$scope.message = 'Witaj na mojej stronie!';
});

scotchApp.config(
	function($routeProvider) {
		$routeProvider.when('/', {templateUrl:'pages/home.html', controller:'mainController'});
		$routeProvider.when('/cv', {templateUrl:'pages/cv.html', controller:'mainController'});
	}
);