import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
                {post.description}
            </Card.Text>
            <Button variant="primary" onClick={this.onShowPost}>Read More</Button>
            </Card.Body>
            </Card>
        </>
        )
    }
}

export default PostListItem