import User from '../models/User.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req, res, next) => {

    const hash = bcrypt.hashSync(req.body.password, 5)
    
    const newUser = new User({
        ...req.body,
        password: hash
    })
    try {
        await newUser.save()
        res.status(201).send("User created successfully!")
    } catch (err) {
        res.status(501).send("Something went wrong!");
    }
}
export const login = async(req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if (!user) return res.status(404).send("User not found!")

        const isCorrect = bcrypt.compareSync(req.body.password, user.password)
        if (!isCorrect) return res.status(400).send("Incorrect username or password!");

        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_KEY, {
            expiresIn: "1d"
        })

        const {password, ...info} = user._doc
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).send(info)

    } catch (err) {
        console.log(err)
    }
}
export const logout = async(req, res, next) => {
    try {

    } catch (err) {
        console.log(err)
    }
}