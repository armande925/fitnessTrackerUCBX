const router = require('express').Router();

const workoutRoutes = require('./workoutRoutes');

// has '/api' prepended to every route
router.use('/workouts', workoutRoutes);

module.exports = router;