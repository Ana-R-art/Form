import React from 'react'
//import {Switch, Route} from  'react-router-dom'
import Formulario from './components/Formulario'
import Recibir from './components/Recibir'


     import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from "react-router-dom";


const Routers = ()=>{
    return(
        
        <Switch>
            <Route  exact path='/' component={Formulario}/>
            <Route path='/recibir'  component={Recibir}/>
        </Switch>
        
    );
}

export default Routers;