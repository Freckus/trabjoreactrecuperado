import './App.css';
import Asientos from "./Sit"
import * as React from "react";
import { Routes,Route,Link } from 'react-router-dom';
import { Header } from './Navigation';
import { NavBar } from './Navbar';
import { BodyForm } from './Body';
import {Nosotros} from './Nosotros'
import { Busqueda,Todos } from './Busqueda';

function App() {
  return (
    <div className="App">
        <h1></h1>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='about' element={<NosotrosN/>}/>
          <Route path='Busqueda' element={<BusquedaN/>}/>
          <Route path='Vertodo' element={<Vertodo/>}/>
        </Routes>
      </div>
    );}

export default App;
function Home(){
  return(
  <>
    <Header />
    <br></br> 
    <NavBar className=""></NavBar>
    <br></br>
    <BodyForm />
    <br></br>
  </>
);}
function NosotrosN(){
  return(
    <>
      <Nosotros/>
    </>
  );
}
function BusquedaN(){
  return(
    <>
    <Busqueda/>
    </>
  );
}

function Vertodo(){
  return(
    <>
      <Todos/>
    </>
  );
}
