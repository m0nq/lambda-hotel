var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

// schema for a user
var userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  roomNumber: {type: Number, required: true, min: [0, "That's not a valid room number"], max: [500, "That's not a valid room number"]},
  email: {type: String, required: true},
  password: {type: String, required: true},
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
}, "There's already an account using that email. Try logging in?");

// constructor based on user schema
var User = mongoose.model('User', userSchema);

module.exports = {
  User: User
};
