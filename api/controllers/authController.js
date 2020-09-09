const jwt = require('jsonwebtoken');
const authConfig = require('../../config/authConfig');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// register a user
exports.registerUser = (req, res, next) => {
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save()
    .then((savedUser) => {
      res.status(201).json({ savedUser });
    })
    .catch((err) => {
      res.status(500).send({
        err: 'User not saved',
      });
    });
};

exports.signIn = (req, res, next) => {
  const userName = req.body.userName;

  User.findOne({ userName })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).send({ message: 'Invalid Credentials!' });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Credentials!',
        });
      }

      const token = jwt.sign(
        { userName: user.userName, userId: user._id },
        authConfig.secret,
        {
          expiresIn: '1hr',
        }
      );

      // const authenticatedUser = {
      //   id: user.id,
      //   userName: user.userName,
      //   email: user.email,
      //   accessToken: token,
      // };

      res.status(200).json({
        id: user._id,
        userName: user.userName,
        email: user.email,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};
