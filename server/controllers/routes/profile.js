const base = require('../../database/config/airtableConnection');

module.exports = async (req, res, next) => {
  try {
    const data = await base('therapist').find(req.params.id);
    delete (data.fields.password);
    res.send({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};
