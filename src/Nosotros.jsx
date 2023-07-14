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
                    <h2>Nosotros</h2>
                    <p className="text-left display-7">
                    Nuestra misión es conectar y acercar a las personas a través de una experiencia única en los viajes australes en ferris en Chile. Nos enorgullece ser una naviera chilena comprometida con el desarrollo y la promoción del turismo en las regiones australes del país. Trabajamos incansablemente para ofrecer un servicio de transporte marítimo seguro, confiable y cómodo, permitiendo a nuestros pasajeros disfrutar de los impresionantes paisajes y descubrir la rica diversidad de la naturaleza chilena.
                    </p><br></br>
                    <p className="text-left display-7">
                    Nos esforzamos por ser una naviera de referencia en Chile, brindando un servicio excepcional que se destaque por la calidez y amabilidad de nuestro equipo. Valoramos la hospitalidad y nos comprometemos a hacer que cada viaje sea una experiencia inolvidable, donde nuestros pasajeros se sientan bienvenidos y atendidos en todo momento. Como empresa chilena, asumimos la responsabilidad de proteger y preservar nuestro entorno natural. 
                    Implementamos prácticas sostenibles y apoyamos iniciativas de conservación para contribuir al cuidado del medio ambiente.
                    </p><br></br>
                    <p text-left display-7>
                    Además, nos enfocamos en ser un socio activo en el desarrollo de las comunidades locales. Trabajamos de la mano con emprendedores y organizaciones locales para promover el crecimiento económico y el bienestar social en las regiones australes de Chile. Buscamos ser parte del legado de cuidado y amor por la naturaleza que caracteriza al país. En resumen, nuestra misión es conectar a las personas con la belleza de Chile a través de viajes excepcionales 
                    en ferris australes, protegiendo el medio ambiente y contribuyendo al desarrollo sostenible de las comunidades locales.
                    </p>
                    <h3>Nuestras rutas</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Puerto Montt</li>
                        <li className="list-group-item">Quellón</li>
                        <li className="list-group-item">Chaitén</li>
                        <li className="list-group-item">Puerto Cisnes</li>
                    </ul>
                    <br></br>
                    <br></br>
                </Col>
            </Row>
        </Container>
        </>
        
);}
