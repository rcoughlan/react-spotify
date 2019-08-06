import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    Col
} from 'react-bootstrap';

class Song extends Component {

    render() {
        return (
            <Col>
                <a href={this.props.link} target="_blank" className="spotify-link">
                    <Card className="song-card">
                        <Card.Img className="thumbnail" alt={this.props.album + ' album art'} variant="top" src={this.props.image} />
                        <Card.Body>
                            <Card.Title className="track-title" alt={'track title: ' + this.props.song}>{this.props.name}</Card.Title>
                            <Card.Text className="track-artist" alt={'artist: ' + this.props.artist}>{this.props.artist}</Card.Text>
                            <Card.Text className="album-title" alt={'album title: ' + this.props.album}>{this.props.album}</Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        );
    }
}

Song.propTypes = {
    album: PropTypes.string,
    artist: PropTypes.string,
    image: PropTypes.string,
    index: PropTypes.number,
    link: PropTypes.string,
    name: PropTypes.string
}

export default Song;