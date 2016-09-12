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

module.exports = router;
