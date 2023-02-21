const Product = require("../models/Product")

exports.getProducts = async(req,res) =>{
    try {
        const products= await Product.find()
    //    console.log(products)
        res.send(products)
    } catch (error) {
        res.status(500).json({errors:error.message})
    }
}

exports.addProducts = async(req,res) =>{
    try {
        const newProduct = new Product(req.body)
        await newProduct.save() 
        // console.log(newProduct) 
        res.send(newProduct)
    } catch (error) {
        res.status(500).json({errors:error.message})
        
    }
}

exports.getProduct = async(req,res)=>{
    try {
       const product = await Product.findById(req.params.id) 
    //    console.log(product)
       res.send(product)
    } catch (error) {
        res.status(500).json({errors:error.message})    
    }
}

exports.deleteProducts= async(req,res)=>{
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.send({msg: `${deletedProduct.title} was successfully deleted`});

    } catch (error) {
        res.status(500).json({errors:error.message})    
        
    }
}

exports.editProducts = async(req,res) =>{
    try {
        const editedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {...req.body},
            {new: true})
         res.send(editedProduct)
    
    } catch (error) {
        res.status(500).json({errors:error.message})    
        
    }
}