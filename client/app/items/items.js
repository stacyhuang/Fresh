angular.module('fresh.items', [])

.controller('ItemsController', function ($scope, ItemsFactory) {
  // Your code here
  $scope.item = {};
  $scope.data = {};

  // TODO: Write a function to add the items to the list
  $scope.addItem = function(){
  	ItemsFactory.addItem($scope.item);
  };

  $scope.getItems = function(){
  	ItemsFactory.getItems()
  		.then(function(items){
  			$scope.data = items;
  		});
  };

  $scope.getItems();
});
