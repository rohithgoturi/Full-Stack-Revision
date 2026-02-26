const musicModel = require('../models/music.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const ImageKit = require('../services/storage.services');
const { uploadMusic } = require('../services/storage.services');
const result = await uploadFile(file.buffer('base64'));

const JWT_SECRET = process.env.JWT_SECRET;

const createMusic = async (req, res) => {
    const {uri, title, artist} = req.body;

    const token = req.cookies.token;
    
    if(!token) {
        return res.status(401).json({
            message : "unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(token,JWT_SECRET);
        if(decoded.role !== artist){
            return res.status(401).json({
                message: "unauthorized"
            })
        }
    }
    catch(err) {
        return res.status(401).json({
            message : "unauthorized"
        })
    }


    const result = await uploadMusic(req.file.buffer);

    const music = await musicModel.create({
        uri: result.uri,
        title,
        artist : decoded.id
    })

    return res.status(201).json({
        message : "music created successfully",
        music : {
            uri : music.uri,
            title : music.title,
            artist : music.artist
        }
    })


}

module.exports = {createMusic}