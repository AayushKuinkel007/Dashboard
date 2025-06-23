const jwt = require('jsonwebtoken')

const generateToken = (id,role)=>{
    return jwt.sign({id,role},process.JWT_SECRET,{
        expiresIn:'2h'
    })
}

module.exports = generateToken