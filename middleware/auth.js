const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');

verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(403).send({
      message: 'No token!',
    });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Not authorized!',
      });
    }
    req.id = decoded.id;
    next();
  });
};

module.exports = verifyToken;
