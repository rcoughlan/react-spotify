async function hitSpotify(auth, searchType, timeRange, offset, limit) {
    const path = getPath(searchType, timeRange, offset, limit);

    const spotResponse = await fetch(`https://api.spotify.com/v1/me/${path}`, {
        method: 'GET',
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "authorization": `Bearer ${auth}`
        }
    })
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
    const artists = await spotResponse.json();
    return artists;
}

const getPath = (searchType, timeRange, offset, limit) => {
    let path = ''
    let prefix = '';
    let _timeRange = '';
    let _offset = '';
    let _limit = '';

    if (searchType === 'recent-tracks') {
        { limit ? path = `player/recently-played?limit=${limit}` : path = 'player/recently-played' };
        return path;
    } else if (searchType === 'top-artists') {
        { timeRange || offset || limit ? prefix = '?' : prefix = '' };
        { timeRange ? _timeRange = `time_range=${timeRange}&` : _timeRange = '' };
        { offset ? _offset = `offset=${offset}&` : _offset = '' };
        { limit ? _limit = `limit=${limit}&` : _limit = '' };
        return `top/artists${prefix}${_timeRange}${_limit}${_offset}`;
    } else if (searchType === 'top-tracks') {
        { timeRange || offset || limit ? prefix = '?' : prefix = '' };
        { timeRange ? _timeRange = `time_range=${timeRange}&` : _timeRange = '' };
        { offset ? _offset = `offset=${offset}&` : _offset = '' };
        { limit ? _limit = `limit=${limit}&` : _limit = '' };
        return `top/tracks${prefix}${_timeRange}${_limit}${_offset}`;
    }
}

module.exports = { hitSpotify, getPath }