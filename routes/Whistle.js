var express = require('express');
const whistle_controlers= require('../controllers/whistle');
var router = express.Router();

/* GET home page. */
  router.get('/', whistle_controlers.whistle_view_all_Page );
  module.exports = router