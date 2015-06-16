angular.module('fresh.services', [])
.factory('ItemsFactory', function($http){
	
	var addItem = function(item){
		return $http({
			method: 'POST',
			url: '/items',
			data: item
		})
	};

	var getItems = function(){
		return $http({
			method: 'GET',
			url: '/items'
		})
		.then(function(res){
			return res.data;
		})
	};

	var removeItem = function(item){
		return $http({
			method: 'POST',
			url: '/items/remove',
			data: item
		})
	}

	return{
		addItem: addItem,
		getItems: getItems,
		removeItem: removeItem
	};
}); 