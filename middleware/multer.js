const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config();

// TODO: create cloudinary config module
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  url: process.env.CLOUDINARY_URL, // deployment
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'shoes',
  transformation: [{ width: 500, height: 500, crop: 'limit' }],
});

const upload = multer({ storage: storage }).single('image');

module.exports = upload;
