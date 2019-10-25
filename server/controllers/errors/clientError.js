const clientError = (req, res) => {
  res.status(404).send({
    message: 'page not found',
    statusCode: 404,
  });
};

module.exports = { clientError };
