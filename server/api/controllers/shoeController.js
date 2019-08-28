const Shoe = require('../models/shoeModel');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single('image');

// TODO: Validation
exports.createShoe = (req, res, next) => {
  upload(req, res, err => {
    //   if (err instanceof multer.MulterError) {
    //     return res.status(500).json(err)
    //     res.send('wtf')
    //     console.log('m1')
    // } else if (err) {
    //   res.send('humm')
    //     console.log('m2')
    // } else {
    //   console.log('uploaded')
    // }

    //console.log("Request file ---", req.file);

    if (!req.file) {
      console.log(req);
      console.log('Did not work');
    } else {
      console.log('req', req.file);
    }

    const shoe = new Shoe({
      shoeName: req.body.shoeName,
      designer: req.body.designer,
      price: req.body.price,
      image: req.file.filename,
    });
    if (!shoe) {
      res.status(400).send({
        errorMessage: 'All fields are required',
      });
    }
    console.log('Request file ---', req.file);
    shoe
      .save()
      .then(savedShoe => {
        console.log(savedShoe);
        res.status(201).json({ savedShoe: savedShoe });
      })
      .catch(err => {
        res.status(500).send({
          err: 'Shoe not saved to database',
        });
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
