import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import { Section } from '../Utils/Utils'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    console.log('hello world')
    const { history } = this.props
    history.push('/team-page')
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
