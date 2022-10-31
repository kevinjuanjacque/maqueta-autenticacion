const User = require('../models/users');
const jwt = require('jsonwebtoken');
const test = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

//registrarse
const signUp = async (req, res) => {
  return res.json('signup');
};

//iniciar sesion
const signIn = async (req, res) => {
  return res.json('signin');
};

module.exports = {
  signUp,
  signIn,
  test,
};
