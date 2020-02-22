import React, { Component } from 'react';
import SignupForm from '../SignupForm/SignupForm';
import './About.css';
import '../SignupForm/SignupForm.css';



class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="AboutSection">
                    <header>
                        <h1>Fantasy Football Database</h1>
                        <h2>We're here to help you dominate your league</h2>
                    </header>
                    <section className="Card">
                        <header>
                            <h3>Why FFDb</h3>
                        </header>
                        <p>[<em>Fantasy Football related image</em>]</p>
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
                    

                </div>
                <SignupForm />

            </div>
        );
    }
}
export default About;
