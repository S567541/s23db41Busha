var express = require('express');
const whistle_controlers= require('../controllers/whistle');
const whistledetail_controlers= require('../controllers/whistledetail');


var router = express.Router();

/* GET home page. */
  router.get('/', whistle_controlers.whistle_view_all_Page );
/* GET detail costume page */
router.get('/detail', whistledetail_controlers.whistle_view_one_Page);




module.exports = router

