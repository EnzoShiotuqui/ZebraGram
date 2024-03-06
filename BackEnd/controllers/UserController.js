const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET

// Generate user token
const generateToken = (id) => {
    return jwt.sign
        (
            { id }, jwtSecret, {expiresIn:"7d"}
        )
}

// Register User and SignIn
const register = async(req,res) => {
    const {name, email, password } = req.body

    // check if user exist
    const user = await User.findOne({email})
    if(user) {
        res.status(422).json({errors: ["Usuário já cadastrado, por favor insira outro e-mail"]})
        return
    }

    // Generate passord hash
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    // Create user
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    // successfully create
    if(!newUser) {
        res.status(422).json({errors: ["Houve um erro, por favor tente novamente mais tarde"]})
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id)
    })
};

// Login
const login = (req, res) => {
    res.send("login")
}

module.exports = {
    register,
    login,
}