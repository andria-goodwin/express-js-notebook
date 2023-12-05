const htmlRouter = require('express').Router();
const path = require('path');

// returns the notes.html file
htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// returns the index.html file
htmlRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = htmlRouter;