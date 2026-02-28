const Imagekit = require("imagekit");
require('dotenv').config();

const ImageKitClient = new Imagekit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
})

const uploadFile = async (file) => {
    const result = await ImageKitClient.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "/backend-revision/music"
    })

    return result;
}


module.exports = {uploadFile};