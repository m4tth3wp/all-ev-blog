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
        const res = await axios.get('/api/posts/')
        this.setState({posts: res.data});
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
            <h3>Articles</h3>
            {this.renderList()}
        </div>)
    }
}

export default PostList;