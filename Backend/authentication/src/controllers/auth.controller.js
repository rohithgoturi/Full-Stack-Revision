const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const user = await userModel.create({
            username,
            email,
            password,
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

        res.cookie("token", token);

        res.status(201).json({
            message: "User registered successfully",
            user,
        });
    } catch (err) {
        res.status(500).json({
            message: "internal Server Error",
            error: err.message,
        });
    }
};

module.exports = { registerUser };
