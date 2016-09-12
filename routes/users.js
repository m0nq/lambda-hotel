var express = require('express');
var router = express.Router();

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
  var err = false;
  if (err) {
    var viewModel = {
      title: 'Create an account',
      input: req.body,
      error: "Sorry, something went wrong. Try again?"
    };
    delete viewModel.input.passsword;
    return res.render('users/create', viewModel);
  }
    res.redirect('/orders');
});

module.exports = router;
