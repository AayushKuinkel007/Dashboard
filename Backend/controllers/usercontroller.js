const User = require('../models/usermodel')

exports.sendUserData = async(req,res)=>{
    try{
    const {fname,lname,dateofbirth,email,password} = req.body
    const data = new User({fname,lname,dateofbirth,email,password})
    console.log("User Data",data)
    await data.save()
    res.status(201).json({
        message: 'User Register Successful'
    })
    }
    catch(err){
        res.status(400).json({
            message: 'User Registration Failed'
        })
    }
}