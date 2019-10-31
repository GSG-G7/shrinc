const { clientError } = require('./errors/clientError');
const {
  intialResult, filter, profile, signup,
} = require('./routes');

module.exports = {
  clientError,
  intialResult,
  filter,
  profile,
  signup,
};
