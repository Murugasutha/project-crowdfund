const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET

//Register route

async function createNewUser(data){
    let existingUser = await User.findOne({email: data.email});
    if(existingUser) return {error: "User already registered"}

    let newUser = new User({
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role
    });
    await newUser.save();
    return {message: "User created successfully"}
}

router.post('/signup', async(req, res) => {
    const {name, email, password, role} = req.body;

    if (!name || !email || !password || !role) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await createNewUser({name, email, password: hashedPassword, role})
        res.status(201).json(result);
    } catch(error){
        res.status(400).json({error: error.message});
    }
})

//Login route

async function getUser(data){
    let user = await User.findOne({email: data.email});
    if(!user) return {error: "User not register"}

    let match = await bcrypt.compare(data.password, user.password)
    if(!match) return {error: "Invalid password"}

    //Generate JWT token

    const token = jwt.sign(
        {id: user._id, email: user.email, role: user.role},
        SECRET_KEY,
        {expiresIn: '1h'}
    )

    return {message: 'Login Successful', token, user}
    
}

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        let result = await getUser({email, password})
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({Error: error.message})
    }
})

//get user

router.get('/user', async (req, res) => {
    let result = await User.find()
    res.status(200).json(result)
})

module.exports = router;