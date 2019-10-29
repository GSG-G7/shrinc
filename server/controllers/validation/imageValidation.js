const yup = require('yup');

module.exports = yup.object({
  image: yup.mixed().test('fileSize', 'File Size is too large', (image) => (image.size / 1024 / 1024) < 500)
    .test('fileType', 'Unsupported File Format', (image) => ['image/jpg', 'image/jpeg', 'image/gif',
      'image/png'].includes(image.type)),
});
