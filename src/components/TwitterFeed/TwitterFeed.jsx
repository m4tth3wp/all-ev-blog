import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Tweet from '../Tweet/Tweet'
import './TwitterFeed.css';


class TwitterFeed extends React.Component {
    state = {
        tweets: []
    }
    componentDidMount() {
        this.getTweets()
    }

    async getTweets() {
        const {data} = await axios.get('/api/tweets/')
        if (data) {
            const tweets = data.data
            this.setState({tweets})
        }
    }

    render() {
        const {tweets} = this.state
        return(
        <div>
            <h3>Twitter Feed</h3>
            {tweets.map(tweet => {
            return (
                <>
            <Tweet tweet={tweet}/>
            </>
            )
        })}
        </div>)
    }
}

export default TwitterFeed;