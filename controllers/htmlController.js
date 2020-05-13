const path = require('path');

module.exports = {
    getHome: (req,res) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, './../public', 'index.html'))
    },
    getExercise: (req,res) => {
        res.sendFile(path.join(__dirname,'./../public','exercise.html'))
    },
    getStats: (req,res) => {
        res.sendFile(path.join(__dirname, './../public', 'stats.html'))
    },
}