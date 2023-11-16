var express = require('express');
const whistle_controlers= require('../controllers/whistle');
const whistledetail_controlers= require('../controllers/whistledetail');
const whistlecreate_controller= require('../controllers/whistlecreate');
const whistleupdate_controller= require('../controllers/whistleupdate');

var router = express.Router();

/* GET home page. */
  router.get('/', whistle_controlers.whistle_view_all_Page );
/* GET detail costume page */
router.get('/detail', whistledetail_controlers.whistle_view_one_Page);
router.get('/create', whistlecreate_controller.whistle_create_Page);
router.get('/update', whistleupdate_controller.whistle_update_Page);



module.exports = router

