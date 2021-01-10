const express = require('express');

const AuthCtrl = require('../controllers/auth-ctrl');

const router = express.Router();

router.post('/signup', AuthCtrl.createUser);

router.post('/login', AuthCtrl.loginUser);

module.exports = router;
