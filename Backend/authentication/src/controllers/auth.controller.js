const userModel = require('../models/user.models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    const user = await userModel.create({
        username,
        email,
        password})

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET_KEY)

        res.status(201).json({
            message : "User registered successfully",
            user,
            token
        })
}

module.exports = {registerUser};