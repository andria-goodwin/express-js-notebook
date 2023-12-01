const htmlRouter = require('express').Router();
const path = require('path');



// GET /notes should return the notes.html file.
htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET * should return the index.html file.
htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = htmlRouter;