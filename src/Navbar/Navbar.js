import React, { Component } from 'react';
import './Navbar.css';



class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="nav">
                    <a href="/" className="active">FFDb</a>
                    <div id="myLinks">
                        <a href="/login" className="navLink">Login</a>
                        <a href="/register" className="navLink">Register</a>
                        <a href="/team-page" className="navLink">Team Page</a>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;
