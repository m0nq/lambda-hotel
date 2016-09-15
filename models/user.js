var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

// schema for a user
var userSchema = new Schema({
  firstName: String,
  lastName: String,
  roomNumber: {type: Number, min: [100, ""]},
  email: String,
  password: String,
  create: {
    type: Date,
    default: Date.now
  }
});

userSchema.path('email').validate(function (value, next) {
  userService.findUser(value, function (err, user) {
    if (err) {
      console.log(err);
      return next(false);
    }
    next(!user);
  });
}, 'That email is already in use');

// constructor based on user schema
var User = mongoose.model('User', userSchema);

module.exports = {
  User: User
};
