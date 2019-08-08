import Login from '../components/Login';
import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Artist Component', () => { 

    it('matches the snapshot', () => {
        const tree = renderer.create(<Login />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders a button', () => {
        const wrapper = shallow(<Login />);
        const button = wrapper.find('.login-button');
        expect(button).toHaveLength(1);
    });
    
    
    it('has an onclick function that changes only port not host', () => {
        const wrapper = mount(<Login />);
        const button = wrapper.find('button.login-button');
        expect(button).toHaveLength(1);
        expect(window.location.href).toBe('http://localhost/');
        button.simulate('click');
        expect(window.location.href).toBe('http://localhost/');
    });
});