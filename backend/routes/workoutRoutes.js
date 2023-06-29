// requirements
const router = require('express').Router();
// controllers
const { getWorkouts, getWorkout, addWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutsController');
// middlewares
const requireAuth = require('../middlewares/requireAuth')


// require auth for all workouts routes
router.use(requireAuth);

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', addWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// Update a workout
router.patch('/:id', updateWorkout);

module.exports = router;