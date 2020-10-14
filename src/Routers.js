import React from 'react'
import {Switch, Route} from  'react-router-dom'
import Formulario from './components/Formulario'
import Recibir from './components/Recibir'


const Routers = ()=>{
    return(
        <Switch>
            <Route  exact path='/' component={Formulario}/>
            <Route path='/recibir'  component={Recibir}/>
        </Switch>

    );
}

export default Routers;