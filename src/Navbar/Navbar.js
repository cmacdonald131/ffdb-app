import React, { Component } from 'react';
import './Navbar.css';



class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="nav">
                    <a href="#home" className="active">FFDb</a>
                    <div id="myLinks">
                        <a href="#Login" className="navLink">Login</a>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;
