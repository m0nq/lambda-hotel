var express = require('express');
var router = express.Router();

/* GET orders page. */
router.get('/', function(req, res) {
  res.render('orders/index', { title: 'Place an order' });
});

module.exports = router;
