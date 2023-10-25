const mongoose = require("mongoose")
require("dotenv").config()

const connected =async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017")
    console.log("connect mongodb");
}
module.exports=connected