const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB () {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    console.log("connected to database")
}

module.exports = connectDB;