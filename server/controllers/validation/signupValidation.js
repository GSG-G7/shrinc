const yup = require('yup');

module.exports = yup.object({
  fullName: yup.string().min(6).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  city: yup.string().required(),
  typeOfTherapy: yup.string().required(),
  priceRange: yup.string().required(),
  postCode: yup.number().min(3).required(),
  image: yup.mixed().test('fileSize', 'File Size is too large', (value) => value.size <= 10000)
    .test('fileType', 'Unsupported File Format', (value) => ['image/jpg', 'image/jpeg', 'image/gif',
      'image/png'].includes(value.type)).required(),
});
