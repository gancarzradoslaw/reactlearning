import React, { Component } from 'react';
import './Sidebar.css';

class Social extends Component {
    render() {
        return (
            <div className="sidebar-module">
                <h4>Elsewhere</h4>
                <ol className="list-unstyled">
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                </ol>
            </div>
        );
    }
}

export default Social;
