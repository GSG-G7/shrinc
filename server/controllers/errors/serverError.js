/* eslint-disable no-unused-vars */
const serverError = (err, req, res, next) => {
  res.status(500).send({
    message: 'Internal Server Error',
    statusCode: 500,
  });
};

module.exports = { serverError };
