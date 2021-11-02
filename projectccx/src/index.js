import React from 'react';
import ReactDOM from 'react-dom';
import 'style/Styles.css';
import 'style/Stylesv.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Inicio/Home'
import Edicionproductos from './pages/mod_producto/Edicionproductos';
import Editproduct from 'pages/mod_producto/Editproduct';
import Fichaproducto from 'pages/mod_producto/Fichaproducto';
import Iniciomodulo from 'pages/mod_producto/Iniciomodulos';
import Inquiryinv from 'pages/mod_inventarios/Inquiryinv';
import Invmodif from 'pages/mod_inventarios/Invmodif';
import Invrecord from 'pages/mod_inventarios/Invrecord';
import Listproducts from 'pages/mod_producto/Listproducts';
import Registerproduct from 'pages/mod_producto/Registerproduct';
import Create from 'pages/mod_usuario/Create';
import Modification from 'pages/mod_usuario/Modification';
import Remove from 'pages/mod_usuario/Remove';
import Vizualizacion from 'pages/mod_usuario/Vizualizacion';
import Consulvendedor from 'pages/mod_vendedor/ConsulVendedor';
import Elimvendedor from 'pages/mod_vendedor/ElimVendedor';
import Indexv from 'pages/mod_vendedor/index';
import Ingrevendedor from 'pages/mod_vendedor/IngreVendedor';
import Modvendedor from 'pages/mod_vendedor/ModVendedor';
import Indivsearch from 'pages/mod_ventas/Indivsearch';
import Inquirysales from 'pages/mod_ventas/Inquirysales';
import Salesmodif from 'pages/mod_ventas/Salesmodif';
import Salesrecord from 'pages/mod_ventas/Salesrecord';

const App = () => (

  <BrowserRouter>
      <Switch>
          <Route  path = "/Home" component ={Home}/>
          <Route  path = "/Edicionproductos" component ={Edicionproductos}/>
          <Route  path = "/Editproduct" component ={Editproduct}/>
          <Route  path = "/Fichaproducto" component ={Fichaproducto}/>
          <Route  path = "/Iniciomodulos" component ={Iniciomodulo}/>
          <Route  path = "/Inquiryinv" component ={Inquiryinv}/>
          <Route  path = "/Invmodif" component ={Invmodif}/>
          <Route  path = "/Invrecord" component ={Invrecord}/>
          <Route  path = "/Listproducts" component ={Listproducts}/>
          <Route  path = "/Registerproduct" component ={Registerproduct}/>
          <Route  path = "/Create" component ={Create}/>
          <Route  path = "/Modification" component ={Modification}/>
          <Route  path = "/Remove" component ={Remove}/>
          <Route  path = "/Vizualizacion" component ={Vizualizacion}/>
          <Route  path = "/Consulvendedor" component ={Consulvendedor}/>
          <Route  path = "/Elimvendedor" component ={Elimvendedor}/>
          <Route  path = "/Indexv" component ={Indexv}/>
          <Route  path = "/Ingrevendedor" component ={Ingrevendedor}/>
          <Route  path = "/Modvendedor" component ={Modvendedor}/>
          <Route  path = "/Indivsearch" component ={Indivsearch}/>
          <Route  path = "/Inquirysales" component ={Inquirysales}/>
          <Route  path = "/Salesmodif" component ={Salesmodif}/>
          <Route  path = "/Salesrecord" component ={Salesrecord}/>
    </Switch>      
  </BrowserRouter>
);

ReactDOM.render (<App />, document.getElementById('root'))