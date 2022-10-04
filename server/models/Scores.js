const { Schema } = require('mongoose');

const scoreSchema = new Schema({
    levelName:{
        type: String
    }, 
    score: {
        type: Number,
        required: true
    }
});


module.exports = scoreSchema