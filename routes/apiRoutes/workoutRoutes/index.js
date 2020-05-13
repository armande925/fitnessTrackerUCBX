const router = require('express').Router();
const { getWorkout, createWorkout, deleteWorkout, updateWorkout } = require('./../../../controllers/workoutController');

// '/api/workout' 
router.route('/workouts')
    .get(getWorkout)
    .post(createWorkout);

router.route('/workouts/:workoutId')
    .delete(deleteWorkout)
    .put(updateWorkout);

module.exports = router;
