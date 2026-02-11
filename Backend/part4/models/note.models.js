const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    description : String
})

const note = mongoose.model("note", noteSchema);

module.exports = note;