const express = require('express');
const bodyParser = require('body-parser');
const operationRoutes = require('./routes/operations');

const app = express();

// Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/operations', operationRoutes);

// Handle error
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message, data });
});

module.exports = app;
