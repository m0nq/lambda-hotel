var express = require('express');
var router = express.Router();

/* GET orders page. */
router.get('/', function(req, res) {
  var viewModel = {
    title: "Place an order",
    firstName: req.user ? req.user.firstName : null
  };

  console.log(viewModel.firstName);
  res.render('orders/index', viewModel);
});

module.exports = router;
