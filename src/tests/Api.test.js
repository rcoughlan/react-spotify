import { hitSpotify, getPath } from '../funcs/Api'
const api = require('../funcs/Api');

describe('api', () => {

    let auth = 'BQBghaTbkZHCWf1Uljrp1EgVYfYqxnQ5sRsP0mj1eGpU5w-qjaFUNDAOVNZsXqrpda-KzCscWnhX3Zm5LbvWmGxbJKbH7YXlUZLTbD7tqsLWaN8j_UFNRV_Y75FWj6MdeOfnXYu2TRX_PUJhcjETiCtjjiDpokIRbNrCgGp0xS8R_GLgw0dB2-KDOcIkHgrVBsxP0TGxAN-G7Im71k5eU9hJyssJV5ZKPjsGOQmoG6Zu-MCt5xOIKW6rVUSnAI8pujnj8JBAHiPwTshN4xK9lzxRHYAbQ44b';
    let short = 'short_term';
    let med = 'medium_term';
    let topTracks = 'top-tracks';
    let topArtists = 'top-artists';
    let recent = 'recent-tracks';

    test('getPath return a valid path ', () => {

        expect(getPath(recent, med, 10, 20)).toBe('player/recently-played?limit=20');
        expect(getPath(topTracks, short, 30, 50)).toBe('top/tracks?time_range=short_term&limit=50&offset=30&');
        expect(getPath(topTracks, short, false, false)).toBe('top/tracks?time_range=short_term&');
        expect(getPath(topTracks, false, false, false)).toBe('top/tracks');
        expect(getPath(topArtists, short, 30, 50)).toBe('top/artists?time_range=short_term&limit=50&offset=30&');
        expect(getPath(topArtists, short, false, false)).toBe('top/artists?time_range=short_term&');
        expect(getPath(topArtists, false, false, false)).toBe('top/artists');
    });

    // test('getPath return an appropriate error ',() => {

    //     expect(getPath('recent-tacks', 'non_term', 10, 20)).toBe(err);
    //     expect(getPath(topTracks, short,-100,50)).toBe(err);
    // })

    test('hitApi should return an array of objects', () => {
        return hitSpotify(auth, topArtists, short, 20, 10).then((data) => {
            expect(typeof data).toBe('object');
            expect(Array.isArray(data.items)).toBe(true);
        });

    });

    // test('hitApi should return an appropriate error', () => {
    //     //invalid auth key
    //     expect(hitSpotify(some parameters)).toThrowError
    // });
}); 