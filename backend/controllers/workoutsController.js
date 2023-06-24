// models
const workoutModel = require('../models/workout');
// Mongoose
const ObjectID = require('mongoose').Types.ObjectId;


// get all workouts
async function getWorkouts(req, res) {
  try {
    await workoutModel.find({}).sort({createdAt: -1})
      .then(datas => {
        res.status(200).json(datas);
      });
  } catch (error) {
    res.status(400).json({error: error.message});
    console.log(error);
  }
};

// get a single workout
async function getWorkout(req, res) {
  try {
    // Check if the id is valid
    if ( !ObjectID.isValid(req.params.id) ) return res.status(400).send('ID is not valid : ' + req.params.id);

    const workout = await workoutModel.findById({_id: req.params.id})

    if (!workout) return res.status(404).send('Workout with id: ' + req.params.id + ' not found');

    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message});
    console.log(error);
  }
};

// create a new workout
async function addWorkout(req, res) {

  let emptyFields = [];
  if (!req.body.title) { emptyFields.push('title') };
  if (!req.body.distance) { emptyFields.push('distance') };
  if (!req.body.pace) { emptyFields.push('pace') };
  if (!req.body.time) { emptyFields.push('time') };
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields})
  };

  try {
    await new workoutModel(req.body).save()
      .then(datas => {
        res.status(201).json(datas);
      });
  } catch (error) {
    res.status(400).json({error: error.message});
    console.log(error);
  }
};

// delete a workout
async function deleteWorkout(req, res) {
  try {
    // Check if the id is valid
    if ( !ObjectID.isValid(req.params.id) ) return res.status(400).send('ID is not valid: ' + req.params.id);

    const workout = await workoutModel.findOneAndDelete({_id: req.params.id});

    if (!workout) return res.status(404).send('Workout with id: ' + req.params.id + ' not found');

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
    console.log(error);
  }
};

// update a workout
async function updateWorkout(req, res) {
  try {
    // Check if the id is valid
    if ( !ObjectID.isValid(req.params.id) ) return res.status(400).send('ID is not valid: ' + req.params.id);

    const workout = await workoutModel.findOneAndUpdate(
      {_id: req.params.id},
      {...req.body},
    );

    if (!workout) return res.status(404).send('Workout with id: ' + req.params.id + ' not found');

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
    console.log(error);
  }
};


module.exports = {
  getWorkouts,
  getWorkout,
  addWorkout,
  deleteWorkout,
  updateWorkout
};