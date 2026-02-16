const mongoose = require('mongoose');

//schema
const postSchema = new mongoose.Schema({
    image : String,
    caption : String,
})

//model
const postModel = mongoose.model("post", postSchema);

module.exports = postModel;