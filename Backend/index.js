const express = require('express')
const cors = require('cors')
const path = require('path')
const connectDB = require('./config/db')
const userRouter = require('./routes/userroute')
const app = express()
const PORT = 3000

// middleware
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// db connection
connectDB()

// routes
app.use('/signup',userRouter)

// server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})