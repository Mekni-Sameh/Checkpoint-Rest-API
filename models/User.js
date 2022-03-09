

let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
     username: {
    type: String,
    required: true,
    },
     email: {
    type: String,
    },
    age: {
    type: Number,
    },
  
},
{timestamps: true});
module.exports = mongoose.model("User", userSchema);