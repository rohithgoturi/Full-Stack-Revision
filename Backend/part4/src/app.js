const express = require('express')
const app = express()
const noteModel = require('../models/note.models');

app.use(express.json())

app.get("/", (req,res) => {
    res.send("home page");
})

//posting notes
app.post("/notes", async (req,res) => {
    const data = req.body;

    await noteModel.create({
        title : data.title,
        description : data.description
    })

    res.status(201).json({
        message : "Data sent successfully"
    })
})

//fetching notes
app.get("/notes", async (req,res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message : "notes fetched successfully",
        notes : notes
    })
})


//deleting notes
app.delete("/notes/:id", async (req,res) => {
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message: "note deleted successfully"
    })
})

//updating the notes
app.patch("/notes/:id", async(req,res) => {
    const id = req.params.id;
    const description = req.body.description;

    await noteModel.findOneAndUpdate({_id: id}, {description:description});

    res.status(200).json({
        message : "note updated successfully"
    })
})

module.exports = app