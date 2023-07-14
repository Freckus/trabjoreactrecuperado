import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";



export  function Asientos() {
    function getRandomNumber() {
        return Math.floor(Math.random() * 10000) + 1;
      }
    const [formData, setFormData] = useState({
      id: getRandomNumber(),
      asiento: '',
    });
  
    function handleClick(valor) {
      setFormData(prevFormData => ({
        ...prevFormData,
        asiento: valor,
      }));
    }
  
    var Asientos = [];
  
    for (var i = 0; i < 7; i++) {
      var fila = [];
      for (var j = 1; j <= 6; j++) {
        fila.push(j);
      }
      Asientos.push({
        letra: String.fromCharCode(97 + i),
        numeros: fila
      });
    }
  
    console.log(formData);
  
    return (
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
                  onClick={() => handleClick(`${fila.letra.toUpperCase()}${numero}`)}
                >
                  {numero}
                </Button>
              ))}
            </Col>
          </Row>
        ))}
      </div>
    );
  }
  
  export default Asientos;