var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');


var userSchema = mongoose.Schema({
	"name" : { type: String },
	"id" : { type: String },
	"ig_access_token" : { type: String },
	"fb_access_token" : { type: String },
});

userSchema.plugin(findOrCreate);

exports.User = mongoose.model('User', userSchema);

