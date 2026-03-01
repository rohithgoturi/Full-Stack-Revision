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

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    let decoded;

    try {
        decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }

    if (decoded.role !== "artist") {
        return res.status(403).json({
            message: "Only artists can upload music"
        });
    }

    try {
        const result = await uploadFile(req.file.buffer);

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: decoded.id
        });

        return res.status(201).json({
            message: "Music created successfully",
            music
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

    console.log(decoded);
};


const createAlbum = async (req, res) => {

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }

    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.role !== "artist"){
            return res.status(403).json({
                message : "Only artists can create albums"
            })
        }
    } catch (err) {
        return res.status(401).json({
            message : "Invalid token"
        })
    }

    const {title, musics} = req.body;

    const album = await albumModel.create({
        title,
        musics : musics,
        artist : decoded.id
    })

    res.status(201).json({
        message : "Album created successfully",
        album
    });

}

module.exports = { createMusic, createAlbum };
