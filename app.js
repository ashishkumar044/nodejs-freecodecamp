const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const auth = require('./routes/auth');

// MVC(Model View Controller) pattern. Create routes and controllers to organize and simplify project
// 1.Create a routes folder: To create separate routes for auth(login, registration, logout etc.) and
// another for /api/people)
// 2. Create controllers folder to store all the function that are used as callback in router (used as middlewares)

// define common route for a group using app.use() for routes of one folder
app.use('/api/people', peopleRouter);

app.use('/login', auth);

app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));