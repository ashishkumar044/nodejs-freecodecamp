const express = require('express');
const router = express.Router();    // express router to create routes

// We can use everything after the / since, the route is defined in the app.js file for auth
router.post('/', (req, res) => {
    console.log(req.body);
    const {name} = req.body
    if (name) {
        return res.status(400).send('Please provide your name');
    }
    res.status(401).send('Please provide credentials');
});

module.exports = router;
