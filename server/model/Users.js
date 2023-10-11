const mongoose= require('mongoose')


const userSchema = new mongoose.Schema({
    task:String,
    email:String,
    description:String,
    date:String,
    // status:String
})

const userModel = mongoose.model("users", userSchema)

module.exports= userModel