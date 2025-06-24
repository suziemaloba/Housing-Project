const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//creating a schema
const townSchema = new mongoose.schema({

    name: { 
        type: string,
        trim: true,
        required: [true, "A town must have a name"],
    },

    location: { 
        type: string,
        trim: true,
        required: [true, "A tows must have a location"],
    },

  createdAt:{
        type: Date,
        default:Date.now(),
    },
     
    updateAt:{
        type: Date,
        default:Date.now(),
    },
    })
    
    const town = mongoose.model ('town', townSchema);
    module.exports = town
