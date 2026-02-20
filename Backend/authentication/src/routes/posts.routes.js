const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userModel = require("../models/user.models");

router.post("/create", async (req, res) => {
    const token = req.cookies.token;
    
    if(!token){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }

    try {
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(verifiedToken)

        const user = await userModel.findOne({
            _id : verifiedToken.id
        })
        
    } catch (err) {
        return res.status(401).json({
            message : "Invalid token"
        })
    }

   

    res.status(201).json({
        message : "Post created successfully"
    })
})

module.exports = router;