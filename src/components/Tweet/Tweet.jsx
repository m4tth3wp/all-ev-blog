import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Tweet.css'

class Tweet extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {tweet} = this.props
        return(
            <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
                {tweet.text}
            </Card.Text>
            </Card.Body>
            </Card>
        </>
        )
    }
}

export default Tweet