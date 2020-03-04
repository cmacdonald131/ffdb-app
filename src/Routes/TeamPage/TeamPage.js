import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import ApiContext from '../../ApiContext'
import './TeamPage.css'

class TeamPage extends Component {
    static contextType = ApiContext;
    componentDidMount() {
        this.context.getTeams()
    }


    render() {
        const { teams } = this.context;
        return (
            <div className="TeamPage">
                <Navbar />
                <div className="TeamPageSection">
                    <header role="banner">
                        <h1>Your Team Page</h1>
                    </header>
                    {teams.map(team => (
                        <section className="TeamSection">
                            <header>
                                <h2>{team.name}</h2>
                            </header>
                            <ul>
                                <li>{team.username}</li>
                                <li>{team.password}</li>
                                <li>{team.website}</li>
                            </ul>
                            <button
                                className='team__delete'
                                type='button'
                                onClick={e => this.context.deleteTeam(team.id)}
                            >Delete Team</button>
                        </section>

                    ))}


                </div>


            </div>
        );
    }
}
export default TeamPage;


