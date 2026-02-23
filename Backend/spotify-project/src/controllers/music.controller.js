const musicModel = require('../models/music.model');

const createMusic = async (req, res) => {
    const {uri, title, artist} = req.body;

    const token = req.cookies.token;
    
    if(!token) {
        return res.status(401).json({
            message : "unauthorized"
        })
    }

    try {
        const decode = jwt.verify(token,JWT_SECRET);
        if(decoded.role !== artist){
            return res.status(401).json({
                message: "unauthorized"
            })
        }
    }
    catch(err) {
        return res.status(401).json({
            message : "unauthorized"
        })
    }

    
    
    const music = await musicModel.create({
        uri,
        title,
        artist
    })

}