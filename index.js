'use strict'

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let notes_collection = {};

//GET: Para que devuelva todas las frases
app.get('/api/notes', (req, res) => {
  let all_notes = notes_collection;
  res.status(200).send({notes: all_notes});
});

//para que devuelva una frase (según el ID)
app.get('/api/notes/:noteId', (req, res) => {
  let noteId = req.params.noteId;
  res.status(200).send(notes_collection[noteId]);
});

//POST: crear notas, darle un ID y almacenarlas.
app.post('/api/notes', (req, res) => {
  console.log(req.body);
  let note = req.body.note;
  let last_id = Object.keys(notes_collection).length;
  let id = last_id + 1;
  let fav = req.body.fav||false;
  notes_collection[id] = {note: note, fav};
  res.status(200).send({message:`La frase ${note} ha sido almacenada`});
});

//PUT. modificar una nota: marcar una nota como favorita
app.put('/api/notes/fav/:noteId', (req,res) => {
  let noteId = req.params.noteId;
  notes_collection[noteId].fav === true;
  res.status(200).send({message: `La frase ${notes_collection[noteId].note} ha sido guardada como favorita`});
});

//GET: consultar todas las favoritas
app.get('/api/notes/fav', (req,res) => {
  let notes_favorites = [];
  for (var i = 0; i<notes_collection.length; i++) {
    if(notes_collection[i].fav === true){
      notes_favorites.push(notes_collection[i]);
      //notes_favorites += notes_collection[i];
    }
  }
  res.status(200).send(notes_favorites);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});
