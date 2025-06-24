const User = require("../models/usermodel");
const bcrypt = require('bcrypt');

exports.sendUserData = async (req, res) => {
  try {
    const { fname, lname, dateofbirth, email, password,role } = req.body;

    console.log("Received Data:", req.body);
    
    const userExists = await User.findOne({email})
    if(userExists){
      return res.status(400).json({
        message:'user already exist'
      })
    }
    const hashedPassword = await bcrypt.hash(password,16)

    const user = await User.create({
      fname,
      lname,
      dateofbirth,
      email,
      password: hashedPassword,
      role
    })
    if(user){
      res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      })
    }
    else{
      res.status(400).json({ message: 'Invalid user data' });
    }


  } catch (err) {
    console.error("Error Saving User:", err);
    res.status(400).json({
      message: "User Registration Failed",
      error: err.message,
    });
  }
};

exports.login = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({
        email
    })
    if(!user||!await bcrypt.compare(password,user.password) ){
        return res.status(401).json({error:"invalid credentials"})
    }
    const token = jwt.sign({
        id:user._id
    },jwtSecret,{
        expiresIn:'2h'
    })
    res.json({
        token
    })
}
