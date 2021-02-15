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

const rulesURL = 'https://api.twitter.com/2/tweets/search/stream/rules'
const streamURL = 'https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=author_id'

const rules = [{ value: 'coding'}]

//get stream rules
async function getRules() {
  const response = await needle('get', rulesURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  return response.body
}

//set stream rules
async function setRules() {
  const data = {
    add: rules
  }

  const response = await needle('post', rulesURL, data, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }
  })
  return response.body
}

//delete stream rules
async function deleteRules(rules) {
  if(!Array.isArray(rules.data)) {
    return null
  }
  const ids = rules.data.map((rule) => rule.id)

  const data = {
    delete: {
      ids: ids
    }
  }

  const response = await needle('post', rulesURL, data, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }
  })
  return response.body
}

function streamTweets(socket) {
  const stream = needle.get(streamURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    }
  })

  stream.on('data', (data) => {
    try {
      const json = JSON.parse(data)
      // console.log(json)
      socket.emit('tweet', json)
    } catch (error) {}
  })
}

io.on('connection', async () => {
  console.log('client connected')
    let currentRules 

  try {
    // get all stream rules
    currentRules = await getRules()

    // delete all stream rules
    await deleteRules(currentRules)
    await setRules()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

  streamTweets(io)
})


server.listen(PORT, () => console.log(`listenign on port ${PORT}`))
