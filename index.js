require("dotenv").config();
const express = require("express");
const route = require("./routers/userRoute");
const invoiceRoute = require("./routers/invoicerRoute");
const billRouter = require("./routers/billRouter");
const DB = require("./connection/dbconnect");

const app = express();

app.use(express.json());
app.use(route);
app.use(invoiceRoute);
app.use(billRouter);

DB();
port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
