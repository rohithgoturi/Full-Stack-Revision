const {Imagekit} = require("imagekit");
require('dotenv').config();

const imageKit = new Imagekit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})

const uploadMusic = async (file) => {
    const result = await imageKit.files.upload({
        file,
        fileName: "music.mp3",
        folder: "/backend-revision/music"
    })

    return result;
}


module.exports = {uploadMusic};