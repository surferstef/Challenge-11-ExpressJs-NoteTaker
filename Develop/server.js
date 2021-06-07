const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
  // parse incoming string or array data
  app.use(express.urlencoded({ extended: true }));
  // parse incoming JSON data
  app.use(express.json());

const { dbNotes } = require('./db/db.json');

// get results
app.get('/api/notes', (req, res) => {
  let results = dbNotes;
  res.json(dbNotes);
});

function validateNotes(dbNotes) {
  if (!dbNotes|| !Array.isArray(dbNotes)) {
    return false;
  }
}


function createNewNote(body, notesArray) {
  const addNote = body;

  // if (!Array.isArray(notesArray))
  // notesArray = [];

  // if (!dbNotes|| !Array.isArray(dbNotes)) {
  //   return false;
  // }

if (notesArray.length === 0)
  notesArray.push(0);

body.id = notesArray[0];
notesArray[0]++;

  notesArray.push(addNote);

  fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ dbNotes: notesArray }, null, 2)
  );
  return addNote;
//  console.log(body);
//our function's main code will go here

//return finished code to post route for response
//  return body;

} 
app.post('/api/notes', (req, res) => {
// set id based on what the next index of the array will be
//req.body.id = animals.length.toString();

// add animal to json file and animals array in this function
if (validateNotes(req.body)) {
    res.status(400).send('The notes are not properly formatted.');
}
else {
  const addNote = createNewNote(req.body, dbNotes);
  res.json(addNote);
}

// console.log(req.body);
// res.json(req.body);
});


// app.get('/api/animals', (req, res) => {
//     let results = animals;
//     console.log(req.query)
//     res.json(results);
//   });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});