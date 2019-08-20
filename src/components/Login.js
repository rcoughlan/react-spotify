import React from 'react';
import {
    Button,
    Col,
    Row
} from 'react-bootstrap';
import { SSL_OP_NO_TLSv1_1 } from 'constants';

const Login = () => {
    return (
        <Row>
            <Col></Col>
            <Col>
                <Button className="login-button" variant="success" size="lg" onClick={() => 
                    window.location = (window.location.href.indexOf('localhost') > -1)
                        ? 'http://localhost:8888/login'
                        : 'https://spotifyrouter.herokuapp.com/login'
                }>Sign Into Spotify</Button>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default Login;