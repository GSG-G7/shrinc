const yup = require('yup');

module.exports = yup.object({
  fullName: yup.string().min(7).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  city: yup.string().required(),
  type: yup.string().required(),
  priceRange: yup.string().required(),
  postCode: yup.string().required(),
  remote: yup.boolean().required(),
  skype: yup.string(),
  language: yup.array().required(),
  insurance: yup.array().required(),
  approch: yup.string().max(200).required(),
  avalibility: yup.array().required(),
});
