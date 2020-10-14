import React, {Fragment} from 'react';
//import  "boot"
import Formulario from './components/Formulario'
import { BrowserRouter, Route } from 'react-router-dom';
//import './styles

import Routers from './Routers'
import Recibir from './components/Recibir';


function App() {
  return (
    <div className="container mt-2" >
      <Routers />
      
      
    </div>   
  );
  
}

export default App;

