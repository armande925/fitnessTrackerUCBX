const router = require('express').Router();

const htmlController = require('./../../controllers/htmlController')

router.route('/')
    .get(htmlController.getHome);

router.route('/exercise')
    .get(htmlController.getExercise);

router.route('/stats')
    .get(htmlController.getStats);

module.exports = router;
