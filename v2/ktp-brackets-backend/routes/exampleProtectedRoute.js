const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/user-model');

router.get('/', verify, (req, res) => {
  res.json({
    user: req.user,
    randomData: {
      title: 'my first post',
      description: 'data you should not be able to access haha',
    },
  });

  // req's info is from verifyToken from the JWT, and what we actually put in the JWT is defined in auth-ctrl's login feature
  // example query.
  User.findOne({ _id: req.user });
});

module.exports = router;
