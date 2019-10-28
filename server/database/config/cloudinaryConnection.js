const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Cloudinary_KEY,
  api_secret: process.env.Cloudinary_SECRET,
});

module.exports = cloudinary;
