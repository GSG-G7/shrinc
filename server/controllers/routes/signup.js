// const { join } = require('path');
// const { hashPassowrd } = require('../utils/hashingPassword');
// const signupSchema = require('../validation/signupValidation');
// const base = require('../../database/config/airtableConnection');
// const cloudinary = require('../../database/config/cloudinaryConnection');

// module.exports = async (req, res) => {
//   try {
//     const therapist = JSON.parse(req.body.data);
//     // const therapistInfo = { ...therapist };
//     const avalibility = JSON.parse(req.body.avalibility);
//     // const values = Object.values(req.files);
//     const { image } = req.files;
//     console.log(image);
//     console.log(therapist);
//     console.log(avalibility);


//     // const z = await cloudinary.uploader.upload(image.path);
//     // console.log(z);
//   } catch (e) {
//     console.log(e);
//   }


//   // console.log('1111', req.files.image.name);
//   // image.mv(join(__dirname, '..', '..', 'uploadImages', image.name), (err) => {
//   //   if (err) console.log(err);
//   // });
//   // const promises = values.map((image) => cloudinary.uploader.upload(image.path));

//   // Promise
//   //   .all(promises)
//   //   .then((results) => res.json(results))
//   //   .catch((err) => console.log(2222, err));


//   // try {
//   //   await signupSchema.validate({ ...therapist, avalibility });
//   //   const hashedPassword = await hashPassowrd(therapist.password);
//   //   delete therapistInfo.confirm;
//   //   delete therapistInfo.terms;
//   //   therapistInfo.password = hashedPassword;
//   //   therapistInfo.avalibility = req.body.avalibility;
//   //   await base('therapist').create([{
//   //     fields: { ...therapistInfo },
//   //   }]);
//   // } catch (err) {
//   //   console.log('error', err);
//   // }
//   // const image = JSON.parse(req.body.image);
//   // console.log('data', therapist);
//   // console.log('avalibility', avalibility);
//   // console.log('image', req.body.image);
// };
