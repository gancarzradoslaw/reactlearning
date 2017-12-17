import React, { Component } from 'react'
import './BlogPost.css';

class BlogPost extends Component {
    render() {
        return (
            <div className="blog-post">
                <h2 className="blog-post-title">{this.props.title}</h2>
                <p className="blog-post-meta">{this.props.date} by <a href="#">{this.props.author}</a></p>
                {this.props.post}
            </div>
        )
    }
}

export default BlogPost;