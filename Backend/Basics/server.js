const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Home page")
})

app.get("/about", (req, res) => {
    res.send("about page")
})

app.get("/profile", (req, res) => {
    res.send("this is a profile page")
})

app.listen(3000)