import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddTeam from './AddTeam'

describe(`AddTeam component`, () => {
    const props = {
        teamname: 'test-teamname',
        username: 'test-username',
        password: 'test-password',
        website: 'test-website'

    }

    it('renders a .AddTeam by default', () => {
        const wrapper = shallow(<AddTeam />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the AddTeam given props', () => {
        const wrapper = shallow(<AddTeam {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})