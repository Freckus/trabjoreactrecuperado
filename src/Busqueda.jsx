import "./App.css";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./Navigation";
import { NavBar } from "./Navbar";
import { BodyForm } from "./Body";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SubTittle, Dest, Origen } from "./Values";
import { Basic, SeleDest } from "./Formulario";
import { Asientos } from "./Sit";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export function Busqueda() {
  return (
    <>
      <Header />
      <br></br>
      <NavBar />
      <br></br>
      <Container
        className="text-bg-secondary p-3 rounded"
        style={{ opacity: "90%" }}
      >
        <Row>
          <Col sm={12}>
            <SubTittle />
            <br></br>
            <h2>Buscar Pasaje</h2>

            <br></br>
            <br></br>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Busqueda de pasajes</Form.Label>
                <Form.Control type="text" placeholder="ingresar rut o id de pasaje" />
                <Form.Text className="text-muted">
                  
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Buscar
              </Button>
              
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export function Todos(){
  return (
    <>
      <Header />
      <br></br>
      <NavBar />
      <br></br>
      <Container
        className="text-bg-secondary p-3 rounded"
        style={{ opacity: "90%" }}
      >
        <Row>
          <Col sm={12}>
            <SubTittle />
            <SeleDest/>

              <Button variant="primary" type="submit">
                Buscar
              </Button>
              
  
          </Col>
        </Row>
      </Container>
    </>
  );
}