const express = require('express')
const connectDB = require('./db/db');
const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    res.send("home page");
})

module.exports = app