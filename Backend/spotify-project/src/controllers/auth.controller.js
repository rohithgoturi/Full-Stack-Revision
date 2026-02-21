const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signup = async (req, res) => {
    const {username, email, password, role="user"} = req.body;

    const AlreadyExist = await userModel.findOne({
        $or : [
            {username},
            {email}
        ]
    })

    if(AlreadyExist){
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = await userModel.create({
        username,
        email, 
        password : hashedPassword,
        role
    })

    const token = jwt.sign({
        _id : newUser.id,
        role : newUser.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message : "User Created Successfully",
        newUser,
    })
}

const login = async (req, res) => {
    const {username, email, password} = req.body;

    const user = await userModel.findOne({
        $or : [
            {username},
            {email}
        ]
    })

    if(!user){
        return res.status(400).json({
            message: "User not found"
        })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch) {
        return res.status(400).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        _id : user.id,
        role : user.role
    }, process.env.JWT_SECRET)
    
    res.cookie("token", token)

    res.status(200).json({
        message : "Login Successful",
        user
    })
}

module.exports = {signup, login};