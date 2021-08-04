const validator = require('validator');

const mongoose = require('mongoose');
const menSchema = new mongoose.Schema({
    
    ranking:{
        type:Number,
        required:true,
        // unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true // avoids massive spaces between letters
    },
    dob:{
        type:Date,
        required:true,

    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true
    },
    event:{
        type:String,
        default:'100m'
    }
});

const MensPlayer = new mongoose.model("MensPlayer", menSchema);

module.exports = MensPlayer;
