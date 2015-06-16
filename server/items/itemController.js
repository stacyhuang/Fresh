var Item = require('./itemModel.js');

module.exports = {
	getItems : function(req, res){
		Item.find({}).exec(function(err, items){
			if(err){
				res.send(500, err);
			}else{
				res.json(items);
			}
		})
	},

	addItem : function(req, res){
		var itemName = req.body.itemName;
		var expirationDate = req.body.expirationDate;
		var newItem = new Item({
			itemName: itemName,
			expirationDate: expirationDate,
		});
		newItem.save(function(err, newEntry){
			if(err){
				res.send(500, err);
			}else{
				res.json(newEntry);
			}
		})
	},

	removeItem: function(req, res){
		Item.findOne({itemName: req.body.itemName}).remove(function(err){
			if(err){
				res.send(500, err);
			}else{
				res.sendStatus(200);
			}
		});
	}
};