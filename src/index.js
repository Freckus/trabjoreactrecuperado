import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import { ImageBackgorud } from './Backgournd';
import { Header } from "./Navigation";
import { BodyForm } from "./Body";
import { NavBar } from "./Navbar";



ReactDOM.render(
  <>
    <Header />
    <br></br>
  </>,
  document.getElementById("header")
);

ReactDOM.render(
  <>
    <NavBar className=""></NavBar>
    <br></br>
  </>,
  document.getElementById("navbar")
);

ReactDOM.render(
  <>
    <BodyForm />
    <br></br>
  </>,
  document.getElementById("cuerpo")
);
