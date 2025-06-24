const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//creating a schema
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "A user must have a fullname"],
        trim: true,
        minlength: [9, "fullname should be longer than 9 leters"],
    },

    email:{
        type: String,
        required:[true," A user must have an email"],
        unique: true,
    },

     Password:{
        type: String,
        required:[true," A user must provide a password"],
        minlength: [8, "password  should be atleast 8 leters"],
        unique: true,
    },

    Confirmpassword:{
        type: String,
        required:[true," Provide password confirmation"],
    }, 

    Language:{
        type: String,
        default: "english",
        enum: ["english", "French", "pigin"]
        },


    Role :{
        type:String,
         enum: {
            values: ["Landlord", "Tenant"," admin"],
             message: " A user can either be a tenant , a landlord"
        },
default: "tenant",
    },

    LandlordStatus :{
        type:String,
         enum: {
            values: ["Verified", "unverified"],
        },
     required: [true," All Landlord should be verified or unverified"],      
default: "unverified",
    },
    createdAt:{
        type: Date,
        default:Date.now(),
    },
     
    updateAt:{
        type: Date,
        default:Date.now(),
    },
     
});
const User = mongoose.model ("user" ,userSchema);
module.exports = User
