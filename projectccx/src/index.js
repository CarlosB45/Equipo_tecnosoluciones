import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/Styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Iniciomodulos from './mod_producto/Iniciomodulos';
import Vizualizacion from './mod_usuario/Vizualizacion';
import Registerproduct from './mod_producto/Registerproduct';
import Listproducts from './mod_producto/Listproducts';
import Editproduct from './mod_producto/Editproduct';
import Edicionproductos from './mod_producto/Edicionproductos';
import Fichaproductos from './mod_producto/Fichaproducto';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route path="/Registerproduct" component={Registerproduct}/>
      <Route path="/Listproducts" component={Listproducts}/>
      <Route path="/Edicionproductos" component={Edicionproductos}/>
      <Route path="/Editproduct" component={Editproduct}/>
      <Route path="/Fichaproductos" component={Fichaproductos}/>
      <Route path="/Iniciomodulos" component={Iniciomodulos}/>

    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
