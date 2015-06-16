angular.module('fresh.items', [])

.controller('ItemsController', function ($scope, ItemsFactory) {
  // Your code here
  $scope.item = {};
  $scope.data = {};

  // TODO: Write a function to add the items to the list
  $scope.addItem = function(){
  	ItemsFactory.addItem($scope.item)
      .then(function(){
        $scope.item = {};
        $scope.getItems();
      });
  };

  $scope.getItems = function(){
  	ItemsFactory.getItems()
  		.then(function(items){
  			$scope.data = items;
  		});
  };

  $scope.removeItem = function(item){
    ItemsFactory.removeItem(item)
      .then(function(){
        $scope.getItems();
      })
  }

  $scope.getItems();
});
