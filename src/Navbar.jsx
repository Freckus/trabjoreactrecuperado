import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SubTitle } from './Values';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {TittleName} from "./Values"

export function NavBar() {
    return (
        <>
            <Container>
                <Row>
                    <Navbar expand="lg" className="bg-body-tertiary rounded">
                        <Container>
                            <Navbar.Brand href="#home"> Naviera del Sur</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Compra</Nav.Link>
                                    <Nav.Link href="/about">Nostros</Nav.Link>
                                    <Nav.Link href="/Busqueda">Busqueda</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Row>
            </Container>
        </>
    );
}
