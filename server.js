const express = require('express')
const connectDB = require('./config/connectDB')
const user = require("./routes/user")


const app = express()
app.use(express.json())

connectDB()

app.use("/user",user)

// e-commerce example
// product routes
// app.use("/products",products)
// post user
// app.post('/add_user',callback)

const PORT = 5000



app.listen(PORT,err=>err? console.log(err):console.log(`server is running on port ${PORT}`))