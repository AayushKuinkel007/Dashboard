const mongoose = require('mongoose')
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/dashboard', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("MongoDB Connected")
    }
    catch(err){
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB