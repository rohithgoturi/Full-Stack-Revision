const express = require('express');
const app = express();
const postModel = require('./models/post.model')
const uploadImage = require('./services/storage.services')
const multer = require('multer');

app.use(express.json());

const upload = multer({storage : multer.memoryStorage()})

app.post("/create-post",  upload.single("image"), async (req,res) => {

    const result = await uploadImage(req.file.buffer)
    const post = await postModel.create({
        image : result.url,
        caption : req.body.caption,
    })

    console.log(result)

     res.status(201).json({
        message : "uploaded successfully",
        post
    })
})

app.get("/create-post", async (req,res) => {
    const posts = await postModel.find();
    res.status(200).json({
        message : "fetched posts successfully",
        posts
    })
})

module.exports = app;
