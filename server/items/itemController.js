var Item = require('./itemModel.js');

module.exports = {
	allItems : function(req, res){
		Item.find({}).exec(function(err, items){
			if(err){
				res.send(500, err);
			}else{
				console.log(items);
				res.json(items);
			}
		})
	},

	newItem : function(req, res){
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
	}
};