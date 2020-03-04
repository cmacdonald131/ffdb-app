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
                            <h3>Why FFDb</h3>
                        </header>
                        <img src={require("../Images/footballfield.jpg")} alt="football_field" className="images"></img>
                        <p>Fantasy Football Database (FFDb) provides a centralized location for you to manage all of your teams.</p>
                    </section>
                    <section className="Card">
                        <header>
                            <h3>Add your teams</h3>
                        </header>
                        <p>[<em>placeholder for screenshot of user homepage</em>]</p>
                        <p>FFDb will store all login and site information so you don't have to.  Our app will provide easy access to all of your teams so you don't have to jump from site to site.</p>
                    </section>
                    <section className="Card">
                        <header>
                            <h3>Keep track of your teams</h3>
                        </header>
                        <p>[<em>placeholder for screenshot of user homepage</em>]</p>
                        <p>Set reminders, check out player information, and matchup data to help you win each week.</p>
                    </section>
                    <section className="Card">
                        <header>
                            <h3>Getting Started</h3>
                        </header>
                        <p>[<em>placeholder for screenshot of user homepage</em>]</p>
                        <p>To get started just click the "Register" tab and fill out some basic information. Once you're registered you'll just have to login to your account, and start add all your fantasy football teams by filling out your league information on the "Add Teams" tab. From your team page you'll be able to see all of your teams, check scores and team progress all from one location!  If you're ready, let's get started!</p>
                    </section>
                    <section className="Card">
                        <header>
                            <h3>Wanna try it out?</h3>
                        </header>
                        <p>[<em>placeholder for screenshot of user homepage</em>]</p>
                        <p>If you'd like to try it out, simply login to our test account.</p>
                        <ul>
                            <li>Username: testTeam</li>
                            <li>Password: Password123!</li>
                        </ul>
                        <p>Once logged in, check out what we have to offer. We know you'll like what you see!</p>
                    </section>
                </div>


            </div>
        );
    }
}
export default About;
