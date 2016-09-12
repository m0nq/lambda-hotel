var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

// GET /user/view
router.get('/view', function(req, res) {
  res.send('user view here...');
});

module.exports = router;
