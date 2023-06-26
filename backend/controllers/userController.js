// models
const userModel = require('../models/user');
// Json Web Token
const jwt = require('jsonwebtoken');


const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '3d'});
};

// signin user
const signinUser = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await userModel.signin(email, password);
    // create token
    const token = createToken(user._id);

    res.status(200).json({email, token});

  } catch (error) {
    res.status(400).json({error: error.message});
  };
};

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // create user
    const newUser = await userModel.signup(email, password);
    // create token
    const token = createToken(newUser._id);

    res.status(201).json({email, token});

  } catch (error) {
    res.status(400).json({error: error.message});
  };
};

module.exports = {
  signinUser,
  signupUser
}