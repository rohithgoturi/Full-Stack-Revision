const express = require('express');
const app = express();
const postModel = require('./models/post.model')
const multer = require('multer');

app.use(express.json());

const upload = multer({storage : multer.memoryStorage()})

app.post("/create-post",  upload.single("image"), async (req,res) => {
    console.log(req.body)
    console.log(req.file)

    res.status(201).json({
        message : "uploaded successfully"
    })
})

module.exports = app;
