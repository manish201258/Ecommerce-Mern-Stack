const express= require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/users');
const generateToken = require('../utils/generateToken');

const registerUser = async(req,res)=>{
    try {
        const data = req.body;
        
        const findUser = await User.findOne({email:data.email});
        
        if(findUser){
            return res.status(400).json({message:"User already exists"})
        }

        const password = await bcrypt.hash(data.password,10);
        data.password = password;
        const newUser = await User.create(data);

        res.status(201).json({
            token:generateToken(newUser._id),
            msg:"User created successfully",
        })


    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const loginUser = async(req,res)=>{
    try {
        const data = req.body;

        const findUser = await User.findOne({email:data.email})

        const pass = await bcrypt.compare(data.password,findUser.password);

        if(findUser && pass){
            return res.status(200).json({
                token:generateToken(findUser._id),
                msg:"User logged in successfully", 
            })
        }
        
        return res.status(400).json({message:"Invalid credentials"})

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {registerUser,loginUser}