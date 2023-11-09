var whistle = require('../models/whistle');
// List of all whistle
exports.whistle_list = function(req, res) {
res.send('NOT IMPLEMENTED: whistle list');
};
// for a specific whistle.
exports.whistle_detail = function(req, res) {
res.send('NOT IMPLEMENTED: whistle detail: ' + req.params.id);
};
// Handle whistle create on POST.
exports.whistle_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: whistle create POST');
};
// Handle whistle delete form on DELETE.
exports.whistle_delete = function(req, res) {
res.send('NOT IMPLEMENTED: whistle delete DELETE ' + req.params.id);
};
// Handle whistle update form on PUT.
exports.whistle_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: whistle update PUT' + req.params.id);
};
exports.whistle_list = async function(req, res) {
    try{
    thewhistle = await whistle.find();
    res.send(thewhistle);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
