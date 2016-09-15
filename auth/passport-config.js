module.exports = function () {
  var passport = require('passport');
  var passportLocal = require('passport-local');
  var userService = require('../services/user-service');

  passport.use(new passportLocal.Strategy(function (email, password, next) {
    userService.findUser(function (err, user) {
      if (err) {
        return next(err);
      } else if (!user || user.password !== password) {
        return next(null, null);
      }
      next(null, user);
    });
  }));

  passport.serializeUser(function (user, next) {
    next(null, user.email);
  });

  passport.deserializeUser(function (user, next) {
    userService.findUser(email, function (err, user) {
      next(err, user);
    });
  });
};
