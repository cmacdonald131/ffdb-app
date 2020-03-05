import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar'
import ApiContext from '../../ApiContext'
import { Button } from '../../Utils/Utils'
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
                                <li>Username: {team.username}</li>
                                <li>Password: {team.password}</li>
                                <li>{team.website}</li>
                            </ul>
                            <Button
                                className='team__delete'
                                type='button'
                                onClick={e => this.context.deleteTeam(team.id)}
                            >Delete Team
                            </Button>
                        </section>

                    ))}
                    <Button 
                        className='add_team'
                        type='button'
                        onClick={e => this.props.history.push('/add-team')}
                    >Add Team
                    </Button>

                </div>

            </div>
        );
    }
}
export default TeamPage;


