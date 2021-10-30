import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mod_producto/Styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Vizualizacion from './mod_usuario/Vizualizacion';
import Registerproduct from './mod_producto/Registerproduct';
import Listproducts from './mod_producto/Listproducts';
import Editproduct from './mod_producto/Editproduct';
import Inquirysales from './mod_ventas/Inquirysales'

ReactDOM.render(
  <React.StrictMode>
    <Inquirysales/>
  </React.StrictMode>,
  document.getElementById('root')
);