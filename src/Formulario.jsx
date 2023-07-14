import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { SubTittle, Dest, Origen } from "./Values";
import { Col, Container, Row } from "react-bootstrap";
//import { Asientos } from "./Sit";

export function getRandomNumber() {
  return Math.floor(Math.random() * 10000) + 1;
}

export function Basic() {
  var Asientos = [];
  for (var i = 0; i < 7; i++) {
    var fila = [];
    for (var j = 1; j <= 6; j++) {
      fila.push(j);
    }
    Asientos.push({
      letra: String.fromCharCode(97 + i),
      numeros: fila,
    });
  }
  const [formData, setFormData] = useState({
    id: getRandomNumber(),
    nombre: "",
    apellidos: "",
    edad: "",
    telefono: "",
    rut: "",
    asiento: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  function handleClick(valor) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      asiento: valor,
    }));
  }

  return (
    <Row>
      <Col sm={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Nombres"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Apellido"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rut</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Rut"
              name="rut"
              value={formData.rut}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">Sin puntos y guion</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form>
      </Col>
      <Col sm={6} className="border border-info ">
        <div>
          <h1 className="text-center">Asientos</h1>
          {Asientos.map((fila, index) => (
            <Row key={index}>
              <Col xs={1} className="text-end">
                <h3>{fila.letra.toUpperCase()}:</h3>
              </Col>
              <Col xs={11}>
                {fila.numeros.map((numero, numIndex) => (
                  <Button
                    key={numIndex}
                    value={`${fila.letra.toUpperCase()}${numero}`}
                    title={`${fila.letra.toUpperCase()}${numero}`}
                    className="mx-1 mb-3"
                    onClick={() =>
                      handleClick(`${fila.letra.toUpperCase()}${numero}`)
                    }
                  >
                    {numero}
                  </Button>
                ))}
              </Col>
            </Row>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export function SeleDest() {
  const [formData, setFormData] = useState({
    id: getRandomNumber(),
    origen: "",
    destino: "",
    horario: "",
  });
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [horario, setHorario] = useState("");
  const [opcionesDestino, setOpcionesDestino] = useState([]);
  const [opcionesHorario, setOpcionesHorario] = useState([]);

  let Viajes = [
    {
      origen: "Puerto Montt",
      destino: ["Quellon", "Chaiten", "Puerto Cisnes"],
      horario: ["06:00", "10:00", "14:00", "18:00"],
    },
    {
      origen: "Chaiten",
      destino: ["Puerto Montt", "Quellon", "Puerto Cisnes"],
      horario: ["06:00", "10:00", "16:00"],
    },
    {
      origen: "Quellon",
      destino: ["Puerto Montt", "Chaiten", "Puerto Cisbes"],
      horario: ["06:00", "10:00", "16:00"],
    },
    {
      origen: "Puerto Cisnes",
      destino: ["Chaiten", "Puerto Montt"],
      horario: ["06:00", "18:00"],
    },
  ];

  const handleOrigenChange = (e) => {
    const viajeSeleccionado = Viajes.find(
      (viaje) => viaje.origen === e.target.value
    );
    setOrigen(e.target.value);
    setDestino("");
    setHorario("");
    setOpcionesDestino(viajeSeleccionado?.destino || []);
    setOpcionesHorario(viajeSeleccionado?.horario || []);
    console.log("Origen seleccionado:", e.target.value);
  };

  const handleDestinoChange = (e) => {
    setDestino(e.target.value);
    console.log("Destino seleccionado:", e.target.value);
  };

  const handleHorarioChange = (e) => {
    setHorario(e.target.value);
    console.log("Horario seleccionado:", e.target.value);
  };

  const handleAgregarClick = () => {
    const seleccion = [formData.id, origen, destino, horario];
    console.log("Selección actual:", seleccion);
  };

  return (
    <>
      <Container>
        <Row>
          {/* ... */}
          <Col sm={6}>
            <Form.Select
              aria-label="Default select example"
              value={origen}
              onChange={handleOrigenChange}
            >
              <option>Origen</option>
              {Viajes.map((viaje, index) => (
                <option key={index} value={viaje.origen}>
                  {viaje.origen}
                </option>
              ))}
            </Form.Select>
            <br />
            <Form.Select
              aria-label="Default select example"
              value={destino}
              onChange={handleDestinoChange}
            >
              <option>Destino</option>
              {opcionesDestino.map((destino, index) => (
                <option key={index} value={destino}>
                  {destino}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col sm={6}>
            <Form.Select
              aria-label="Default select example"
              value={horario}
              onChange={handleHorarioChange}
            >
              <option>Salidas programadas</option>
              {opcionesHorario.map((horario, index) => (
                <option key={index} value={horario}>
                  {horario}
                </option>
              ))}
            </Form.Select>
            <br />
            <Button
              variant="primary"
              type="submit"
              onClick={handleAgregarClick}
            >
              Agregar
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
}

const boleto = () => {};
