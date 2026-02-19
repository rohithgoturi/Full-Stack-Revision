const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("Connected to DB successfully");
    }
    catch(err){
        console.log("Error connecting to DB", err);
    }
}

module.exports = connectDB;