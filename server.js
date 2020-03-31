/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const morganLogger = require('morgan');
const winstonLogger = require('winston');

const port = parseInt(process.env.PORT, 10) || 3000;
const isDevEnv = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev: isDevEnv });
const nextRequestHandler = nextApp.getRequestHandler();

const configSettingMiddleware = require('./middlewares/configSettingMiddleware.js');

nextApp.prepare().then(() => {
    // Initialise express
    const server = express();
    // Iniialise basic express middlewares
    server.use(express.json()); // for parsing application/json
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser());

    // Set health endpoing for UI
    server.use('/health', (req, res) => {
        res.sendStatus(200);
    });

    // Add configurations middlware
    server.use(configSettingMiddleware);

    // Add HTTP Logger middlware
    server.use(morganLogger('combined'));

    // Pass all routes to next
    server.all('*', (req, res) => nextRequestHandler(req, res));

    // Starr listening on defined port
    server.listen(port, (err) => {
        if (err) throw err;
        winstonLogger.info(`> Ready on http://localhost:${port}`);
    });
    app.post('/api/world', (req, res) => {
        console.log(req.body);
        res.send(
            `I received your POST request. This is what you sent me: ${req.body.post}`,
        );
    });
});
