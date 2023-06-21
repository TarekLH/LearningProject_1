const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// workout schema
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, {timestamps: true, collection: 'Workouts'});

// creating workout model
const workoutModel = mongoose.model('workoutModel', workoutSchema);

// export model
module.exports = workoutModel;