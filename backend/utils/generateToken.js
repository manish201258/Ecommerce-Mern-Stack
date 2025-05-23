const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const generateToken=(id)=>{
    return jwt.sign(
        {
            id:id,
        },
        process.env.AUTH_SECRET,
    {
        expiresIn:'30d'
    }   
 )
}
module.exports = generateToken;