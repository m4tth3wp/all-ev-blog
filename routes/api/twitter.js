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

//delete rules
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
  console.log(response.body)
  return response.body
}

function streamTweets() {
  const stream = needle.get(streamURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  stream.on('data', (data) => {
    try {
      const json = JSON.parse(data)
      console.log(json)
    } catch (error) {

    }
  })
}

(async () => {
  let currentRules

  try {
    //get all stream rules
    currentRules = await getRules()
    //delete all stream rules
    await deleteRules(currentRules)
    // set rules based on array above
    await setRules()
    
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
    streamTweets()
})()

module.exports = {
    streamTweets
}