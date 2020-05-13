const { Workout } = require('./../models');

module.exports = {
  getWorkout: async (req, res) => {
    try {
      const workout = await Workout.find()
      if (!workout) return res.status(404).json({ error: 'No workouts found' })
      return res.status(200).json(workout)
    } catch (e) {
      return res.status(403).json({ e })
    }
  },
  createWorkout: async (req, res) => {
    try {
      const newWorkout = await Workout.create({});
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
    try {
      const workoutToUpdate = await Workout.findById(workoutId);
      if (!workoutToUpdate) {
        return res.status(401).json({ error: 'No workout with that ID' })
      }
      const updateWorkout = await Workout.findByIdAndUpdate(workoutId);
      return res.status(200).json(updateWorkout);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
}