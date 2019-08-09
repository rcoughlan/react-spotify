import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import SpotifyForm from './components/SpotifyForm';
import Song from './components/Song';
import Artist from './components/Artist';
import Login from './components/Login';
import queryString from 'query-string'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const api = require('./funcs/Api');

class App extends Component {

  state = {
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
      .then(result => {
        this.setState({
          results: result.items,
          typeSearched: this.state.searchType
        });
      })
  }

  componentDidMount(){
    let parsed = queryString.parse(window.location.search);
    let authObject = {
      auth: parsed.access_token
    }
    this.setState(authObject);
  }

  render() {

    let cardsList = <div></div>
    {
      if (this.state.results && this.state.typeSearched === 'top-tracks') {

        cardsList = this.state.results.map((song, index) =>
          <Song
            album={song.album.name}
            artist={song.artists[0].name}
            image={song.album.images[0].url}
            index={index}
            key={song.id}
            link={song.external_urls.spotify}
            name={song.name}
          />
        )

      } else if (this.state.results && this.state.typeSearched === 'recent-tracks') {
        cardsList = this.state.results.map((song, index) =>
          <Song
            album={song.track.album.name}
            artist={song.track.artists[0].name}
            image={song.track.album.images[0].url}
            index={index}
            key={song.track.id}
            link={song.track.external_urls.spotify}
            name={song.track.name}
          />
        )

      } else if (this.state.results && this.state.typeSearched === 'top-artists') {
        
        cardsList = this.state.results.map((artist, index) =>
          <Artist
            name={artist.name}
            image={artist.images[0].url}
            key={artist.id}
            genres={artist.genres.slice(0,4)}
            link={artist.external_urls.spotify}
          />
        )
      }
    }

    let display = <Login />;
    if(this.state.auth){
      display = <SpotifyForm updateFields={this.handleUpdateFields} hitApi={this.hitApi} searchType={this.state.searchType} />;
    } 

    return (
      <div className="App">

        <Container className="wrapper">

          {display}

          <Row>
            {cardsList}
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
