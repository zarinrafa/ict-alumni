import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const getAllUsers = async (req, res, next) => {

    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        next(err)
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const users = await User.findById(req.params.id)
        res.json(users)
    } catch (err) {
        next(err)
    }
}

export const register = async (req, res, next) => {

    try {
        console.log(req.body)
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const user = new User({
            userid: req.body.userid,
            email: req.body.email,
            fullname: req.body.fullname,
            password: hash,
            batch: req.body.batch,
            gradyear: req.body.gradyear,
            occupation: req.body.occupation,
            bloodgroup: req.body.bloodgroup,
            phonenumber: req.body.phonenumber
        })
        await user.save()
        res.json({ message: 'User created, please Log in' })

    } catch (err) {
        console.log(err.message)
        next(err)

    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ userid: req.body.userid })
        if (!user) {
            return res.status(401).json({ message: 'Wrong credentials' })
        }
        const isMatched = bcrypt.compareSync(req.body.password, user.password)

        if (!isMatched) {
            return res.status(401).json({ message: 'Wrong credentials' })
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

        res.json({ token, id: user._id })

    } catch (err) {
        next(err)
    }
}