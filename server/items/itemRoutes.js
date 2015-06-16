var itemController = require('./itemController.js');

module.exports = function(app){
	// app is the itemRouter injected from imddleware.js

	// app.route(path) returns an instance of a single route to handle HTTP requests
	// TODO: to set up routes in the itemController 
	app.route('/')
		.get(itemController.allItems)
		.post(itemController.newItem);
}