import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Col,
    Form,
    Row,
    ToggleButtonGroup,
    ToggleButton
} from 'react-bootstrap';

class SpotifyForm extends Component {


    handleChange = (e) => {
        const updateFields = this.props.updateFields;
        e.preventDefault();
        let obj = {};
        obj[e.target.name] = e.target.value;
        updateFields(obj);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.hitApi();
    }

    render() {
        return (

            <Row className="search-form">
                <Col></Col>
                <Col sm="10" md="8" lg="6" className="search">

                    <Form onSubmit={this.onSubmit}>

                        <Form.Group>
                            <Form.Label className="auth-input">Enter your auth token</Form.Label>
                            <Form.Control className="auth-input" type="text" placeholder="Auth Token" name="auth" onChange={this.handleChange} />
                            <Form.Text>This can be found at spotify.api.com</Form.Text>
                        </Form.Group>

                        <Form.Group >
                            <ToggleButtonGroup name="searchType" defaultValue="top-tracks" className="mt-3 toggle-search">
                                <ToggleButton id="top-tracks" variant="success" type="radio" value="top-tracks" onChange={this.handleChange}>Top Tracks</ToggleButton>
                                <ToggleButton id="top-artists" variant="success" type="radio" value="top-artists" onChange={this.handleChange}>Top Artists</ToggleButton>
                                <ToggleButton id="recent-tracks" variant="success" type="radio" value="recent-tracks" onChange={this.handleChange}>Recent Tracks</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        {
                            this.props.searchType === 'recent-tracks' ?
                                <Form.Row>
                                    <Col></Col>
                                        <Form.Group as={Col}>
                                            <Form.Label>Limit</Form.Label>
                                            <Form.Control id="limit" name="limit" as="select" onChange={this.handleChange}>
                                                <option value={false}>none</option>
                                                <option>10</option>
                                                <option>20</option>
                                                <option>30</option>
                                                <option>40</option>
                                                <option>50</option>
                                            </Form.Control>
                                        </Form.Group>
                                    <Col></Col>
                                </Form.Row>
                                :
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Time Range</Form.Label>
                                        <Form.Control id="time-range" className="time-range" name="timeRange" as="select" onChange={this.handleChange}>
                                            <option id="none" value={false}>none</option>
                                            <option id="short_term" value={"short_term"}>short term</option>
                                            <option id="medium_term" value={"medium_term"}>medium term</option>
                                            <option id="long_term" value={"long_term"}>long term</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Offset</Form.Label>
                                        <Form.Control id="offset" name="offset" as="select" onChange={this.handleChange}>
                                            <option value={false}>none</option>
                                            <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>40</option>
                                            <option>50</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Limit</Form.Label>
                                        <Form.Control id="limit" name="limit" as="select" onChange={this.handleChange}>
                                            <option value={false}>none</option>
                                            <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>40</option>
                                            <option>50</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                        }

                        <Button variant="success" type="submit" className="submit">Submit</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        );
    }
}

SpotifyForm.propTypes = {
    hitApi: PropTypes.func.isRequired,
    updateFields: PropTypes.func.isRequired,
    searchType: PropTypes.string
}

export default SpotifyForm;