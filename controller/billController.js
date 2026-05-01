const bill = require("../schema/billSchema")
const zo = require("zod");

const billSchema = zo.object({
  user_id: zo.object({
    user_id: zo.string(),
  }),
  businessDetail: zo.object({
    businessName: zo.string(),
    address: zo.string(),
    gst: zo.string(),
    contact: zo.string().regex(/^\+?[0-9\s-]{10,15}$/, {
      message: "only number allowed",
    }),

    email: zo.string().email({
      message: "Please enter valid email formate",
    }),
  }),

  bill: zo.object({
    billNumber: zo.string(),
    billDate: zo.string()
  }),
  product: zo.object({
    productName: zo.string(),
    quantity: zo.string(),
    perUnit: zo.string(),
    totalprice: zo.string(),
  }),
  taxDetail: zo.object({
    gst: zo.string(),
    taxPercentage: zo.string(),
    totalTax: zo.string(),
  }),
  payment: zo.object({
    bankdetail: zo.string(),
    paymentMethod: zo.string(),
  }),
  totalprice: zo.object({
    subtotal: zo.string(),
    afterTax: zo.string(),
    discount: zo.string(),
  }),
});

async function createbill(req, res) {
  try {
    const billBody = req.body;
    const validate = billSchema.parse(billBody);
    const Bill = await bill.create(validate);

    res.status(201).json({
      data: Bill,
      message: "Create successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in generating bill",
      error,
    });
  }
}

async function getBillDetail (req, res){
    
}

module.exports = {createbill}
