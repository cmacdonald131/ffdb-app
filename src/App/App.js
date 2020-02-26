import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from '../About/About';
import TeamPage from '../TeamPage/TeamPage';
import AddTeam from '../AddTeam/AddTeam';
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
//import ArticlePage from '../Routes/ArticlePage/ArticlePage'


import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={About} />
        <Route exact path="/team-page" component={TeamPage} />
        <Route exact path="/team-page/add-team" component={AddTeam} />
        <PublicOnlyRoute
          path={'/login'}
          component={LoginForm}
        />
        <PublicOnlyRoute
          path={'/register'}
          component={RegistrationForm}
        />
        <PrivateRoute
              path={'/article/:articleId'}
              //component={ArticlePage}
            />
      </div>
    );
  }
}
export default App;
