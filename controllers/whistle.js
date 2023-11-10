var whistle = require('../models/whistle');
// List of all whistle
exports.whistle_list = function(req, res) {
res.send('NOT IMPLEMENTED: whistle list');
};
// for a specific whistle.
exports.whistle_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await whistle.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle whistle create on POST.
exports.whistle_create_post = async function(req, res) {
    console.log(req.body)
let document = new whistle();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"whistle_type":"goat", "cost":12, "size":"large"}
document.WhistleId = req.body.whistle_type;
document.Whistle_Price = req.body.Whistle_Price;
document.Whistle_Style = req.body.Whistle_Style;
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
exports.whistle_update_put =async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await whistle.findById( req.params.id)
    // Do updates of properties
    if(req.body.WhistleId)
    toUpdate.WhistleId = req.body.WhistleId;
    if(req.body.Whistle_Price) toUpdate.Whistle_Price = req.body.Whistle_Price;
    if(req.body.Whistle_Style) toUpdate.Whistle_Style = req.body.Whistle_Style;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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
    
