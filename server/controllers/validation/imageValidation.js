const yup = require('yup');

module.exports = yup.object({
  image: yup.mixed().test('fileSize', 'File Size is too large', (value) => value.size <= 10000)
    .test('fileType', 'Unsupported File Format', (value) => ['image/jpg', 'image/jpeg', 'image/gif',
      'image/png'].includes(value.type)).required(),
});
