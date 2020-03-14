import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RegistrationForm from './RegistrationForm'

describe(`RegistrationForm component`, () => {
  const props = {
    name: 'test-name',
    email: 'test-email',
    username: 'test-username',
    password: 'test-password',
    'data-other': 'test-other-prop'
  }

  it('renders a form.RegistrationForm by default', () => {
    const wrapper = shallow(<RegistrationForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the RegistrationForm given props', () => {
    const wrapper = shallow(<RegistrationForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})