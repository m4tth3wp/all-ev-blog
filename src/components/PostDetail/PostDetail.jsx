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
        return <>
           <h2 style={{color: "black"}} >{this.state.post.title} </h2>
           <div><img style={{maxWidth:'50%'}} src={this.state.post.image}></img></div>
            <p style={{fontFamily: "Calibri", color:"black"}}>{this.state.post.description}</p>
        </>
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