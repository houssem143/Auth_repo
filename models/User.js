const mongoose = require('mongoose')

const Schema = mongoose.Schema


const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    phone:String,
    password:String,
    userRole: {
        type: String,
        default: 'User',
        roles: ['User', 'Admin'],
      },
})


module.exports = User = mongoose.model("User",userSchema)