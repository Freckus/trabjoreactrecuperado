import './App.css';
import * as React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './Navigation';
import { NavBar } from './Navbar';
import { BodyForm } from './Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SubTittle, Dest, Origen } from './Values';
import { Basic, SeleDest } from "./Formulario";
import { Asientos } from './Sit';


export function Nosotros(){
    return(
        <>
        <Header/>
        <br></br> 
        <NavBar/> 
        <br></br> 
        <Container className='text-bg-secondary p-3 rounded' style={{ opacity: '90%' }}>
            <Row>
              <Col sm={12}>
                <SubTittle />
                    </Col>
                </Row>
            </Container>
            </>
        
);}
