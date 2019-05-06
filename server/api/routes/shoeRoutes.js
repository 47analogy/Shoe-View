const express = require('express')
const shoeRouter = express.Router()
const shoeController = require('../controllers/shoeController')

// add a shoe
shoeRouter.post('/shoes', shoeController.createShoe)

// get all shoes
shoeRouter.get('/shoes', shoeController.getAllShoes)

// display a single shoe
shoeRouter.get('/shoes/:id', shoeController.getOneShoe)

// update a shoe
shoeRouter.put('/shoes/:id', shoeController.updateShoe)

// delete a shoe
shoeRouter.delete('/shoes/:id', shoeController.removeShoe)

module.exports = shoeRouter
