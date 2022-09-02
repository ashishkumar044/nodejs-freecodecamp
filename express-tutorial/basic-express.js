const express = require('express'); //We get a function back from express
const app = express();  // Invoking express function by assigning it to app


// app.get() -> takes 2 args: 
// 1.path(what resource user is trying to access, 2. callback funtion that invokes everytime user requests the path)
app.get('/', (req, res) => {
    // console.log(req);
    res.status(200).send('Home page');
})

app.get('/about', (req, res) => {
    res.status(200).send('About');
})

// app.post
// app.put
// app.delete
// app.all -> using all the above methods, * -> evry resource trying to access, res will be same
app.all('*', (req, res) => {
    res.status(404).send('<h1>ERROR!!! Page not found</h1>')
})
// app.use -> responsible for middleware
app.use(express.static('./public'))     //We can send static files(images, html, css) using express.static

// app.listen -> listens to the port, same as http server 
app.listen(5000, () => {
    console.log(`Server is listening on port: ${5000}`);
});