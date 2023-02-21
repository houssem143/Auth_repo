const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require('config')
const secret = config.get("secret")



exports.register = async(req,res)=>{
    const {name,email,phone,password,userRole}=req.body

    try {
     const existingUser = await User.findOne({email})
     if (existingUser){
      return  res.status(400).json({msg:"User already exists"})
     }

        const newUser = new User({
            name,
            email,
            phone,
            password,
            userRole
        })

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newUser.password,salt)
        newUser.password = hash
        await newUser.save();
       
        res.send({
            name:newUser.name,
            email:newUser.email,
            phone:newUser.phone,
            userRole:newUser.userRole
        })
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


exports.login = async(req,res)=>{
    const {email,password}=req.body
    try {
        const user = await User.findOne({email})
       
        if (!user) {
            return res.status(400).json({msg:"Email or password invalid"})
        }
        const isMatched = await bcrypt.compare(password,user.password)
        if (!isMatched){
            return res.status(400).json({msg:"Email or password invalid"})
        }
        const payload = {
            id:user._id
        }
        const token = await jwt.sign(payload,secret)
        res.send({
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone
            }
        })
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
exports.getProfile = (req, res) => {
    res.send(req.user)
  };