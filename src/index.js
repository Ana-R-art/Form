import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Formulario from './components/Formulario';
import Routers from './Routers';
//import Recibir from '/.componets/Recibir'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import Recibir from './components/Recibir';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


