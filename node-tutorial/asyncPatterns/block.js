const http = require('http');

// When multiple users hit the url here, anyone who hits /about , the others have to wait for
// the for loop to run before taking another request (Not advisable for using this way)

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('This is homepage');
    }
    if(req.url === '/about') {
        // Blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++){
                console.log(i, j);
            }
        }
        res.end('This is about page');
    }
    res.end('Error homepage');
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})