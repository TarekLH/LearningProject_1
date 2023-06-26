const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// cryptor
const bcrypt = require('bcrypt');
// validator
const validator = require('validator');

// user schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {collection: 'Users'});

// static signup method
userSchema.statics.signup = async function(email, password) {
  // validation
  if (!email || !password) { throw Error('All fields must be filled.') };
  if (!validator.isEmail(email)) { throw Error('Email is not valid.') };
  if (!validator.isStrongPassword(password)) { throw Error('Password is not strong enough.') };

  // verify that email is unique
  const exists = await this.findOne({email});
  if (exists) throw Error('Email is not unique.');

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = await this.create({email, password: hash});

  return newUser
};

// creating workout model
const userModel = mongoose.model('userModel', userSchema);

// export model
module.exports = userModel;