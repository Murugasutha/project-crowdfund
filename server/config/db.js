const mongoose = require('mongoose')
require('dotenv').config

const connectDB = async () => {
   await mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MangoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));
}

module.exports = connectDB;