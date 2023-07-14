import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { SubTittle, Dest, Origen } from './Values';
import { Col, Container, Row } from 'react-bootstrap';
import { Asientos } from './Sit';

export function Basic() {
    return (
        <Row>
            <Col sm={6}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Nombres" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Apellido" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Edad" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Telefono" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rut</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Rut" />
                        <Form.Text className="text-muted">Sin puntos y guion</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>
                </Form>
            </Col>
            <Col sm={6} className="border border-info ">
                
                <Asientos />
            </Col>
        </Row>
    );
}

export function SeleDest() {
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [horario, setHorario] = useState('');
    const [opcionesDestino, setOpcionesDestino] = useState([]);
    const [opcionesHorario, setOpcionesHorario] = useState([]);

    let Viajes = [
        {
            origen: 'Puerto Montt',
            destino: ['Quellon', 'Chaiten', 'Puerto Cisnes'],
            horario: ['06:00', '10:00', '14:00', '18:00'],
        },
        {
            origen: 'Chaiten',
            destino: ['Puerto Montt', 'Quellon', 'Puerto Cisnes'],
            horario: ['06:00', '10:00', '16:00'],
        },
        {
            origen: 'Quellon',
            destino: ['Puerto Montt', 'Chaiten', 'Puerto Cisbes'],
            horario: ['06:00', '10:00', '16:00'],
        },
        {
            origen: 'Puerto Cisnes',
            destino: ['Chaiten', 'Puerto Montt'],
            horario: ['06:00', '18:00'],
        },
    ];
//e seria el evento para cambiar los select
    const handleOrigenChange = (e) => {
        const viajeSeleccionado = Viajes.find((viaje) => viaje.origen === e.target.value);
        setOrigen(e.target.value);
        setDestino('');
        setHorario('');
        setOpcionesDestino(viajeSeleccionado?.destino || []);
        setOpcionesHorario(viajeSeleccionado?.horario || []);
    };

    const handleDestinoChange = (e) => {
        setDestino(e.target.value);
    };

    const handleHorarioChange = (e) => {
        setHorario(e.target.value);
    };

    return (
        <>
            <Container>
                <Row>
                    <Dest></Dest>
                    <Col sm={6}>
                        <Form.Select aria-label="Default select example" value={origen} onChange={handleOrigenChange}>
                            <option>Origen</option>
                            {Viajes.map((viaje, index) => (
                                <option key={index} value={viaje.origen}>
                                    {viaje.origen}
                                </option>
                            ))}
                        </Form.Select>
                        <br></br>
                        <Form.Select aria-label="Default select example" value={destino} onChange={handleDestinoChange}>
                            <option>Destino</option>
                            {opcionesDestino.map((destino, index) => (
                                <option key={index} value={destino}>
                                    {destino}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                    <Col sm={6}>
                        <Form.Select aria-label="Default select example" value={horario} onChange={handleHorarioChange}>
                            <option>Salidas programadas</option>
                            {opcionesHorario.map((horario, index) => (
                                <option key={index} value={horario}>
                                    {horario}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
            <br></br>
        </>
    );
}
