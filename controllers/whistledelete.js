var whistle = require('../models/whistle');
// Handle a delete one view with id from query
exports.whistle_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await whistle.findById(req.query.id)
    res.render('whistledelete', { title: 'whistle Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };