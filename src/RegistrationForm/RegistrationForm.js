import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../Services/auth-api-service'
import Navbar from '../Navbar/Navbar'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {this.props.history.push('/team-page')}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, email, username, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      name: name.value,
      email: email.value,
    })
      .then(user => {
        name.value = ''
        email.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <Navbar />
        <header>
          <h3>It's time to win</h3>
        </header>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='name'>
          <label htmlFor='RegistrationForm__name'>
            Name <Required />
          </label>
          <Input
            name='name'
            type='text'
            required
            id='RegistrationForm__name'>
          </Input>
        </div>
        <div className='username'>
          <label htmlFor='RegistrationForm__username'>
            Username <Required />
          </label>
          <Input
            name='username'
            type='text'
            required
            id='RegistrationForm__username'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div className='email'>
          <label htmlFor='RegistrationForm__email'>
            Email <Required />
          </label>
          <Input
            name='email'
            type='text'
            required
            id='RegistrationForm__email'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}
