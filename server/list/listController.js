var List = require('./listModel.js');

module.exports = {
	getList : function(req, res){
		List.find({}).exec(function(err, items){
			if(err){
				res.send(500, err);
			}else{
				res.json(items);
			}
		})
	},

	addToList : function(req, res){
		var itemName = req.body.itemName;
		var newItem = new List({
			itemName: itemName,
		});
		newItem.save(function(err, newEntry){
			if(err){
				res.send(500, err);
			}else{
				res.json(newEntry);
			}
		})
	},

	removeFromList: function(req, res){
		List.findOne({_id: req.body._id}).remove(function(err){
			if(err){
				res.send(500, err);
			}else{
				res.sendStatus(200);
			}
		});
	}
};