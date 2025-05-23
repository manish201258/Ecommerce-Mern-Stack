const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dbConnect = async () =>{
    try {
        
        await mongoose.connect(process.env.DB_URL)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Database connection failed",error.message)
    }
}

module.exports = dbConnect;