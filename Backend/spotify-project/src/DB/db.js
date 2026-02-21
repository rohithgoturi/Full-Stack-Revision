const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    }
    catch(err) {
        console.log("Error connecting to MongoDB",err);
    }
}

module.exports = connectDB;