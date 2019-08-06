import { hitSpotify, getPath } from '../funcs/Api'
const api = require('../funcs/Api');

describe('api', () => {

    let auth = 'BQBaTvgUpn-83viBBxyfo2xhk27CkAgBVlFh5ZUGNv9RWZcatzrsqWJwR39apxJ1wATvY-_IVgcPD_iGb5289YxmQFcAnI_OFpSU8fCoWSYetLoUtQXgEyIiEXLZincI6w20SOBWgQtyAIdMb0cyZ8p5S1lP1jLn0pcMlF_xkz_-z49miSB-evfxNfK9JDjg24YCZjwiIJ_uSbvfaSJPTlVgbIKvs4rHqWQ9KiMI2iY4L5mrCDK3BqXSlwwaC8Ty7yI3n_eeigFRc4zrvmnecWICJql2DyW3';
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