const express = require('express')
const connectDB = require('./config/connectDB')
const user = require("./routes/user")
const product = require("./routes/product")


const app = express()
app.use(express.json())

connectDB()

app.use("/user",user)
app.use("/product",product)  

 
  
const PORT = 5000



app.listen(PORT,err=>err? console.log(err):console.log(`server is running on port ${PORT}`))