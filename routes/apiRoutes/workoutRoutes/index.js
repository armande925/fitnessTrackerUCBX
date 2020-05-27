const router = require('express').Router();
const { getWorkout, createWorkout, deleteWorkout, updateWorkout, getRange } = require('./../../../controllers/workoutController');

// '/api/workouts' 
router.route('/')
    .get(getWorkout)
    .post(createWorkout);

router.route('/:workoutId')
    .delete(deleteWorkout)
    .put(updateWorkout);

router.route('/range')
    .get(getRange)
module.exports = router;


