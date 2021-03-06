import React, { Component } from 'react'
import AuthApiService from '../Services/auth-api-service'
import { Button, Input, Required } from '../Utils/Utils'
import Navbar from '../Navbar/Navbar'
import ApiContext from '../ApiContext'
import './LoginForm.css'


export default class LoginForm extends Component {
  static contextType = ApiContext
  static defaultProps = {
  }

  //when a successful login occurs the team page is rendered

  state = { error: null }
  onLoginSuccess = () => {
    this.props.history.push('/team-page')
  }

  //On clicking the Login button when entering correct login information a call is sent to post an authorized login to the server through a JWT 
  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        this.context.setUser(username.value)
        username.value = ''
        password.value = ''
        this.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
        alert("We couldn't log you in with the username and/or password you entered.  Please try again.")
      })
  }

  render() {
    const { error } = this.state
    return (
      <div className="LoginForm_head">

        <form
          className='LoginForm'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div role='alert'>
            {error && <p className='red' style={{color: 'red'}}>{error.message}</p>}
          </div>
          <Navbar />
          <header>
            <h1>Login to your account</h1>
          </header>
          <section className="Login_section">
            <div className='username'>
              <label htmlFor='LoginForm__username' className="label">
                Username <Required />
              </label>
              <Input
                required
                name='username'
                placeholder='Enter Username'
                id='LoginForm__username'>
              </Input>
            </div>
            <div className='password'>
              <label htmlFor='LoginForm__password' className="label">
                Password <Required />
              </label>
              <Input
                required
                name='password'
                type='password'
                placeholder='Enter Password'
                id='LoginForm__password'>
              </Input>
            </div>
            <Button
              className="submit"
              type='submit'
            >Login
            </Button>
          </section>
        </form>
      </div>
    )
  }
}
