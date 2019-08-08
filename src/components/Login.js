import React from 'react';
import {
    Button,
    Col,
    Row
} from 'react-bootstrap';

const Login = () => {
    return (
        <Row>
            <Col></Col>
            <Col>
                <Button className="login-button" variant="success" size="lg" onClick={() => window.location = 'http://localhost:8888/login'}>Sign Into Spotify</Button>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default Login;