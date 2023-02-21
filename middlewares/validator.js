const express = require('express')
const { check, validationResult } = require('express-validator')




exports.registerRules = () => [
 check("name","name field is required").notEmpty(),
 check("email","this field should contain a valid email").isEmail(),
 check("password","password should be at least 6 characters").isLength({min:6})   
]


exports.validator = (req,res,next)=> {
    const errors = validationResult(req)  

    errors.isEmpty() ? next() : res.status(400).json({msg:errors.array().map(el=>el.msg)})
}