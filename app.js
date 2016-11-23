var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Image =require('./models/image');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/imagestore');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/images');
});

app.get('/api/images', function(req, res){
	Image.getImages(function(err, images){
		if(err){
			throw err;
		}
		res.json(images);
	});
});
app.get('/api/images/:_id', function(req, res){
	Image.getImageById(req.params._id, function(err, image){
		if(err){
			throw err;
		}
		res.json(image);
	});
});
app.post('/api/images', function(req, res){
	var image = req.body;
	Image.addImage(image, function(err, image){
		if(err){
			throw err;
		}
		res.json(image);
	});
});
app.delete('/api/images/:_id', function(req, res){
	var id = req.params._id;
	Image.removeImage(id, function(err, image){
		if(err){
			throw err;
		}
		res.json(image);
	});
});

app.listen(3000);
console.log('Running on port 3000...');