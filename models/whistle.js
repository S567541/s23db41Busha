const mongoose = require("mongoose")
const whistleSchema = mongoose.Schema({
    WhistleId: String,
    Whistle_Price: Number,
    Whistle_Style:String
})
module.exports = mongoose.model("whistle",
whistleSchema)