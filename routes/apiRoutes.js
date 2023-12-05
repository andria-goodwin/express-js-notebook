const apiRouter = require('express').Router();
const path = require('path');
const fs = require('fs');
let uniqid = require('uniqid');

// returns all saved notes as a json file
apiRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

// lets the user 'post' new notes when saving them
apiRouter.post('/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);

    // body for new note
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };

    // pushing new note to the db.json file
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

// lets the user delete notes
apiRouter.delete('/notes/:id', (req, res) => {
  // reading notes form db.json
  let db = JSON.parse(fs.readFileSync('db/db.json'))
  // removing note with id
  let deleteNotes = db.filter(item => item.id !== req.params.id);
  // Rewriting note to db.json
  fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
  res.json(deleteNotes);
})

module.exports = apiRouter;