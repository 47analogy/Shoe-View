const User = require('../models/userModel.js')

// create a new user
module.exports.createUser = (req, res, next) => {
  const { username, password } = req.body

  // validate user
  if (!username || !password) {
    res.status(400).send({
      errorMessage: 'Both a username and password are required'
    })
  }

  // create the user to save
  const user = new User({ username, password })

  // save user to database
  user
    .save()
    .then(savedUser => {
      console.log(user)
      res.status(201).send(savedUser)
    })
    .catch(err => {
      res.status(500).send({
        error: 'Error saving the user to the database'
      })
    })
}
