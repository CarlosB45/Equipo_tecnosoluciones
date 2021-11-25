import React from 'react';
import ReactDOM from 'react-dom';
import 'style/Styles.css';
import 'style/Stylesv.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Inicio/Home';
import Register from './pages/Inicio/Register';
import Login from './pages/Inicio/Login';
import Edicionproductos from './pages/mod_producto/Edicionproductos';
import Editproduct from 'pages/mod_producto/Editproduct';
import Fichaproducto from 'pages/mod_producto/Fichaproducto';
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
          <Route exact path = "/" component ={Login}/>
          <Route exact path = "/Register" component ={Register}/>
          <Route exact path = "/Home" component ={Home}/>
          <Route exact path = "/Register" component ={Register}/>
          <Route exact path = "/Edicionproductos" component ={Edicionproductos}/>
          <Route exact path = "/Editproduct" component ={Editproduct}/>
          <Route exact path = "/Fichaproducto" component ={Fichaproducto}/>
          <Route exact path = "/Inquiryinv" component ={Inquiryinv}/>
          <Route exact path = "/Invmodif" component ={Invmodif}/>
          <Route exact path = "/Invrecord" component ={Invrecord}/>
          <Route exact path = "/Listproducts" component ={Listproducts}/>
          <Route exact path = "/Registerproduct" component ={Registerproduct}/>
          <Route exact path = "/Create" component ={Create}/>
          <Route exact path = "/Modification" component ={Modification}/>
          <Route exact path = "/Remove" component ={Remove}/>
          <Route exact path = "/Vizualizacion" component ={Vizualizacion}/>
          <Route exact path = "/Consulvendedor" component ={Consulvendedor}/>
          <Route exact path = "/Elimvendedor" component ={Elimvendedor}/>
          <Route exact path = "/Indexv" component ={Indexv}/>
          <Route exact path = "/Ingrevendedor" component ={Ingrevendedor}/>
          <Route exact path = "/Modvendedor" component ={Modvendedor}/>
          <Route exact path = "/Indivsearch" component ={Indivsearch}/>
          <Route exact path = "/Inquirysales" component ={Inquirysales}/>
          <Route exact path = "/Salesmodif" component ={Salesmodif}/>
          <Route exact path = "/Salesrecord" component ={Salesrecord}/>
    </Switch>      
  </BrowserRouter>
);

ReactDOM.render (<App />, document.getElementById('root'))
