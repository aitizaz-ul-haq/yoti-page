import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './navbar.css'
import React from 'react';

function Top() {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand className="yoti" href="#">Yoti-World</Navbar.Brand>
            </Navbar>
        </Container>
    );
}

export default Top;