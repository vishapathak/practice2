const express = require("express");
const invoiceRoute = express.Router();
const {createInvoice} = require("../controller/invoiceController")


{/**
    endpoint - "v1/create/invoice" this is invoice endpoint through we crerate invoice
    */}
invoiceRoute.post("/v1/create/invoice",createInvoice);

module.exports = invoiceRoute;