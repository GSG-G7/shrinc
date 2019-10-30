const base = require('../../database/config/airtableConnection');
const { getFilteredTherapist } = require('../utils/filerFunction');

module.exports = async (req, res, next) => {
  console.log(req.body);
  try {
    const validData = await base('therapist').select({
      filterByFormula: 'is_valid',
      sort: [{ field: 'fullName', direction: 'asc' }],
    }).all();
    const data = await getFilteredTherapist(req.body.data, validData);
    res.send({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};
