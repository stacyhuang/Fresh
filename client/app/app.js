angular.module('fresh', [
  'fresh.items',
  'ngRoute'
])
.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/items/items.html',
			controller: 'ItemsController'
		});
});