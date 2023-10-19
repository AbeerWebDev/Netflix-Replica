import User from '../models/User.model.js'
import bcrypt from 'bcrypt'

export const updateUser = async (req, res, next) => {
  try {
    if (req.payload.id !== req.params.id) {
      return res.status(403).send("Wrong password or username!");
    }
    if (!req.isAdmin) return res.status(403).send("You are not authorized!")

    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 5)
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
    res.status(201).send(updatedUser)
  } catch (err) {
    res.status(403).send("You can update your account only!")
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    if (req.payload.id !== req.params.id) {
      return res.status(403).send("Wrong password or username!");
    }
    if (!req.isAdmin) return res.status(403).send("You are not authorized!")

    await User.findByIdAndDelete(req.params.id)
    res.status(201).send("User has been deleted!")
  } catch (err) {
    res.status(403).send("You can delete your account only!");
  }
};
