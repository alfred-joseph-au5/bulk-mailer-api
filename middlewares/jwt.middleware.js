let jwt = require('jsonwebtoken');
const config = require('../utils/config');

let verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  
  if (token) {
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.split(' ')[1];
      }
    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Invalid Token!'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(400).json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  verifyToken
}