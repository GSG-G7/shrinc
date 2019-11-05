const { clientError } = require('./errors/clientError');
const {
  intialResult, filter, profile, signup, cities,
} = require('./routes');

module.exports = {
  clientError,
  intialResult,
  filter,
  profile,
  signup,
  cities,
};
