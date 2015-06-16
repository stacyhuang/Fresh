angular.module('fresh', [
  'fresh.items',
  'fresh.services',
  'ngRoute'
])
.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/items/items.html',
			controller: 'ItemsController'
		});
});