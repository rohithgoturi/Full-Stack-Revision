const mongoose = require('mongoose');

async function connectDB () {
    await mongoose.connect('mongodb+srv://backend:PMSFgA3KxUZwW7iE@backend-revision.nygw4z5.mongodb.net/myDB');
}

module.exports = connectDB;