const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    uri : {
        type: String,
        required: true,
        unique: true
    },

    title : {
        type: String,
        required: true,
        unique : true
    },

    artist : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "user"
        
    }
})

const musicModel = mongoose.model("music", musicSchema);

module.exports = musicModel;