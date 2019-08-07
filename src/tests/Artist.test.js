import Artist from '../components/Artist';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Artist Component', () => {

    let artistObject = {
        name: 'Arctic Monkeys',
        genres: ['rock', 'indie', 'sheffield indie'],
        image: 'https://i.scdn.co/image/ed0552e9746ed2bbf04ae4bcb5525700ca31522d',
        link: 'https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH'
    }

    it('matches the snapshot', () => {
        const tree = renderer.create(<Artist name={artistObject.name} genres={artistObject.genres} image={artistObject.image} link={artistObject.link}/>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render a component with a thumbnail image with correct alt tag', () => {
        const wrapper = shallow(<Artist name={artistObject.name} genres={artistObject.genres} image={artistObject.image} link={artistObject.link}/>);
        const thumbnail = wrapper.find('.thumbnail');
        expect(thumbnail).toHaveLength(1);
        
        expect(thumbnail.prop('alt')).toBe(artistObject.name + ' artist image');
        expect(thumbnail.prop('src')).toBe(artistObject.image);
    });
    
    it('card should link to the artist on spotify', () => {
        const wrapper = shallow(<Artist name={artistObject.name} genres={artistObject.genres} image={artistObject.image} link={artistObject.link}/>);
        const thumbnail = wrapper.find('.spotify-link');
        expect(thumbnail).toHaveLength(1);
        
        expect(thumbnail.prop('href')).toBe(artistObject.link);
        expect(thumbnail.prop('target')).toBe('_blank');
    });
    
    it('should have an artist title', () => {
        const wrapper = shallow(<Artist name={artistObject.name} genres={artistObject.genres} image={artistObject.image} link={artistObject.link}/>);
        const artist = wrapper.find('.artist-name');
        expect(artist).toHaveLength(1);
        expect(artist.prop('alt')).toBe('artist: ' + artistObject.name);
    });
    
    // it('should have an list of genres', () => {
    //     const wrapper = shallow(<Artist name={artistObject.name} genres={artistObject.genres} image={artistObject.image} link={artistObject.link}/>);
    //     const genres = wrapper.find('p.genres');
    //     expect(genres.prop('alt')).toBe('genres: ' + artistObject.genres);
    // });
});