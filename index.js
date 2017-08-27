'use strict'

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let notes_collection = {};
//GET
app.get('/api/notes', (req, res) => {
  let all_notes = notes_collection;
  res.status(200).send({notes: all_notes});
});

  //para una frase
app.get('/api/notes/:noteId', (req, res) => {
  let noteId = req.params.noteId;
  res.status(200).send(notes_collection[noteId]);

});

//POST: crear notas. Crear favorita
app.post('/api/notes', (req, res) => {
  console.log(req.body);
  let note = req.body.note;
  let last_id = Object.keys(notes_collection).length;
  let id = last_id + 1;
  notes_collection[id] = { note: note };
  res.status(200).send({message:`La frase ${note} ha sido almacenada`});
});

app.post('/api/favorites', (req,res) => {

});

//GET: consultar todas las favoritas
app.get('/api/favorites', (req,res) => {

});
//PUT


app.listen(3000, () => {
  console.log('servidor escuchando en puerto 3000');
});
