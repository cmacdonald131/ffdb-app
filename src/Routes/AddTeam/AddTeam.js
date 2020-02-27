import React, { Component } from 'react';
import config from '../../config'
import './AddTeam.css';
import Navbar from '../../Navbar/Navbar';
import ApiContext from '../../ApiContext';
import uuid from 'uuid/v4';




class AddTeam extends Component {
    static contextType = ApiContext
    onSubmit = (e) => {
        e.preventDefault();
        const teamName = e.target.teamName.value;
        const website = e.target.website.value;
        const username = e.target.username.value;
        const password = e.target.password.value;
        const id = uuid;

        fetch(`${config.API_ENDPOINT}/team-page`, {
            method: "Post",
            body: JSON.stringify({
                name: teamName,
                website: website,
                username: username,
                password: password,
                id: id,
                
            }),
            headers: {
                'Authorization': 'Bearer 4dbf9caa-5768-11ea-8e2d-0242ac130003',
                'content-type': 'application/json'
            }
        })

            .then(note => {
                return note.json()
            }).then(data => {
                this.context.refreshTeam(data)
                this.props.history.push('/')
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
                    <form className="add-team">
                        <section className="form-section">
                            <label>Team Name</label>
                            <input type="text" name="team-name" placeholder="Team Name" required></input>
                        </section>
                        <section className="form-section">
                            <label>Website</label>
                            <input type="text" name="website" placeholder="Enter your team site" required></input>
                        </section>
                        <section className="form-section">
                            <label>Username</label>
                            <input type="text" name="username" placeholder="Enter username" required></input>
                        </section>
                        <section className="form-section">
                            <label>Password</label>
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
