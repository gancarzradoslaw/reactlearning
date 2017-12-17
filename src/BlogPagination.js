import React, { Component } from 'react';
import './BlogPagination.css';

class BlogPagination extends Component {
    render() {
        return (
            <nav className="blog-pagination">
                <a className="btn btn-outline-primary" href="#">Older</a>
                <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
            </nav>
        )
    }
}

export default BlogPagination