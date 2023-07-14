import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SubTittle, Dest, Origen } from './Values'
import { Basic, SeleDest } from "./Formulario"
import {Asientos} from './Sit'

export function BodyForm() {
    return (
        <Container className='text-bg-secondary p-3 rounded' style={{ opacity: '90%' }}>
            <Row>
                <Col sm={12}>
                    <SubTittle />
                    <SeleDest/>
                    <Basic />
                </Col>
            </Row>
        </Container>
    );
}
