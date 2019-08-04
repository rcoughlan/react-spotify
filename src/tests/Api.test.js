import { hitSpotify, getPath } from '../funcs/Api'
import { doesNotReject } from 'assert';
const api = require('../funcs/Api');

describe('api', () => {

    let auth = 'BQBgd1dD8FkpRFFGJHgL6BNLH5xYN67ynQidgASH-cOLBNik4vyRylerzQcrRzu6opizNMtlwTsI8t8bzFy4trLiVpBDA305R-FCtUiQ7tLRIPzzP4gbmNRglCstzRvggx_xlrkVxBrecNPvSekOxTl0UVnr54fa76blCADUBZSMlpJ2yqyiPLKec73aWK8g09VVgHMnnWkbTpEma_u8IyETmEvzHONWBJq2459Y58FCZarjhHf5N8PtQUzCENCJ-gDeM9e3TYljtCWQvTzxi-Reg6qRPjc_';
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

    //     expect(getPath('recent-tacks', 'me_term', 10, 20)).toBe('player/recently-played?limit=20');
    //     expect(getPath(topTracks, short,-100,50)).toBe('top/tracks?time_range=short_term&limit=50&offset=30&');
    // })

    test('hitApi should return an array of objects', () => {
        return hitSpotify(auth, topArtists, short, 20, 10).then((data) => {
            expect(typeof data).toBe('object');
            // expect(data.items[0]).toBe(3);
            expect(Array.isArray(data.items)).toBe(true);
        });

    });

    // test('hitApi should return an appropriate error', () => {
    //     //invalid auth key
    //     expect(hitSpotify(some parameters)).toThrowError
    // });
}); 