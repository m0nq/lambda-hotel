var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema for a user
var userSchema = new Schema({
  firstName: String,
  lastName: String,
  roomNumber: Number,
  email: String,
  password: String,
  create: {
    type: Date,
    default: Date.now
  }
});

// constructor based on user schema
var User = mongoose.model('User', userSchema);

module.exports = {
  User: User
};
