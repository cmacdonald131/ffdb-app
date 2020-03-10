import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import { Link } from 'react-router-dom'
import './Navbar.css'
import TokenService from '../Services/token-service'



class Navbar extends Component {
    static contextType = ApiContext

    logout = () => {
        this.context.setUser(null)
        TokenService.clearAuthToken()
    }

    //when successfully logged in the navbar will display a link for the team page and log out.  When logged out it will show links for login and register

    render() {
        let menus
        if (this.context.user) {
            menus = (
                <div id="myLinks">
                    <a href="/team-page" className="navLink">Team Page</a>
                    <Link to='/' onClick={this.logout} className="navLink">Logout</Link>
                </div>
            )
        }

        else {
            menus = (
                <div id="myLinks">
                    <a href="/login" className="navLink">Login</a>
                    <a href="/register" className="navLink">Register</a>
                </div>
            )
        }

        return (
            <div className="Navbar">
                <nav className="nav">
                    <a href="/" className="active">FFDb</a>
                    {menus}
                </nav>
            </div>
        );
    }
}
export default Navbar;
