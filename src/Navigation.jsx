import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Logo } from './Backgournd';
import { Date } from './Funciones';
import { TittleName } from './Values';


export function Header() {
    return (
        /* estructura del classname color radio*/
        <Container>
            <Row className='' style={{ marginTop: '1rem' }}>
                <Col sm={2} className="text-bg-info p-3 rounded " style={{ opacity: '89%' }}>
                    <Logo />
                </Col>
                <Col sm={10} className='text-bg-primary rounded ' style={{ backgroundColor: 'grey', opacity: '89%' }}>
                    <TittleName />
                </Col>

            </Row>
        </Container>
    );
    //d-flex justify-content-center align-items-center

}