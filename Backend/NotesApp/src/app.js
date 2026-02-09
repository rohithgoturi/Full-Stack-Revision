// this file i.e app.js is used to create the server
const express = require('express')
const app = express()

// to parse the incoming request body as json
app.use(express.json())

// for storing notes in an array
const notes = []

//sending data to server
app.post("/notes", (req,res) => {
    notes.push(req.body);

    res.status(201).json({
        message : "Notes sent successfully"
    })
})

// fetching data from the server
app.get("/notes", (req, res) => {
    res.status(200).json({
        message : "Notes fetched successfully",
        notes : notes
    })
})

//updating a note on the server
app.patch("/notes/:index", (req, res) => {
    const index = req.params.index
    const description = req.body.description
    const title = req.body.title;
    notes[index].description = description
    notes[index].title = title

    res.status(200).json({
        message: "notes updated successfully"
    })
})

//deleting a note from the server
app.delete("/notes/:index", (req, res) => {
    const index = req.params.index
    delete notes[index];

    res.status(200).json ({
        message : "the note deleted successfully"
    })
})

module.exports = app
