import React from 'react';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron';

class PostDetail extends React.Component {
    state = {
        post: {}
    }

    componentDidMount() {
        this.getPostDetail()
    }

    async getPostDetail() {
        const res = await axios.get(`http://localhost:3000/api/posts/${this.props.match.params.id}`)
        console.log(res)
        this.setState({post: res.data})
    }
    renderPost() {
        return <div>
            {this.state.post.title}
            <p>{this.state.post.description}</p>
        </div>
    }

    render() {
        return(
        <Jumbotron>
            {this.renderPost()}
        </Jumbotron>)
    }
}

export default PostDetail