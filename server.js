const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// connect to the database with Mongoose
require('./config/database');

// load the env vars
require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', require('./routes/api/users'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// Configure to use port 3001 instead of 3000 during
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});