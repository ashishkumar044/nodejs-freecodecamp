const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Home page')
        res.end()
        console.log('/');
    }
    if(req.url === '/me') {
        res.write('This is me')
        res.end()
        console.log('/me');
    }
    res.end('No page !!')
    console.log('N0 Page');
});

server.listen(5000);