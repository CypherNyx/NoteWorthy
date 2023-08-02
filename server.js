// require express and set our port
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');


const PORT = process.env.PORT || 3001;

// init Express
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
apps.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});

