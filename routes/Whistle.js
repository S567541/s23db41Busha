var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Whistle', { title: 'Search Results for Whistle' });
});

module.exports = router;