const serverHandle = require('../app');
const http = require('http');

const part = 8888;

const server = http.createServer(serverHandle);

server.listen(part, () => {console.log(888)});