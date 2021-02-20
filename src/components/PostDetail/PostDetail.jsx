import React from 'react';
import axios from 'axios';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';

class PostDetail extends React.Component {
    state = {
        post: {}
    }

    componentDidMount() {
        this.getPostDetail()
    }

    async getPostDetail() {
        const res = await axios.get(`/api/posts/${this.props.match.params.id}`)
        console.log(res)
        this.setState({post: res.data})
    }
    renderPost() {
        return <div>
            {this.state.post.title}
           <img src={this.state.post.image}></img>
            <p>{this.state.post.description}</p>
        </div>
    }

    render() {
        return(
        <Jumbotron>
             <Link to='/'>HOME</Link>
            {this.renderPost()}
        </Jumbotron>)
    }
}

export default PostDetail