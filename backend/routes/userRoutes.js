// requirements
const express = require('express');
// controllers
const { signinUser, signupUser} = require('../controllers/userController');

const router = express.Router();

// signin
router.post('/signin', signinUser);

// signup
router.post('/signup', signupUser);

module.exports = router