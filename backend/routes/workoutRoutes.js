// requirements
const router = require('express').Router();
// controllers
const workoutsController = require('../controllers/workoutsController');

// GET all workouts
router.get('/', workoutsController.getWorkouts);

// GET a single workout
router.get('/:id', workoutsController.getWorkout);

// POST a new workout
router.post('/', workoutsController.addWorkout);

// DELETE a workout
router.delete('/:id', workoutsController.deleteWorkout);

// Update a workout
router.patch('/:id', workoutsController.updateWorkout);

module.exports = router;