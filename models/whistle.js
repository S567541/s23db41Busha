const mongoose = require("mongoose")
const whistleSchema = mongoose.Schema({
    WhistleId: String,
    Whistle_Price: {
        type: Number,
        min: 0,
        max:5000
    },
    Whistle_Style:String
})
module.exports = mongoose.model("whistle",
whistleSchema)