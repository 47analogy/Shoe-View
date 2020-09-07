const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');

// sign in a user
authRouter.post('/signin', authController.signIn);

module.exports = authRouter;
