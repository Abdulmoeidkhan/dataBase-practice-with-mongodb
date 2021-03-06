const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    passwordHint:{
        type:String,
    }
})

module.exports = User = mongoose.model("user",userSchema)