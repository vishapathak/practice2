
const { default: mongoose } = require('mongoose');
const {string} = require('zod');
const invoiceSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    businessDetail:{
        businessName:{
            type:string,
            require: true,
            trim: true
        },
        address:{
            type:string,
            require: true,
            trim: true
        },
        contact:{
            type: string,
            require: true,
            trim: true
        },
        email:{
            type:string,
            require:true,
            trim:true
        },
        gst:{
            type:string,
            required:false,
            trim:true
        }
    },
    customerDetail:{
        customerName:{
            type:string,
            required:true,
            trim : true
        },
        address:{
            type:string,
            required:true,
            trim: true
        },
         email:{
            type:string,
            require:true,
            trim:true
        },
        contact:{
            type:string,
            required:true,
            trim: true
        },
        gst:{
            type:string,
            required:false,
            trim: true
        }
    },
     invoice:{
        invoiceNumber:{
            type:string,
            required:true,
            trim : true
        },
        invoicedate:{
            type:string,
            required:true,
            trim: true
        },
        dueDate:{
            type:string,
            required:true,
            trim: true
        }
    },
     product:{
        productName:{
            type:string,
            required:true,
            trim : true
        },
        quantity:{
            type:string,
            required:true,
            trim: true
        },
        perUnit:{
            type:string,
            required:true,
            trim: true
        },
        totalprice:{
            type:string,
            required:true,
            trim: true
        }
    },
    taxDetail:{
       gst:{
            type:string,
            required:true,
            trim : true
        },
        taxPercentage:{
         type:string,
            required:true,
            trim: true
        },
        totalTax:{
            type:string,
            required:true,
            trim: true
        }
    },
     payment:{
       bankdetail:{
            type:string,
            required:true,
            trim : true
        },
        paymentMethod:{
            type:string,
            required:true,
            trim: true
        }
    },
    totalprice:{
       subtotal:{
            type:string,
            required:true,
            trim : true
        },
        afterTax:{
            type:string,
            required:true,
            trim: true
        },
        discount:{
             type:string,
            required:true,
            trim: true
        }
    },
    created:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model("invoice",invoiceSchema)