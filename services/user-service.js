var User = require('../models/user').User;

exports.addUser = function addUser(user, next) {
  var newUser = new User({
    firstName: user.firstName,
    lastName: user.lastName,
    roomNumber: user.roomNumber,
    email: user.email.toLowerCase(),
    password: user.password
  });

  // save into mongodb
  newUser.save(function (err) {
    if (err) {
      return next(err);
    }
    next(null);
  });
};

exports.findUser = function findUser(email, next) {
  User.findOne({email: email.toLowerCase()}, function (err, user) {
    next(err, user);
  });
};
