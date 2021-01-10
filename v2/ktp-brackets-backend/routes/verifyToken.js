const jwt = require('jsonwebtoken');

// middelware to protect routes
module.exports = function (req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // will give us back the payload which has the user id in db
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};
