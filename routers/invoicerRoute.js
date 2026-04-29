const express = require("express");
const invoiceRoute = express.Router();
const {createInvoice,readInvoice} = require("../controller/invoiceController")


{/**
    endpoint - "v1/create/invoice" this is invoice endpoint through we crerate invoice
    */}
   //nvoiceRoute.post("/test");
invoiceRoute.post("/v1/create/invoice",createInvoice);

{/**
    endpoint - "v1/read/invoice" this is from we read the invoice create by user
    */}
invoiceRoute.get("v1/read/invoice",readInvoice);
module.exports = invoiceRoute;