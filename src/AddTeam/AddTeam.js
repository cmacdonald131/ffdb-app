import React, { Component } from 'react';
import './AddTeam.css';



class AddTeam extends Component {
    render() {
        return (
            <div className="AddTeam">
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
