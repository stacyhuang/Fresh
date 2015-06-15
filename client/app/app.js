angular.module('fresh', ['fresh.items'])
.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/items/items.html',
			controller: 'itemsController'
		});
});