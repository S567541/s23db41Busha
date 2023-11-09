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
exports.whistle_create_post = async function(req, res) {
    console.log(req.body)
let document = new Costume();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.costume_type = req.body.costume_type;
document.cost = req.body.cost;
document.size = req.body.size;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
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

    //VIEWS
    // Handle a show all view
    exports.whistle_view_all_Page = async function(req, res) {
    try{
    thewhistles = await whistle.find();
    res.render('whistle', { title: 'whistle Search Results', whistlelist: thewhistles });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
