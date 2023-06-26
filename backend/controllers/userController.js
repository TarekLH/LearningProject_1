// models
const userModel = require('../models/user');


// signin user
const signinUser = async (req, res) => {
  res.json({mssg: 'signin user'})
};

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = await userModel.signup(email, password);
    res.status(201).json({email, newUser});

  } catch (error) {
    res.status(400).json({error: error.message});
  };
};

module.exports = {
  signinUser,
  signupUser
}