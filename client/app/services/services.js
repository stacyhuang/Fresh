angular.module('fresh.services', [])
.factory('ItemsFactory', function($http){
	
	var addItem = function(item){
		return $http({
			method: 'POST',
			url: '/items',
			data: item
		})
		.then(function(res){
			return res.data;
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
	};

	var addToList = function(item){
		return $http({
			method: 'POST',
			url: '/list',
			data: item
		})
		.then(function(res){
			return res.data;
		})
	};

	var getList = function(){
		return $http({
			method: 'GET',
			url: '/list'
		})
		.then(function(res){
			return res.data;
		})
	};

	var removeFromList = function(item){
		return $http({
			method: 'POST',
			url: '/list/remove',
			data: item
		})
	};

	return{
		addItem: addItem,
		getItems: getItems,
		removeItem: removeItem,
		addToList: addToList,
		getList: getList,
		removeFromList: removeFromList
	};
}); 