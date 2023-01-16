// re-learning Node.js and starting with terminal operations
console.log('Hello World')

// call node server in a new terminal to run the consoles in the terminal 
// CommonJS import which needs a require statement/ 'os' stands for Operating System
const os = require('os')

// getting info about the 'os' that was required-believed to be "operating system"
console.log(os.type())
console.log(os.version())
// homedir = Home Directory
console.log(os.homedir())


// starting the server
const http = require('http')
// the "url of sorts that follows the http"
const hostname = '127.0.0.1';

const port = 3000;

// req=request, re=response
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!/n')
});
// shows in the console what is running 
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});
