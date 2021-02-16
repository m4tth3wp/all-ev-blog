import React from 'react';

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
            <div >
            <h3>{post.title}</h3>
            <div>{post.description}</div>
            <button onClick={this.onShowPost}>Read More</button>
        </div>
        )
    }
}

export default PostListItem