import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    Col
} from 'react-bootstrap';

class Artist extends Component {

    render() {
        let genres = this.props.genres.map( (genre, index) => 
            <Card.Text key={index} className="genres" alt={'genre ' + genre}>{genre}</Card.Text>
        )

        return (

            <Col>
                <a href={this.props.link} target="_blank" className="spotify-link">
                    <Card className="music-card">
                    <Card.Img className="thumbnail" alt={this.props.name + ' artist image'} variant="top" src={this.props.image} />
                        <Card.Body>
                        <Card.Title className="artist-name" alt={'artist: ' + this.props.name}>{this.props.name}</Card.Title>
                        {genres}
                        </Card.Body>
                    </Card>
                </a>
            </Col>

        );
    }
}

Artist.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    index: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string
}

export default Artist;