const tweetsCtrl = require('../../controllers/tweets')
const express = require('express');
const router = express.Router();

router.get('/', tweetsCtrl.allTweets);

module.exports = router