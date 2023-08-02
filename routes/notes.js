const express = require('express');
const path = require('path');

const app = express();

// Get request to render notes.html
app.get("./notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Get request to display index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = app; 