const http = require('http');

// Usually we create a server using http.createServer((req, res) => {callback()});
// Behind the scenes, it uses event emmitter (and many other plugins use event emmitter)

// const server = http.createServer((res, res) => {
//     res.end('Welcome');
// });

// Using event emmiter api
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('Welcome');
});

server.listen(5000);