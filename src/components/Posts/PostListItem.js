import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './PostListItem.css'

class PostListItem extends React.Component {
    constructor(props) {
        super(props)

        this.onShowPost = this.onShowPost.bind(this)
    }
    onShowPost() {
        window.location.pathname = `/posts/${this.props.post._id}`
    }

    render() {
        const {post} = this.props
        return(
            <>
        <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={post.image} />
            <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Button variant="primary" onClick={this.onShowPost}>Read More</Button>
            </Card.Body>
            </Card>
        </>
        )
    }
}

export default PostListItem