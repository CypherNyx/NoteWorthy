const express = require('express');
const store = require('../db/store');

const app = express();

// Set up GET request to read notes in db storage and then return notes as json
app.get('/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

// Set up POST request for saving a new note then, add it to db storage and then return note to client
app.post('/notes', (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// Set up DELETE route that allows clients to send a DELETE request. If the deletion is successful, the server responds with a JSON or errors detail
app.delete('/notes/:id', (req, res) => {
  store
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = app;
