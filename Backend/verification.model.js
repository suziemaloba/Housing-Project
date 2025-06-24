const mongoose = require ("mongoose");
const verificationSchema = new mongoose.Schema({

    user: { 
            type: mongoose.Schema.types.objectid,
            ref: 'user',
            required: true,
        }, 
        
        nationalID: {type: String},
        propertyDocument: {type: String},
        utilityBill:{type: String},


        status:{
            type: Strinng,
            enum:["approved", "rejected"],
            default: "pending"
        },
     
        addminNote: {type: String},
          submittedAt: {type: Date, default:Date.now},
              reviewedAt: {type: Date}
})
