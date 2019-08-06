import Song from '../components/Song';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Song Component', () => {

    let songsObject = {
        artist: 'Outkast',
        song: 'SpottieOttieDopaliscious',
        album: 'Aquemini',
        albumArt: 'https://i.scdn.co/image/931c3a43c71a4f2b86653d78050af585029e5623',
        url: 'https://open.spotify.com/album/5ceB3rxgXqIRpsOvVzTG28'

    }

    it('matches the snapshot', () => {
        const tree = renderer.create(<Song artist={songsObject.artist} song={songsObject.song} album={songsObject.album} albumArt={songsObject.albumArt} url={songsObject.url}/>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render a component with a thumbnail image with correct alt tag', () => {
        const wrapper = shallow(<Song artist={songsObject.artist} song={songsObject.song} album={songsObject.album} albumArt={songsObject.albumArt} url={songsObject.url}/>);
        const thumbnail = wrapper.find('img.thumbnail');

        expect(thumbnail.prop('alt')).toBe(songsObject.album + ' album art');
        expect(thumbnail.prop('src')).toBe(songsObject.albumArt);
    });
    
    it('thumbnail image should link to the song on spotify', () => {
        const wrapper = shallow(<Song artist={songsObject.artist} song={songsObject.song} album={songsObject.album} albumArt={songsObject.albumArt} url={songsObject.url}/>);
        const thumbnail = wrapper.find('img.thumbnail');

        expect(thumbnail.prop('href')).toBe(songsObject.url);
        expect(thumbnail.prop('target')).toBe('_blank');
    });
    
    it('should have a song title', () => {
        const wrapper = shallow(<Song artist={songsObject.artist} song={songsObject.song} album={songsObject.album} albumArt={songsObject.albumArt} url={songsObject.url}/>);
        const title = wrapper.find('p.track-title');
        expect(title.prop('alt')).toBe('track title: ' + songsObject.song);
    });
    
    it('should have an artist title', () => {
        const wrapper = shallow(<Song artist={songsObject.artist} song={songsObject.song} album={songsObject.album} albumArt={songsObject.albumArt} url={songsObject.url}/>);
        const artist = wrapper.find('p.track-artist');
        expect(artist.prop('alt')).toBe('artist: ' + songsObject.artist);
    });
    
    it('should have an album title', () => {
        const wrapper = shallow(<Song artist={songsObject.artist} song={songsObject.song} album={songsObject.album} albumArt={songsObject.albumArt} url={songsObject.url}/>);
        const album = wrapper.find('p.album-title');
        expect(album.prop('alt')).toBe('album title: ' + songsObject.album);
    });
});