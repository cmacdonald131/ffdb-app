import React, { Component } from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'


class About extends Component {
    render() {
        return (
            <div className="About">
                <Navbar />
                <div className="AboutSection">
                    <section className="Header">
                        <h1>Fantasy Football Database</h1>
                        <h2>We're here to help you dominate your league</h2>
                    </section>
                    <section className="Card">
                        <header>
                            <h3 className="header">Why FFDb</h3>
                        </header>
                        <img src={require("../Images/football_field2.jpg")} alt="football_field" className="images"></img>
                        <p style={{textAlign: "center"}}>Fantasy Football Database (FFDb) provides a centralized location for you to manage all of your teams.</p>
                    </section>
                    <section className="Card">
                        <header>
                            <h3 className="header">Add your teams</h3>
                        </header>
                        <img src={require("../Images/football_image.jpg")} alt="football_field" className="images"></img>
                        <p>FFDb will store all login and site information so you don't have to.  Our app will provide easy access to all of your teams so you don't have to jump from site to site.</p>
                    </section>
                    <section className="Card">
                        <header>
                            <h3 className="header">Keep track</h3>
                        </header>
                        <img src={require("../Images/hurdle.jpg")} alt="hurdle" className="images"></img>
                        <p style={{textAlign: "center"}}>Set reminders, check out player information, and matchup data to help you win each week.</p>
                    </section>
                    <section className="Card">
                        <header>
                            <h3 className="header">Getting Started</h3>
                        </header>
                        <img src={require("../Images/Fantasy-football-image.png")} alt="logo" className="images"></img>
                        <p>To get started just click the "Register" tab and fill out some basic information. Once you're registered you'll just have to login to your account, and start adding all your fantasy football teams by filling out your league information by clicking the "Add Team" button. From your team page you'll be able to see all of your teams, check scores and team progress, all from one location!  If you're ready, let's get started!</p>
                    </section>
                    <section className="Card">
                        <header>
                            <h3 className="header">Wanna try it out?</h3>
                        </header>
                        <img src={require("../Images/keenan.jpg")} alt="go for it" className="images"></img>
                        <p style={{textAlign: "center"}}>If you'd like to try it out, simply login to our test account.</p>
                        <ul>
                            <li>Username: testTeam</li>
                            <li>Password: Password123!</li>
                        </ul>
                        <p style={{textAlign: "center"}}>Once logged in, check out what we have to offer. We know you'll like what you see!</p>
                    </section>
                </div>
            </div>
        );
    }
}
export default About;
