const User = require('../models/userModel');

// register a user
exports.createUser = (req, res, next) => {
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save()
    .then((savedUser) => {
      res.status(201).json({ savedUser: savedUser });
    })
    .catch((err) => {
      res.status(500).send({
        err: 'User not saved',
      });
    });
};

// get all users
exports.getAllUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => {
      res.status(500).send({
        error: 'Error getting all users',
      });
    });
};

// get a user by id
exports.getUser = (req, res, next) => {
  const userID = req.params.id;
  User.findById(userID)
    .then((user) => {
      res.status(200).json({ user: user });
    })
    .catch((err) => {
      res.status(500).send({
        error: 'Error getting user',
      });
    });
};

// find by id and update a user
exports.updateUser = (req, res, next) => {
  const user = req.body;
  const userID = req.params.id;
  user.updated = Date.now();
  User.findByIdAndUpdate(userID, user)
    .then((updatedUser) => {
      res.status(200).json({ updatedUser: user });
    })
    .catch((err) => {
      res.status(500).send({
        error: 'User was not updated',
      });
    });
};

// find by id and delete a user
exports.removeUser = (req, res, next) => {
  const user = req.body;
  const userID = req.params.id;
  User.findByIdAndRemove(userID, user)
    .then((removedUser) => {
      res.status(200).send(userID);
    })
    .catch((err) => {
      res.status(500).send({
        error: 'User was not deleted',
      });
    });
};
