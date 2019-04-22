const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController.js');

// add a user
userRouter.post('/users', userController.createUser);

// get all users
userRouter.get('/users', userController.getAllUsers);

// display a single user
userRouter.get('/users/:id', userController.getOneUser);

// update a user
userRouter.put('/users/:id', userController.updateUser);

// delete a user
userRouter.delete('/users/:id', userController.removeUser);

module.exports = userRouter;
