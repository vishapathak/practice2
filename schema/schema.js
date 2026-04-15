const { default: mongoose } = require("mongoose");
//const mongos = require("mongoose");
const{string} = require("zod");

const schema = new mongoose.Schema({
     firstName: {
        type: string,
        require: true,
        trim:true
     },
     lastName: {
        type: string,
        require: true,
        trim:true
     },
     email: {
        type: string,
        require: true,
        trim:true
     },
     password: {
        type: string,
        require: true,
        trim:true
     },
     phone: {
        type: string,
        require: true,
        trim:true
     },
     token:{
      type: string,
      default: ' '
     },
     created: {
        type: Date,
        default:Date.now
     }
})
module.exports = mongoose.model("user-reg", schema);