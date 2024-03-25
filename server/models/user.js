const mongoose = reqiuire('mongoose')
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const userModel = mongoose.model("user",userSchema)
module.export=userModel