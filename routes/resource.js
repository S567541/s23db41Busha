var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var whistle_controller = require('../controllers/whistle');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// whistle ROUTES ///
// POST request for creating a whistle.
router.post('/whistle', whistle_controller.whistle_create_post);
// DELETE request to delete whistle.
router.delete('/whistle/:id', whistle_controller.whistle_delete);
// PUT request to update whistle.
router.put('/whistle/:id', whistle_controller.whistle_update_put);
// GET request for one whistle.
router.get('/whistle/:id', whistle_controller.whistle_detail);
// GET request for list of all whistle items.
router.get('/whistle', whistle_controller.whistle_list);
module.exports = router;