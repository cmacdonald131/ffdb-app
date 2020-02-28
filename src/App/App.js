import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import TeamPage from '../Routes/TeamPage/TeamPage';
import AddTeam from '../Routes/AddTeam/AddTeam';
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import TokenService from '../Services/token-service'
import IdleService from '../Services/idle-service'
import AuthApiService from '../Services/auth-api-service'
//import ArticlePage from '../Routes/ArticlePage/ArticlePage'

import './App.css';


class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle)

    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken()
      })
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    
    this.forceUpdate()
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/team-page" component={TeamPage} />
          <Route exact path="/add-team" component={AddTeam} />
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
        </Switch>
      </div>
    );
  }
}
export default App;
