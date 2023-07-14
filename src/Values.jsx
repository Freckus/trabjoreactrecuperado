import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Image from 'react-bootstrap/Image';
import bgimg1 from "./img/backgroundferry.jpg";

export function TittleName() {
  const Name = "Naviera del Sur";
  return (
    <h1 style={{margin: '2rem' }}>{Name}</h1>
  );
}

export function SubTittle() {
  const Titlepage = 'Naviera del sur'
  const DescTitle = 'Venta de pasajes'
  return (
    <>
      <h2>{Titlepage}</h2>
      <h4>{DescTitle}</h4>
    </>
  );
}

export function Dest() {
  const DestinoV = 'Seleccione Destino'
  return (
    <h3>{DestinoV}</h3>
  );
}

export function Origen() {
  const OrigenV = 'Seleccione Origen'
  return (
    <h3>{OrigenV}</h3>
  );
}
