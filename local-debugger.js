const net = require('net');
const fs = require('fs');
const skillInvoker = require('./index.js'); // or the file path of your main handler file
const httpHeaderDelimeter = '\r\n';
const httpBodyDelimeter = '\r\n\r\n';
const host = 'localhost';
const defaultPort = 0;
const lambdaHandlerName = 'handler'; // replace with the name of your main handler function
const portNumber = getAndValidatePortNumber();

const localDebugger = net.createServer();

localDebugger.listen(portNumber, host, () => {
    console.log(`Starting server on port: ${localDebugger.address().port}.`);
});

localDebugger.on('connection', (socket) => {
    console.log(`Connection from: ${socket.remoteAddress}:${socket.remotePort}`);
    socket.on('data', (data) => {
        const body = JSON.parse(data.toString().split(httpBodyDelimeter).pop());
        console.log(`Request envelope: ${JSON.stringify(body)}`);
        skillInvoker[lambdaHandlerName](body, null, (_invokeErr, response) => {
            response = JSON.stringify(response);
            console.log(`Response envelope: ${response}`);
            socket.write(`HTTP/1.1 200 OK${httpHeaderDelimeter}Content-Type: application/json;charset=UTF-8${httpHeaderDelimeter}Content-Length: ${response.length}${httpBodyDelimeter}${response}`);
        });
    });
});

function getAndValidatePortNumber() {
    let portNumber = process.env.PORT || defaultPort;
    if (!portNumber || typeof portNumber !== 'number' || portNumber < 0 || portNumber > 65535) {
        throw new Error(`Invalid port number: ${portNumber}. Please provide a valid port number.`);
    }
    return portNumber;
}