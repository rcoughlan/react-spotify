import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SpotifyForm from '../components/SpotifyForm'

describe('SpotifyForm Component', () => {
    let state = [];
    const hitApi = jest.fn(null);

    it('matches the snapshot', () => {
        const handleUpdateFields = jest.fn(x => state.push(x));
        const tree = renderer.create(<SpotifyForm updateFields={handleUpdateFields} hitApi={hitApi} />).toJSON();

        expect(tree).toMatchSnapshot();
    })

    it('has 3 toggle buttons', () => {
        const handleUpdateFields = jest.fn(x => state.push(x));
        const wrapper = shallow(<SpotifyForm updateFields={handleUpdateFields} hitApi={hitApi} />);
        const toggleGroup = wrapper.find('.toggle-search');
        expect(toggleGroup.children()).toHaveLength(3);
    });
 
    it('submit button calls hitApi()', () => {
        const handleUpdateFields = jest.fn(x => state.push(x));
        const wrapper = mount(<SpotifyForm updateFields={handleUpdateFields} hitApi={hitApi} />);
        const form = wrapper.find('form');
        form.simulate('submit');
        expect(hitApi).toHaveBeenCalledTimes(1);
    });

    it('renders text input with label "Enter Your Auth Token"', () => {
        const handleUpdateFields = jest.fn(x => state.push(x));
        const wrapper = mount(<SpotifyForm updateFields={handleUpdateFields} hitApi={hitApi} />);
        const authLabel = wrapper.find('label.auth-input');
        const authInput = wrapper.find('input.auth-input');
        expect(authLabel).toHaveLength(1);
        expect(authLabel.text()).toEqual('Enter your auth token');
        expect(authInput.prop('type')).toEqual('text');
        expect(authInput.prop('name')).toEqual('auth');
    });
    
    it('has toggle buttons for search types with one default active', () => {
        const handleUpdateFields = jest.fn(x => state.push(x));
        const wrapper = mount(<SpotifyForm updateFields={handleUpdateFields} hitApi={hitApi} />);
        const topTracks = wrapper.find('label#top-tracks');
        const topArtists = wrapper.find('label#top-artists');
        const topArtistsInput = topArtists.childAt(0);
        expect(topTracks.hasClass('active')).toBe(true);
        expect(topArtists.hasClass('active')).toBe(false);
        expect(topArtistsInput.prop('type')).toEqual('radio');
    });
    
    it('changes the value of the limit dropdown', () => {
        const handleUpdateFields = jest.fn(x => state.push(x));
        const wrapper = mount(<SpotifyForm updateFields={handleUpdateFields} hitApi={hitApi} />);
        const limit = wrapper.find('select#limit');
        expect(limit).toHaveLength(1);
        limit.simulate('change', { value: ['20'] });
        expect(handleUpdateFields).toBeCalledTimes(1);
    });

    it('changes the value of the time range dropdown', () => {
        const handleUpdateFields = jest.fn(x => state.push(x));
        const wrapper = mount(<SpotifyForm updateFields={handleUpdateFields} hitApi={hitApi} />);
        const timeRange = wrapper.find('select#time-range');
        expect(timeRange).toHaveLength(1);
        timeRange.simulate('change', { value: ['short_term'] });
        expect(handleUpdateFields).toBeCalledTimes(1);
    });

    it('changes the value of the offset dropdown', () => {
        const handleUpdateFields = jest.fn(x => state.push(x));
        const wrapper = mount(<SpotifyForm updateFields={handleUpdateFields} hitApi={hitApi} />);
        const offset = wrapper.find('select#offset');
        expect(offset).toHaveLength(1);
        offset.simulate('change', { value: 10 });
        expect(handleUpdateFields).toBeCalledTimes(1);
    });

})