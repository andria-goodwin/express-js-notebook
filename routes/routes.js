const express = require('express');

// Import our modular routers for /html and /api
const htmlRouter = require('./htmlRoutes.js');
// const apiRouter = require('./apiRoutes.js');

const app = express();

app.use(htmlRouter);
// app.use('/api', apiRouter);

module.exports = app;