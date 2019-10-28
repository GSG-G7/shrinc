const bcrypt = require('bcrypt');

exports.hashPassowrd = (password) => bcrypt.hash(password, 10);
