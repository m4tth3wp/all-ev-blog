const Twitter = require('../models/twitter')

async function allTweets(req, res, next) {
        const query = 'tesla';
        Twitter.getTwentyTweets(req, res, query)
      }
    

module.exports = {
    allTweets
}