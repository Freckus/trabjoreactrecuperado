import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react';
import Image from 'react-bootstrap/Image';
import logoImg from "./img/logob.png"


export function Logo(){
    return(
        /*tipo deimagen tamaño */
    <Image className="img-fluid mh-100" src={logoImg}/>

)}

