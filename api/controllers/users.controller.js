import User from '../models/User.model.js'
import bcrypt from 'bcrypt'

export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    if (req.payload.id !== user._id.toString()) {
      return res.status(403).send("Wrong password or username!");
    }
    if (!req.isAdmin) return res.status(403).send("You are not authorized!")

    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 5)
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
    res.status(201).send(updatedUser)
  } catch (err) {
    console.log(err);
  }
};
