// const User = require('../models/userModel.js')

// // TODO: Error handling

// // create a new user
// exports.createUser = (req, res, next) => {
//   const { username, password } = req.body
//   // validate user
//   if (!username || !password) {
//     res.status(400).send({
//       errorMessage: 'Both a username and password are required'
//     })
//   }
//   // create the user to save
//   const user = new User({ username, password })
//   // save user to database
//   user
//     .save()
//     .then(savedUser => {
//       res.status(201).json({ savedUser: savedUser })
//     })
//     .catch(err => {
//       res.status(500).send({
//         error: 'User not saved to database'
//       })
//     })
// }

// // get all the users
// exports.getAllUsers = (req, res, next) => {
//   User.find()
//     .then(users => {
//       res.status(200).json({ users: users })
//     })
//     .catch(err => {
//       res.status(500).send({
//         error: 'Error getting all users from database'
//       })
//     })
// }

// // get single user by id
// exports.getOneUser = (req, res, next) => {
//   const userID = req.params.id
//   User.findById(userID)
//     .then(user => {
//       res.status(200).json({ user: user })
//     })
//     .catch(err => {
//       res.status(500).send({
//         error: 'Error getting this user from database'
//       })
//     })
// }

// // find id and update user
// exports.updateUser = (req, res, next) => {
//   const user = req.body
//   const userID = req.params.id
//   User.findByIdAndUpdate(userID, user)
//     .then(updatedUser => {
//       res.status(200).json({ updatedUser: user })
//     })
//     .catch(err => {
//       res.status(500).send({
//         error: 'User was not updated'
//       })
//     })
// }

// // find by id and delete user
// exports.removeUser = (req, res, next) => {
//   const user = req.body
//   const userID = req.params.id
//   User.findByIdAndRemove(userID, user)
//     .then(removedUser => {
//       res.status(200).send(userID)
//     })
//     .catch(err => {
//       res.status(500).send({
//         error: 'User was not deleted'
//       })
//     })
// }
