const clientError = (req, res) => {
  res.status(400).send({ error: { code: 400, msg: 'clientError' }, data: null });
};

module.exports = { clientError };
