var bodyParser = require('body-parser');

module.exports = function(app, express){
	var itemRouter = express.Router();

	// parse application/json
	app.use(bodyParser.json());

	// serve static connect for the app from the "client" directory
	app.use(express.static(__dirname + '/../../client'));

	// use itemRouter for all item requests
	app.use('/items', itemRouter);

	// inject the itemRouter into the itemRoutes route file
	require('../items/itemRoutes.js')(itemRouter);

};