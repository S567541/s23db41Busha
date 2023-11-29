const mongoose = require("mongoose")
const whistleSchema = mongoose.Schema({
    WhistleId: String,
    Whistle_Price: {
        type: Number,
        min: 0,
        max:5000
    },
    Whistle_Style:{
        type : String,
        minlength:2,
        maxlength:100       
    }
})
module.exports = mongoose.model("whistle",
whistleSchema)