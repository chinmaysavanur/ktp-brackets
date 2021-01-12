const User = require('../models/user-model');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10; // complexity hash

const createUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user',
    });
  }

  // validation
  const { error, value } = await registerValidation(body);
  if (error) {
    const error_message = error.details[0].message;
    return res.status(400).json({ error_message });
  }

  // check if user exists already via email
  const emailExists = await User.findOne({ email: body.email });
  if (emailExists) return res.status(400).send('Email already exists');

  // hash password
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(body.password, salt);

  body.password = hashedPassword;
  const user = new User(body);

  if (!user) {
    return res.status(400).json({ success: false, error: err });
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: 'User created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'User not created!',
      });
    });
};

const loginUser = async (req, res) => {
  const body = req.body;

  const { error, value } = await loginValidation(body);
  if (error) {
    const error_message = error.details[0].message;
    return res.status(400).json({ error: error_message });
  }

  // check if email does not exist
  const user = await User.findOne({ email: body.email });
  if (!user) return res.status(400).json({ error: 'Email is not found' });

  // replace error message eventually with 'Email or password is wrong' for privacy

  // check if passowrd is correct
  const validPass = await bcrypt.compare(body.password, user.password);
  if (!validPass) return res.status(400).send({ error: 'Invalid password' });

  // Create JWT with user id and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.header('auth-token', token).send(token);
};

module.exports = {
  createUser,
  loginUser,
};
