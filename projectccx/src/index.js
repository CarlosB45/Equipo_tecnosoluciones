import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route} from "react-router-dom";
import Home from './Inicio/Home';
import Vizualizacion from './mod_usuario/Vizualizacion';
import Create from './mod_usuario/Create';
import Modification from './mod_usuario/Modification';
import Remove from './mod_usuario/Remove';
import Vizualizacion from './mod_usuario/Vizualizacion';
import Registerproduct from './mod_producto/Registerproduct';
import Listproducts from './mod_producto/Listproducts';
import Editproduct from './mod_producto/Editproduct';
import Edicionproductos from './mod_producto/Edicionproductos';
import Fichaproductos from './mod_producto/Fichaproducto';

const App = () =>(
  <BrowserRouter>

    <React.Fragment>
      <Route  path = "/home" component ={Home}/>
      <Route  path = "/vizualizacion" component ={Vizualizacion}/>
      <Route  path = "/create" component ={Create}/>
      <Route  path = "/modification" component ={Modification}/>
      <Route  path = "/remove" component ={Remove}/>
      <Route path="/Registerproduct" component={Registerproduct}/>
      <Route path="/Listproducts" component={Listproducts}/>
      <Route path="/Edicionproductos" component={Edicionproductos}/>
      <Route path="/Editproduct" component={Editproduct}/>
      <Route path="/Fichaproductos" component={Fichaproductos}/>
    </React.Fragment>
  
  </BrowserRouter>

);

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

