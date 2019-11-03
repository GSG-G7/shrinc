const base = require('../../database/config/airtableConnection');
const { getFilteredTherapist } = require('../utils/filerFunction');

module.exports = async (req, res, next) => {
  try {
    const validData = await base('therapist').select({
      filterByFormula: 'is_valid',
      sort: [{ field: 'fullName', direction: 'asc' }],
      fields: ['fullName', 'type', 'priceRange', 'image', 'approch', 'city'],
    }).all();
    const data = await getFilteredTherapist(req.body.data, validData);
    res.send({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};
