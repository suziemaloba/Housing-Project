const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//creating a schema
const userSchema = new mongoose.schema({

 sender: { 
        type: mongoose.Schema.types.objectid,
        ref: 'user',
        required: true,
    }, 

    receiver: { 
        type: mongoose.Schema.types.objectid,
        ref: 'user',
        required: true,
    }, 


content:{
        type: String,
        required:true,
    },

 property: { 
        type: mongoose.Schema.types.objectid,
        ref: 'property',
        default: null,
    }, 

    timestamp:{
        type: Date,
        default:Date.now(),
    },

    isRead:{
        type: Boolean,
        default:Date.now(),
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
    
    const Message = mongoose.model('message', messageSchema)
    module.exports = Message;