const mongoose = require('mongoose');
const dontenv = require('dotenv').config();

async function connectDB () {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
}

module.exports = connectDB;