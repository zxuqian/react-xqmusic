import React, { Component } from 'react'

class Sidebar extends Component {
    render() {
        return (
            <aside className="Xq-Sidebar">
                <div className="Xq-Logo">
                    <h1>Xqmusic</h1>
                </div>
                <ul className="Xq-Menu">
                    <li>Profile</li>
                    <li>Music</li>
                    <li>Collection</li>
                    <li>Favorites</li>
                    <li>Random</li>
                </ul>
            </aside>
        )
    }
}

export default Sidebar