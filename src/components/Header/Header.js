
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar  fixed="top"  bg="success" variant="dark">
                <Container>
                <Navbar.Brand href="/home">Daffodil IT</Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/teacher">Lecturers</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;