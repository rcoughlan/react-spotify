import Song from '../components/Song';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Song Component', () => {

    let songsObject = {
        artist: 'Outkast',
        name: 'SpottieOttieDopaliscious',
        album: 'Aquemini',
        image: 'https://i.scdn.co/image/931c3a43c71a4f2b86653d78050af585029e5623',
        link: 'https://open.spotify.com/album/5ceB3rxgXqIRpsOvVzTG28'

    }

    it('matches the snapshot', () => {
        const tree = renderer.create(<Song artist={songsObject.artist} link={songsObject.link} album={songsObject.album} image={songsObject.image} link={songsObject.link} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render a component with a thumbnail image with correct alt tag', () => {
        const wrapper = shallow(<Song artist={songsObject.artist} link={songsObject.link} album={songsObject.album} image={songsObject.image} link={songsObject.link} />);
        const thumbnail = wrapper.find('.thumbnail');
        expect(thumbnail).toHaveLength(1);

        expect(thumbnail.prop('alt')).toBe(songsObject.album + ' album art');
        expect(thumbnail.prop('src')).toBe(songsObject.image);
    });

    it('card should link to the song on spotify', () => {
        const wrapper = shallow(<Song artist={songsObject.artist} link={songsObject.link} album={songsObject.album} image={songsObject.image} link={songsObject.link} />);
        const card = wrapper.find('.spotify-link');
        expect(card).toHaveLength(1);

        expect(card.prop('href')).toBe(songsObject.link);
        expect(card.prop('target')).toBe('_blank');
    });

    it('should have a song title', () => {
        const wrapper = shallow(<Song artist={songsObject.artist} link={songsObject.link} album={songsObject.album} image={songsObject.image} link={songsObject.link} />);
        const title = wrapper.find('.track-title');
        expect(title).toHaveLength(1)
        expect(title.prop('alt')).toBe('track title: ' + songsObject.song);
    });

    it('should have an artist title', () => {
        const wrapper = shallow(<Song artist={songsObject.artist} link={songsObject.link} album={songsObject.album} image={songsObject.image} link={songsObject.link} />);
        const artist = wrapper.find('.track-artist');
        expect(artist).toHaveLength(1)
        expect(artist.prop('alt')).toBe('artist: ' + songsObject.artist);
    });

    it('should have an album title', () => {
        const wrapper = shallow(<Song artist={songsObject.artist} link={songsObject.link} album={songsObject.album} image={songsObject.image} link={songsObject.link} />);
        const album = wrapper.find('.album-title');
        expect(album).toHaveLength(1)
        expect(album.prop('alt')).toBe('album title: ' + songsObject.album);
    });
});