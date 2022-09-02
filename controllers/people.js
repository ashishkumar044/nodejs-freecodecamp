const products = require('../data');

// Getting all the people
const getPeople = (req, res) => {
    res.status(200).json({success: true, data: products});
};

const addPeople = (req, res) => {
    console.log(req.body);
    const {name} = req.body     // Just example
    if (!name) {
        return res.status(400).send('Please provide your name');
    } else {
        return res.status(200).send(`Welcome ${name}`);
    }
};

const updatePeople = (req, res) => {
    console.log(req.params);
    const { id } = req.params    // req.parmas.id takes id from the url
    // change data of this id
};

const deletePeople = (req, res) => {
    console.log(req.params);
    const { id } = req.params    // req.parmas.id takes id from the url
    // delete data of this id
};

module.exports = {
    getPeople,
    addPeople,
    updatePeople,
    deletePeople,
};