const Shoe = require('../models/shoeModel')
const multer = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${new Date().toISOString()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage }).single('shoeImage')

// TODO: Validation
exports.createShoe = (req, res, next) => {
  upload(req, res, (err) => {
  const shoe = new Shoe({
  	shoeName: req.body.shoeName,
  	designer: req.body.designer,
  	price: req.body.price,
  	shoeImage: req.file.filename
  });
    if (!shoe) {
    res.status(400).send({
      errorMessage: 'All fields are required'
    })
  }
  // save shoe to database
  shoe
    .save()
    .then(savedShoe => {
      console.log(savedShoe)
      res.status(201).json({ savedShoe: savedShoe })
    })
    .catch(err => {
      //res.status(500).send({
        //err: 'Shoe not saved to database'
      console.log(err)
    })
  console.log(req.file.path)
     // }  
  // }
 })
}

// get all the shoes
exports.getAllShoes = (req, res, next) => {
  Shoe.find()
    .then(shoes => {
      console.log(shoes)
      res.status(200).json({ shoes: shoes })
    })
    .catch(err => {
      res.status(500).send({
        error: 'Error getting all shoes from database'
      })
    })
}

// get single shoe  by id
exports.getOneShoe = (req, res, next) => {
  const shoeID = req.params.id
  Shoe.findById(shoeID)
    .then(shoe => {
      res.status(200).json({ shoe: shoe })
    })
    .catch(err => {
      res.status(500).send({
        error: 'Error getting this shoe from database'
      })
    })
}

// find by id and update a shoe
exports.updateShoe = (req, res, next) => {
  const shoe = req.body
  const shoeID = req.params.id
  Shoe.findByIdAndUpdate(shoeID, shoe)
    .then(updatedShoe => {
      res.status(200).json({ updatedShoe: shoe })
    })
    .catch(err => {
      res.status(500).send({
        error: 'Shoe was not updated'
      })
    })
}

// find by id and delete a shoe
exports.removeShoe = (req, res, next) => {
  const shoe = req.body
  const shoeID = req.params.id
  Shoe.findByIdAndRemove(shoeID, shoe)
    .then(removedShoe => {
      res.status(200).send(shoeID)
    })
    .catch(err => {
      res.status(500).send({
        error: 'Shoe was not deleted'
      })
    })
}
