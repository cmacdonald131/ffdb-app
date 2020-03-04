import React, { Component } from 'react'
import config from '../../config'
import './AddTeam.css'
import Navbar from '../../Navbar/Navbar'
import ApiContext from '../../ApiContext'
import TokenService from '../../Services/token-service'
import uuid from 'uuid/v4'


class AddTeam extends Component {
    static contextType = ApiContext
    onSubmit = (e) => {
        e.preventDefault();
        const teamname = e.target.teamname.value;
        const website = e.target.website.value;
        const username = e.target.username.value;
        const password = e.target.password.value;
        const id = uuid;

        fetch(`${config.API_ENDPOINT}/teams`, {
            method: "Post",
            body: JSON.stringify({
                name: teamname,
                website: website,
                username: username,
                password: password,
                id: id,
                
            }),
            headers: {
                'Authorization': `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            }
        })

            .then(team => {
                return team.json()
            }).then(data => {
                this.props.history.push('/team-page')
            })

    }
    render() {
        return (
            <div className="AddTeam">
                <Navbar />
                <header>
                    <h1>Add your team</h1>
                </header>
                <main className="AddTeamSection">
                    <form onSubmit={this.onSubmit} className="add-team">
                        <section className="form-section">
                            <label htmlFor="teamname">Team Name</label>
                            <input type="text" name="teamname" placeholder="Team Name" required></input>
                        </section>
                        <section className="form-section">
                            <label htmlFor="website">Website</label>
                            <input type="text" name="website" placeholder="Enter your team site" required></input>
                        </section>
                        <section className="form-section">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Enter username" required></input>
                        </section>
                        <section className="form-section">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="Enter password" required></input>
                        </section>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                        <button type="cancel">Cancel</button>
                    </form>
                </main>
            </div>
        );
    }
}
export default AddTeam;
