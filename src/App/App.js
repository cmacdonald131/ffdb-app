import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../About/About'
import TeamPage from '../Routes/TeamPage/TeamPage'
import AddTeam from '../Routes/AddTeam/AddTeam'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import PrivateRoute from '../Utils/PrivateRoute'
import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import TokenService from '../Services/token-service'
import IdleService from '../Services/idle-service'
import AuthApiService from '../Services/auth-api-service'
import config from '../config'
//import '../Font/Graduate-Regular.ttf'

import './App.css';
import ApiContext from '../ApiContext';


class App extends Component {
  state = {
    hasError: false,
    teams: [],
    user: TokenService.getAuthToken(),
  }

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

  setUser = (user) => {
    this.setState({
      user
    })
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
  getTeams = () => {
    fetch(`${config.API_ENDPOINT}/teams`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })

      .then(teams => {
        return teams.json()
      }).then(data => {
        this.setState({
          teams: data
        })
      })
  }

  deleteTeam = (id) => {
    fetch(`${config.API_ENDPOINT}/teams/${id}`, {
      method: "Delete",
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    })
    .then(data => {
      this.setState({
        teams: this.state.teams.filter(team => team.id !== id)
      })
    })
  }

  render() {
    return (
      <ApiContext.Provider value={{
        teams: this.state.teams,
        user: this.state.user,
        setUser: this.setUser,
        getTeams: this.getTeams,
        deleteTeam: this.deleteTeam,
      }}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/team-page" component={TeamPage} />
            <Route path="/add-team" component={AddTeam} />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginForm}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationForm}
            />
            <PrivateRoute
              path={'/team-page'}
              component={TeamPage}
            />
            <PrivateRoute
              path={'/add-team'}
              component={AddTeam}
            />
          </Switch>
        </div>
      </ApiContext.Provider>
    );
  }
}
export default App;
