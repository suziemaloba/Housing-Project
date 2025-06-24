const mongoose= require("mongoose");
const houseSchema = new mongoose.Schema({
    name: { 
        type: string,
        trim: true,
        required: [true, "A house must have a name"],
    },

    Owner: { 
        type: mongoose.types.objectid,
        ref: 'user',
        required: [true, 'A house must belong to a particuler user'],
    }, 



     location: { 
        type: string,
        trim: true,
        required: [true, "A house must have a location"],
    },

     tel: { 
        type: number,
        required: [true, "A house must have some contact informtion"],
    },

     logo: { 
        type: string,
       
    },

     price: { 
        type: Number,
         required: [true, "A house must have a price"],
       
    },

    currency: { 
        type: string,
         required: [true, "A house price should be in a currency"],
       
    },
    currencySymbol: { 
        type: string,
       
    },

    isAvailable: { 
         type: String,
        enum: {
            default: ["available", "unavailable"],
            },
             required: [true, "A house should be seen if available and if it is unavailable it should not be seen"],
        },
         
    Language:{
        type: String,
        enum: {
            value: ["english", "French", "pigin"],
            },
             default: "english",
        },
       
    

     createdAt: { 
        type: Date,
        default: Date.now(), 
    },

     updatedAt: { 
        type: Date,
        default: Date.now(), 
    },

})

const House = mongoose.model('house', houseSchema)
module.exports = House;