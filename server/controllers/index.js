const { clientError } = require('./errors/clientError');
const { signup } = require('./routes');

module.exports = {
  clientError,
  signup,
};
