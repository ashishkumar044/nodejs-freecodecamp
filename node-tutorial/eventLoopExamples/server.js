const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('This is response');
});

server.listen(5000, () => {
    console.log('Server is listening on port : 5000.....')
});

/*With server.listen, event loop is called to keep listening to incoming request and respond. */