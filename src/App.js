import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SpotifyForm from './components/SpotifyForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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

          <SpotifyForm updateFields={this.handleUpdateFields} hitApi={this.hitApi} />

        </Container>
      </div>
    );
  }
}

export default App;
