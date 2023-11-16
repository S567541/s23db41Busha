
var whistle = require('../models/whistle');
// Handle building the view for creating a whistle.
// No body, no in path parameter, no query.
// Does not need to be async
exports.whistle_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('whistlecreate', { title: 'whistle Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }