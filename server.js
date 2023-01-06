// re-learnign Node.js and starting with terminal operations
console.log('Hello World')

// call node server in a new terminal to run the consoles in the terminal 
// CommonJS import which needs a require statement/ 'os' stands for Operating System
const os = require('os')

// getting infor about the 'os' that was required
console.log(os.type())
console.log(os.version())
// homedir = Home Directory
console.log(os.homedir())


// starting the server
const http = require('http')

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!/n')
});
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});