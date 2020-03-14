import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TeamPage from './TeamPage'

describe(`TeamPage component`, () => {
  const props = {
    name: 'test-team-name',
    username: 'test-username',
    password: 'test-password',
    website: 'test-website'
    
  }

  it('renders a .TeamPage by default', () => {
    const wrapper = shallow(<TeamPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Team Page given props', () => {
    const wrapper = shallow(<TeamPage {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})