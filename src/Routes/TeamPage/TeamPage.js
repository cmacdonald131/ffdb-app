import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import ApiContext from '../../ApiContext'
import './TeamPage.css'

class TeamPage extends Component {
    static contextType= ApiContext;
    componentDidMount() {
        this.context.getTeams()
    }


    render() {
        return (
            <div className="TeamPage">
                <Navbar />
                <div className="TeamPageSection">
                    <header role="banner">
                        <h1>Your Team Page</h1>
                    </header>
                    <section className="TeamSection">
                        <header>
                            <h2>Team #1</h2>
                        </header>

                        <p>Team lineup section to show players/set lineup</p>
                        <button>Submit</button>
                        <button>Cancel</button>
                        <p>Link section to player articles</p>
                        <p>Link to team site</p>

                    </section>
                    <section className="TeamSection">
                        <header>
                            <h2>Team #2</h2>
                        </header>
                        <p>Team lineup section to show players/set lineup</p>
                        <button>Submit</button>
                        <button>Cancel</button>
                        <p>Link section to player articles</p>
                        <p>Link to team site</p>

                    </section>
                    <section className="TeamSection">
                        <header>
                            <h2>Team #3</h2>
                        </header>
                        <p>Team lineup section to show players/set lineup</p>
                        <button>Submit</button>
                        <button>Cancel</button>
                        <p>Link section to player articles</p>
                        <p>Link to team site</p>
                    </section>
                    
                </div>
                

            </div>
        );
    }
}
export default TeamPage;


