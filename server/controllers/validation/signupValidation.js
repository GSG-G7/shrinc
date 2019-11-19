const yup = require('yup');

module.exports = yup.object({
  fullName: yup.string().min(7).required(),
  email: yup.string().email('Invalid email').required(),
  password: yup.string().min(8, 'Password should be at least 8 character').required(),
  confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  city: yup.string().typeError('City should be a string').required(),
  type: yup.mixed().oneOf(['CBT', 'PD', 'Hu', 'In', 'C', 'STPD'], 'Invalid type therapy').required(),
  priceRange: yup.mixed().oneOf(['£40-60', '£60-80', '£80-100', '£100-130', '£130-160', '£160+'], 'Invalid price range').required(),
  postCode: yup.string().typeError('PostCode should be a string').required(),
  remote: yup.boolean().typeError('Remote should be true or false').required(),
  skype: yup.string().typeError('Skype should be a string'),
  language: yup.array().of(yup.string('Language should be a string').required()).required(),
  insurance: yup.array().of(yup.string('Insurance should be a string').required()).required(),
  approch: yup.string().max(200).required(),
  avalibility: yup.array().required(),
});
