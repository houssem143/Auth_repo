const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
title : {
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
imageUrl:String,
price:{
    type:Number,
    required:true
},
quantity:{
    type:Number,
    required:true
}

})


module.exports = Product= mongoose.model("Product",productSchema)