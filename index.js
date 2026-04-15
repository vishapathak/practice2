require("dotenv").config();
const express = require("express");
const route = require("./routers/route");
const DB = require("./connection/dbconnect");
//const schema = require("./schema/schema")
const app = express();

app.use(express.json());
app.use(route);

DB();
port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
