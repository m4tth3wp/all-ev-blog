const express = require('express');
const http = require('http')
const socketIo = require('socket.io')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const needle = require('needle');
const config = require('dotenv').config()
const TOKEN = process.env.TWITTER_BEARER_TOKEN
const PORT = process.env.PORT || 5000
const twitter = require('../project-4/routes/api/twitter');



// connect to the database with Mongoose
require('./config/database');

// load the env vars
require('dotenv').config();

const app = express();
const server = http.createServer(app)
const io = socketIo(server)

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// Configure to use port 3001 instead of 3000 during
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

// twitter.streamTweets()