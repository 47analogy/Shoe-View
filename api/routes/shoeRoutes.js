const express = require('express');
const shoeRouter = express.Router();
const shoeController = require('../controllers/shoeController');
const verifyToken = require('../../middleware/auth');

// add a shoe
shoeRouter.post('/shoes', verifyToken, shoeController.createShoe);

// get all shoes
shoeRouter.get('/shoes', verifyToken, shoeController.getAllShoes);

// display a single shoe
shoeRouter.get('/shoes/:id', verifyToken, shoeController.getOneShoe);

// update a shoe
shoeRouter.put('/shoes/:id', verifyToken, shoeController.updateShoe);

// delete a shoe
shoeRouter.delete('/shoes/:id', verifyToken, shoeController.removeShoe);

module.exports = shoeRouter;
