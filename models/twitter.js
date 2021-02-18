const Twitter = require('twitter')

const rulesURL = 'https://api.twitter.com/2/tweets/search/stream/rules'
const streamURL = 'https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=author_id'

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  bearer_token: process.env.TWITTER_BEARER_TOKEN
});

const getTwentyTweets = (req, res, query) => {
  client.get(`https://api.twitter.com/2/tweets/search/recent?query=${query} -is:retweet`, function (error, tweets, response) {
    if (error) throw error;

    res.json(tweets); // This line sends the tweets to the client making the http request. IT MUST be included here otherwise we lose reference to the tweets object
  });
};

module.exports = {
    getTwentyTweets,
}