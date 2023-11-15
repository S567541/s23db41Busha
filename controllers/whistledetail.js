var whistle = require('../models/whistle');

// Handle a show one view with id specified by query
exports.whistle_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await whistle.findById( req.query.id)
    res.render('whistledetail',
    { title: 'whistle Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };