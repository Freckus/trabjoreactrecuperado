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
import { BrowserRouter } from "react-router-dom";



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode> )