const { Workout } = require('./../models');

module.exports = {
  getWorkout: async (req, res) => {
    try {
      const workout = await Workout.find({})
      if (!workout) return res.status(404).json({ error: 'No workouts found' })
      return res.status(200).json(workout)
    } catch (e) {
      return res.status(403).json({ e })
    }
  },
  createWorkout: async (req, res) => {
    try {
      const newWorkout = await Workout().save();
      return res.status(200).json(newWorkout)
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  deleteWorkout: async (req, res) => {
    const { workoutId } = req.params;
    try {
      const workoutToDelete = await Workout.findById(workoutId);
      if (!workoutToDelete) {
        return res.status(401).json({ error: 'No workout with that ID' })
      }
      const deletedWorkout = await Workout.findByIdAndDelete(workoutId);
      return res.status(200).json(deletedWorkout);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  updateWorkout: async (req, res) => {
    const { workoutId } = req.params;
    const data = req.body;
    try {
      const workoutToUpdate = await Workout.findByIdAndUpdate(workoutId,
        {
          $push: {
            exercises: [{
              'type': data.type,
              'name': data.name,
              'duration': data.duration,
              'distance' : data.distance,
              'weight': data.weight,
              'reps': data.reps,
              'sets': data.sets
            }]
          }
        },
        {
          new: true, runValidators: true
        }

      );
      // if (!workoutToUpdate) {
      //   return res.status(401).json({ error: 'No workout with that ID' })
      // }
      return res.status(200).json(workoutToUpdate)
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getRange: async (req, res) => {
      const range = await Workout.find({})
    try {
      return res.status(200).json(range)
    } catch (e) {
      return res.status(403).json({ e })
    }
  },
}

