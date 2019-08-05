import Album from '../components/Album';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Artist Component', () => {

    let artistObject = {
        artist: 'Arctic Monkeys',
        genres: ['rock', 'indie', 'sheffield indie'],
        artistImage: 'https://i.scdn.co/image/ed0552e9746ed2bbf04ae4bcb5525700ca31522d',
        url: 'https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH'

    }

    it('matches the snapshot', () => {
        const tree = renderer.create(<Artist artist={artistObject.artist} genres={artistObject.genres} artistImage={artistObject.artistImage} url={artistObject.url}/>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render a component with a thumbnail image with correct alt tag', () => {
        const wrapper = shallow(<Songs artist={artistObject.artist} genres={artistObject.genres} artistImage={artistObject.artistImage} url={artistObject.url}/>);
        const thumbnail = wrapper.find('img.thumbnail');

        expect(thumbnail.prop('alt')).toBe(artistObject.artist + ' artist image');
        expect(thumbnail.prop('src')).toBe(artistObject.artistImage);
    });
    
    it('thumbnail image should link to the artist on spotify', () => {
        const wrapper = shallow(<Songs artist={artistObject.artist} genres={artistObject.genres} artistImage={artistObject.artistImage} url={artistObject.url}/>);
        const thumbnail = wrapper.find('img.thumbnail');

        expect(thumbnail.prop('href')).toBe(artistObject.url);
        expect(thumbnail.prop('target')).toBe('_blank');
    });
    
    it('should have an artist title', () => {
        const wrapper = shallow(<Songs artist={artistObject.artist} genres={artistObject.genres} artistImage={artistObject.artistImage} url={artistObject.url}/>);
        const artist = wrapper.find('p.artist');
        expect(artist.prop('alt')).toBe('artist: ' + artistObject.artist);
    });
    
    it('should have an list of genres', () => {
        const wrapper = shallow(<Songs artist={artistObject.artist} genres={artistObject.genres} artistImage={artistObject.artistImage} url={artistObject.url}/>);
        const album = wrapper.find('p.genres');
        expect(album.prop('alt')).toBe('genres: ' + artistObject.genres);
    });
});