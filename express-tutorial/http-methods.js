const express = require('express');
const app = express();

const products = require('./data');

// static assets
// app.use(express.static('./publicHtmlFolder'));
// parse form data (coming from post request)
// app.use(express.urlencoded({extended: false}));     // Middleware that parses the form data

app.get('/api/heroes', (req, res) => {
    res.status(200).json({success: true, data: products});
});

app.post('/api/person', (req, res) => {
    console.log(req.body);
    const {name} = req.body     // req.body takes body from the url (assuming name is passed from frontend form)
    if (!name) {
        return res.status(400).send('Please provide your name');
    } else {
        return res.status(200).send(`Welcome ${name}`);
    }
    // res.status(401).send('Please provide credentials');
})

app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));