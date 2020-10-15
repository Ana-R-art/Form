import React, {Fragment} from 'react';
//import  "boot"
import Formulario from './components/Formulario'
//import { BrowserRouter, Route, Router, withRouter } from 'react-router-dom';

//import './styles


import Routers from './Routers'
import Recibir from './components/Recibir';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container mt-2" >
    <Switch>
        <Route path="/" exact>
            <Formulario/>
        </Route>
        <Route path="/recibir" exact>
            <Recibir/>
            <div className="btn-group">
              <Link to="/" className="btn btn-dark">
                Formulario
              </Link>

            </div>
        </Route>
      </Switch>

    </div>   
    </Router>
  );
  
}

export default App;

