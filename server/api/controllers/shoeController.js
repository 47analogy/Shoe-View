const Shoe = require('../models/shoeModel');
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

// TODO: create config module
const dotenv = require('dotenv');
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'shoes',
  transformation: [{ width: 500, height: 500, crop: 'limit' }],
});

const upload = multer({ storage: storage }).single('image');

// TODO: Validation
exports.createShoe = (req, res, next) => {
  upload(req, res, err => {
    if (!req.file) {
      res.status(400).send({
        errorMessage: 'Error uploading image',
      });
    }

    const shoe = new Shoe({
      shoeName: req.body.shoeName,
      designer: req.body.designer,
      price: req.body.price,
      image: Date.now() + path.extname(req.file.originalname),
      //   path.extname(req.file.originalname).toString()
    });
    if (!shoe) {
      res.status(400).send({
        errorMessage: 'All fields are required',
      });
    }
    console.log('Request file URL ---', req.file.url);
    console.log('Request file ID ---', req.file.public_id);

    // save shoe to database
    shoe
      .save()
      .then(savedShoe => {
        console.log('DataBase', savedShoe);
        res.status(201).json({ savedShoe: savedShoe });
      })
      .catch(err => {
        //res.status(500).send({
        //err: 'Shoe not saved to database'
        console.log(err);
      });
  });
};

// get all the shoes
exports.getAllShoes = (req, res, next) => {
  Shoe.find()
    .then(shoes => {
      //console.log(shoes)
      res.status(200).json({ shoes: shoes });
    })
    .catch(err => {
      res.status(500).send({
        error: 'Error getting all shoes from database',
      });
    });
};

// get single shoe  by id
exports.getOneShoe = (req, res, next) => {
  const shoeID = req.params.id;
  Shoe.findById(shoeID)
    .then(shoe => {
      res.status(200).json({ shoe: shoe });
    })
    .catch(err => {
      res.status(500).send({
        error: 'Error getting this shoe from database',
      });
    });
};

// find by id and update a shoe
exports.updateShoe = (req, res, next) => {
  const shoe = req.body;
  const shoeID = req.params.id;
  Shoe.findByIdAndUpdate(shoeID, shoe)
    .then(updatedShoe => {
      res.status(200).json({ updatedShoe: shoe });
    })
    .catch(err => {
      res.status(500).send({
        error: 'Shoe was not updated',
      });
    });
};

// find by id and delete a shoe
exports.removeShoe = (req, res, next) => {
  const shoe = req.body;
  const shoeID = req.params.id;
  Shoe.findByIdAndRemove(shoeID, shoe)
    .then(removedShoe => {
      res.status(200).send(shoeID);
    })
    .catch(err => {
      res.status(500).send({
        error: 'Shoe was not deleted',
      });
    });
};
