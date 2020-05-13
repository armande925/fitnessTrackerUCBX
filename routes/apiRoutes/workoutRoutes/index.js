const router = require('express').Router();
const { getWorkout, createWorkout, deleteWorkout, updateWorkout, getRange } = require('./../../../controllers/workoutController');

// '/api/workout' 
router.route('/workouts')
    .get(getWorkout)
    .post(createWorkout);

router.route('/workouts/:workoutId')
    .delete(deleteWorkout)
    .put(updateWorkout);

router.route('/workouts/range')
    .get(getRange)
module.exports = router;


