const express = require('express');
const routes = require('./routes/apiRoutes.js');

// importing routes
const htmlRouter = require('./routes/htmlRoutes.js');
const apiRouter = require('./routes/apiRoutes.js');

const app = express();

// creating environment variable port
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// using routes
app.use(htmlRouter);
app.use('/api', apiRouter);


// app listener
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });