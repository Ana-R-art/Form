import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
//import Formulario from './components/Formulario'
import { withRouter } from "react-router";
import queryString from 'query-string'



const Recibir = (props)=>{
    const enviar = (data, e) => {
        console.log(data);
    }
    const {match, location} = props;
    console.log('match', match);
    var query = queryString.parse(location.search);
    console.log(query.nombre)
    return(
        <Fragment>
          
                 <center>
               <h1> Datos del usurio: </h1>
                <p>{query.nombre}</p>
                <p>{query.apellidoMaterno}</p>
                <p>{query.apellidoPaterno}</p>
                <p>{query.telefono}</p>
                <p>{query.correo}</p>
                <div> {query.Formulario}</div>
                </center>
               
                
        </Fragment>
    )
}


   

export default withRouter(Recibir);