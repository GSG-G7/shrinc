const base = require('../../database/config/airtableConnection');

module.exports = async (req, res, next) => {
  try {
    const data = (await base('therapist').select({
      filterByFormula: 'is_valid',
      sort: [{ field: 'fullName', direction: 'asc' }],
      fields: ['fullName', 'email', 'city', 'types', 'remote', 'priceRange', 'avalibility', 'skype', 'image', 'is_valid', 'postCode'],
      maxRecords: 5,
    }).all());
    res.send({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};
