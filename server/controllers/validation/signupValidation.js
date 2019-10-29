const yup = require('yup');

module.exports = yup.object({
  fullName: yup.string().min(6).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  city: yup.string().required(),
  types: yup.string().required(),
  priceRange: yup.string().required(),
  postCode: yup.number().min(3).required(),
  remote: yup.boolean().required(),
  skype: yup.string(),
  avalibility: yup.array().required(),
});
