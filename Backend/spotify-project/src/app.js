const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const authRoutes = require('./routes/auth.routes');
const musicRoutes = require('./routes/music.routes');
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);


module.exports = app;