const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/posts.routes');

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;