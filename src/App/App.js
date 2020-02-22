import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from '../About/About';
import TeamPage from '../TeamPage/TeamPage';
import AddTeam from '../AddTeam/AddTeam';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={About} />
        <Route exact path="/team-page" component={TeamPage} />
        <Route exact path="/team-page/add-team" component={AddTeam} />
      </div>
    );
  }
}
export default App;
