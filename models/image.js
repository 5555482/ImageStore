var mongoose = require('mongoose');
var imageSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	details:{
		type: String
	},
	points:{
		type: Number
	},
	image_url:{
		type: String
	},
});

var Image = module.exports = mongoose.model('Image', imageSchema);

// Get Images
module.exports.getImages = function(callback, limit){
	Image.find(callback).limit(limit);
}
// Get Image by ID
module.exports.getImageById = function(id, callback){
	Image.findById(id, callback);
}
// Add Image
module.exports.addImage = function(image, callback){
	Image.create(image, callback);
}
// Delete Image
module.exports.removeImage = function(id, callback){
	var query = {_id: id};
	Image.remove(query, callback);
}