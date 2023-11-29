var express = require('express');
const whistle_controlers= require('../controllers/whistle');
const whistledetail_controlers= require('../controllers/whistledetail');
const whistlecreate_controller= require('../controllers/whistlecreate');
const whistleupdate_controller= require('../controllers/whistleupdate');
const whistledelete_controller= require('../controllers/whistledelete');

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

var router = express.Router();

/* GET home page. */
  router.get('/', whistle_controlers.whistle_view_all_Page );
/* GET detail costume page */
router.get('/detail', whistledetail_controlers.whistle_view_one_Page);
router.get('/create', whistlecreate_controller.whistle_create_Page);
router.get('/update',secured, whistleupdate_controller.whistle_update_Page);
router.get('/delete', whistledelete_controller.whistle_delete_Page);


module.exports = router

