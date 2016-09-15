var express = require('express');
var router = express.Router();
var passport = require('passport');
var userService = require('../services/user-service');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

// GET /user/view
router.get('/create', function(req, res) {
  var viewModel = {
    title: 'Create an account'
  };

  res.render('users/create', viewModel);
});

// POST /user/view
router.post('/create', function(req, res) {
  userService.addUser(req.body, function (err) {
    if (err) {
      var viewModel = {
        title: 'Create an account',
        input: req.body,
        error: err.errors.email
      };
      delete viewModel.input.passsword;
      return res.render('users/create', viewModel);
    }
    req.login(req.body, function (err) {
      res.redirect('/orders');
    });
  });
});

router.post('/login', passport.authenticate('local'), function (req, res, next) {
  res.redirect('/orders');
});

router.get('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
