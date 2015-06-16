angular.module('fresh', [
  'fresh.items',
  'fresh.services',
  'angularMoment',
  'ngRoute'
])
.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/items/items.html',
			controller: 'ItemsController'
		});
});