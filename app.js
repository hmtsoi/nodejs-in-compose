'use strict';

const logger = configureLogs();
const express = require('express');

// Constants
const PORT = 8888;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
  logger.log('info', 'Incoming request %s', 'hello world')
});

startServer();

function startServer () {
    app.listen(PORT, HOST, callback());

    function callback() {
        logger.log('info', 'Server has started on http://%s:%s', HOST, PORT);
    }
}


function configureLogs () {
    var { createLogger, format, transports } = require('winston');
    var logger = createLogger({
        format: format.combine(
            format.splat(),
            format.simple()
        ),
        transports: [new transports.Console()]
    });
    return logger;
}
