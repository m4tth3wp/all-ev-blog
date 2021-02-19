import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class TwitterFeed extends React.Component {
    state = {
        tweets: []
    }
    componentDidMount() {
        this.getTweets()
    }

    async getTweets() {
        const {data} = await axios.get('http://localhost:3000/api/tweets/')
        if (data) {
            const tweets = data.data
            this.setState({tweets})
        }
    }

    render() {
        const {tweets} = this.state
        return(
        <div>
            Twitter Feed list
            {tweets.map(tweet => {
            return (
                <>
            {tweet.text}
            </>
            )
        })}
        </div>)
    }
}

export default TwitterFeed;