const http = require('http');
const {readFileSync} = require('fs');

// get all files (Importing html files)
const mePage = readFileSync('./index.html');    // Using sync method because we need these files to be sent as response

const server = http.createServer((req, res) => {
    // console.log('server is requested');     
    console.log(req.url); // Anything attached after the '/'
    // Response must be sent back(should end with res.end()) so that when the port is hit, 
    // there must be a response. Otherwise, no response will be sent and the site will keep loading
    // res.end('I am the response');
    // For particular urls:
    const url = req.url;
    if (url === '/') {
        // text/html(mimetype/mediatype): Defii=ning what are we sending back(html, image, plain text etc.) 
        // Options (html, plain, ). Express takes care of that        
        res.writeHead(200, {'content-type': 'text/html'}) 
        res.write('<h1>Home Page</h1>');
        res.end();
    } else if (url == '/me') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(mePage);   // We can attach html files
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'})   // We should send proper status codes
        res.write('<h1>ERROR!!!! Page not found</h1>');
        res.end();
    }
});

// Port must be specified to a server because that port becomes the address of our server
server.listen(5000);    
