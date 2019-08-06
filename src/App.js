import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import SpotifyForm from './components/SpotifyForm';
import Song from './components/Song';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const songsArray = require('../src/songs.json');
const songsObjects = songsArray.items;
const api = require('./funcs/Api');

class App extends Component {

  state = {
    auth: '',
    searchType: 'top-tracks',
    timeRange: false,
    offset: false,
    limit: false
  };

  handleUpdateFields = (obj) => {
    this.setState(obj);
  }

  hitApi = () => {
    api.hitSpotify(this.state.auth, this.state.searchType, this.state.timeRange, this.state.offset, this.state.limit)
  }

  render() {
    return (
      <div className="App">

        <Container className="wrapper">

          <SpotifyForm updateFields={this.handleUpdateFields} hitApi={this.hitApi} searchType={this.state.searchType} />
          <Row>
            {songsObjects.map((song, index) =>
              <Song
                album={song.album.name}
                artist={song.artists[0].name}
                image={song.album.images[0].url}
                index={index}
                key={song.id}
                link={song.external_urls.spotify}
                name={song.name}
              />
            )}
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
