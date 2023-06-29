const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// workout schema
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  pace: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  }
}, {timestamps: true, collection: 'Workouts'});

// creating workout model
const workoutModel = mongoose.model('workoutModel', workoutSchema);

// export model
module.exports = workoutModel;