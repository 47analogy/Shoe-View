const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController')

// add a user
userRouter.post('/users', userController.createUser)

// TODO: reconfigure to use controller
// get all users
userRouter.get('/users', (req, res, next) => {
  res.status(200).json({ message: 'I can get all the users' })
})

// display a single user
userRouter.get('/users/:UsersID', (req, res, next) => {
  const id = req.params.userID
  res.status(200).json({ message: 'get single user', ID: id })
})

// update a user
userRouter.put('/users/:userID', (req, res, next) => {
  const id = req.params.userID
  res.status(200).json({ message: 'update user' })
})

// delete a user
userRouter.delete('/users/:userID', (req, res, next) => {
  const id = req.params.userID
  res.status(200).json({ message: 'delete user' })
})

module.exports = userRouter
