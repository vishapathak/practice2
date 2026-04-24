const invoice = require("../schema/invoiceSchema");
const zo = require('zod');

const invoiceSchema = zo.object({
   businessDetail:  zo.object({
    contact:zo.string().regex(/^\+?[0-9\s-]{10,15}$/,{
        message:"only number allowed",
    }),
    email: zo.string().email({
        message:"Please enter valid email formate",
    })
   }),
    customerDetail: zo.object({
        contact:zo.string().regex(/^\+?[0-9\s-]{10,15}$/,{
        message:"only number allowed",
    }),
    email:zo.string().email({
        message:"Please enter valid email formate",
    })
    }),
    invoice: zo.object(),
    product: zo.object(),
    taxDetail: zo.object(),
    payment: zo.object(),
    totalprice: zo.object()
})
async function createInvoice (req,res){
try {
    const invoiceBody = req.body;
    const validate = invoiceSchema.parse(invoiceBody);
    const Invoice = await invoice. create(validate);
    res.status(201).json({
        data : Invoice,
        message: "create successfully",
    })
} catch (error) {
    res.statsu(500).json({
        message:"error in creating invoice",
        error: JSON.parse(error.message)
    })
}
}
    
module.exports ={ createInvoice};
