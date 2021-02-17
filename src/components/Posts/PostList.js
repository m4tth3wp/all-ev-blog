import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PostListItem from './PostListItem';


class PostList extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        this.getPost()
    }

    async getPost() {
        const res = await axios.get('http://localhost:3000/api/posts/')
        this.setState({posts: res.data});
        console.log(res);
    }

    renderList() {
        return this.state.posts.map(post => {
            return (
                <>
            <PostListItem post={post} key={post._id} />
            </>
            
            )
        })
    }

    render() {
        return(
        <div>
            {this.renderList()}
        </div>)
    }
}

export default PostList;