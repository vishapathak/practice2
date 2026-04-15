const mongoose = require("mongoose");
URI = process.env.DB_URL;

async function connection() {
  try {
    await mongoose.connect(URI);
    console.log(" connect to DB");
  } catch (error) {
    (console.log(" not connected on DB"), process.exit(1));
   console.log(process.env.DB_URL);;
  }
}

module.exports = connection;
