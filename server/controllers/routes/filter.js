const { getFilteredTherapist } = require('../utils/filerFunction');

module.exports = async (req, res, next) => {
  try {
    const data = await getFilteredTherapist(req.body);
    res.send({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};
