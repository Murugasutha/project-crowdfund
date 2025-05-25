const mongoose = require('mongoose')
const campaignSchema = new mongoose.Schema({
    title: {type: String, required: true},
    shortDesc: {type: String, required: true},
    story: {type: String, required: true},
    category: {type: String, required: true},
    targetAmount: {type: Number, required: true},
    endDate: {type: Date, required: true},
    imgURL : {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model('Campaign', campaignSchema)