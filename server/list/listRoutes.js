var listController = require('./listController.js');

module.exports = function(app){
	// app is the itemRouter injected from imddleware.js

	// app.route(path) returns an instance of a single route to handle HTTP requests
	// TODO: to set up routes in the itemController 
	app.route('/')
		.get(listController.getList)
		.post(listController.addToList);

	app.post('/remove', listController.removeFromList);
}