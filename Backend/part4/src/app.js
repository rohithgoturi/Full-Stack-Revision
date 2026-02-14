const express = require('express')
const app = express()
const noteModel = require('./models/note.models.js');

app.use(express.json())

app.get("/", (req,res) => {
    res.send("home page");
})

module.exports = app