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

//   function filterByQuery(query, notesArray) {
//     let filteredResults = notesArray;
//     if query.
//   }

  // Get /Notes to read db.json, return all saved notes to JSON
  app.get('/api/notes', (req, res) => {
   let results = dbNotes;
   console.log(req.query)
  res.json(results);

    // if (req.query)
    //   results = 
    // }
  }); 



  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });