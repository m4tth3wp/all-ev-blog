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
        const res = await axios.get('http://localhost:3000/api/tweets/')
        this.setState({tweets: res.data});
        console.log(res.data.data[0].text);
    }

    async renderList() {
        const tweets = this.state.tweets.data
        return tweets.map(tweet => {
            console.log(tweet)
            return (
                <>
            hello
            </>
            
            )
        })
    }

    render() {
        return(
        <div>
            hello
            
        
        </div>)
    }
}

export default TwitterFeed;