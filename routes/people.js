const express = require('express');
const router = express.Router();    // express router to create routes

// Importing controllers
const {
    getPeople,
    addPeople,
    updatePeople,
    deletePeople
} = require('../controllers/people');

// We can use everything after the / since, the route is defined in the app.js file for auth

// We can setup routes in 2 ways:
// First way
// router.get('/', getPeople);
// router.post('/', addPeople);
// router.put('/:id', updatePeople);
// router.delete('/:id', deletePeople);

// Second way (We can pass chain of functions for common routes)
router.route('/').get(getPeople).post(addPeople);
router.route('/:id').put(updatePeople).delete(deletePeople);


module.exports = router;

