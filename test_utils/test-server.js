/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');
const { readFileSync } = require('jsonfile');
const { delay } = require('lodash');
const logger = require('morgan');
const axios = require('axios');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const log = require('./logger');


axios.defaults.headers.common['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1';

const app = express().set('json spaces', 2);
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cookieParser());
app.use(bodyParser.json());

const allowCrossDomain = (_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, client-context, X-HTTP-Method-Override');

    next();
};

app.use(allowCrossDomain);
app.use(logger('combined'));
app.disable('etag');


app.get('/api/v1/auth/user-details', (_req, res, _next) => {
    delay(() => {
        const db = readFileSync(`${__dirname}/data/user-details.json`);
        res.status(200).send(db).end();
    }, 1000, 'User Details Sent!');
});

app.get('/api/v1/ping', (_req, res, _next) => {
    delay(() => {
        res.status(200).send('pong').end();
    }, 200, 'Ping Tests!');
});

app.listen(port, () => {
    log.config('Test server listening on port', port);
});
