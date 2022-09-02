/*
    Middlewares are functions that executes during the request to the server. Each middleware function has 
    access to request and response objects. Middlewares are everywhere in express.
*/
const express = require('express');
const app = express();

// Express allows middlewares(functions outside the method) to be passes as an arg.
// Middleware also takes req, res and next as parameter
// next defines the next middleware to pass it on (unless we are sending a response);
// We can send any response through the middleware or pass it on to the next middleware

// We can keep middleware functions in another file to keep the code lean
const logger = require('./logger');
const authorize = require('./authorize');

// If we pass a route, it will be applied to all the routes
// app.use('/api', logger);    //We can manually add logger to all files or we can use app.use for all routes

// We can pass multiple middlewares
app.use([authorize, logger]);   // *Not how authorization is done in express*

// req => middleware => res
app.get('/', logger, (req, res) => {    //We can add multiple middlewares: [middleware1, middleware2]
    console.log(req.user);
    res.send('Home');
});

app.get('/about', (req, res) => {   
    res.send('About');
});

app.get('/api/products', (req, res) => {
    res.send('Product');
});

app.get('/api/items', (req, res) => {
    res.send('Items');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});