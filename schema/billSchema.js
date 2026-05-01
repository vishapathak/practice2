const { default: mongoose } = require("mongoose");
const { string, number } = require("zod");

const billSchema = new mongoose.Schema({
  user_id:{
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    }
    },
  
  businessDetail: {
    businessName: {
      type: string,
      require: true,
      trim: true,
    },
    address: {
      type: string,
      require: true,
      trim: true,
    },
    contact: {
      type: string,
      require: true,
      trim: true,
    },
    email: {
      type: string,
      require: true,
      trim: true,
    },
    gst: {
      type: string,
      required: false,
      trim: true,
    },
  },
  bill: {
    billNumber: {
      type: string,
      required: true,
      trim: true,
    },
    billDate: {
      type: string,
      required: true,
      trim: true,
    },
  },
  product: {
    productName: {
      type: string,
      required: true,
      trim: true,
    },
    quantity: {
      type: string,
      required: true,
      trim: true,
    },
    perUnit: {
      type: string,
      required: true,
      trim: true,
    },
    totalprice: {
      type: string,
      required: true,
      trim: true,
    },
  },
  taxDetail: {
    gst: {
      type: string,
      required: true,
      trim: true,
    },
    taxPercentage: {
      type: string,
      required: true,
      trim: true,
    },
    totalTax: {
      type: string,
      required: true,
      trim: true,
    },
  },
  payment: {
    bankdetail: {
      type: string,
      required: true,
      trim: true,
    },
    paymentMethod: {
      type: string,
      required: true,
      trim: true,
    },
  },
  totalprice: {
    subtotal: {
      type: string,
      required: true,
      trim: true,
    },
    afterTax: {
      type: string,
      required: true,
      trim: true,
    },
    discount: {
      type: string,
      required: true,
      trim: true,
    },
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("bill", billSchema);
