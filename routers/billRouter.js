const express = require("express");
const billRouter = express.Router();

const { authenticate} = require("../middleware/userAuthentication")
const{ createbill} = require("../controller/billController")

{/**
    endpoint - "/v1/create/bill" this is bill endpoint through we crerate bill
    */}

billRouter.post("/v1/create/bill",authenticate, createbill);

module.exports = billRouter;