const express = require('express');
const routes = require('./routes/apiRoutes.js');

const htmlRouter = require('./routes/htmlRoutes.js');

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(htmlRouter);

// app listener
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });