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


export function Busqueda(){
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
                    <h2>Nosotros</h2>
                    <p className="text-left display-7">
                    Nuestra misión es conectar y acercar a las personas a través de una experiencia única en los viajes australes en ferris en Chile. Nos enorgullece ser una naviera chilena, comprometida con el desarrollo y la promoción del turismo en las regiones australes de nuestro hermoso país.</p>

                </Col>
            </Row>
        </Container>
        </>
        
);}