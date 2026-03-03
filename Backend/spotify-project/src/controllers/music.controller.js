const musicModel = require("../models/music.models");
const albumModel = require("../models/album.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const ImageKit = require('../services/storage.services');
const { uploadFile } = require("../services/storage.services");

const JWT_SECRET = process.env.JWT_SECRET;

const createMusic = async (req, res) => {

    const { title } = req.body;
    const token = req.cookies.token;

    
    
        const result = await uploadFile(req.file.buffer);

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: req.user.id
        });

        return res.status(201).json({
            message: "Music created successfully",
            music
        });

    

    
};


const createAlbum = async (req, res) => {

    const {title, musics} = req.body;

    const album = await albumModel.create({
        title,
        musics : musics,
        artist : req.user.id
    })

    res.status(201).json({
        message : "Album created successfully",
        album
    });

}

module.exports = { createMusic, createAlbum };
