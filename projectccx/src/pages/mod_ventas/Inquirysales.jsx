import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'style/Styles.css';
import images from 'images/index_img';
import {Link, NavLink} from 'react-router-dom';


function Inquirysales () {
    return(
        <>
        <div>
        <input type="checkbox" id="nav-toggle"></input>
        <div className="sidebar">
            <div className="sidebar-brand">
                <h2><span className="Inventario"></span> <span>Ventas</span></h2>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <Link to="/inicio/Home" className="product"><span className="product"></span>
                        <img src={images.img_homew} width="30px" height="30px" alt=""/><span>Inicio</span></Link>
                    </li>
                    <li>
                        <Link to="/mod_ventas/Inquirysales" className="active"><span className="home"></span>
                        <img src={images.img_searchb} width="30px" height="30px" alt=""/>Consulta de ventas</Link>
                    </li>
                    <li>
                        <Link to="/mod_ventas/Salesrecord" className="product"><span className="product"></span>
                        <img src={images.img_savew} width="30px" height="30px" alt=""/>Registro de ventas</Link>
                    </li>
                    <li>
                        <Link to="/mod_ventas/Indivsearch"><span className="product"></span>
                        <img src={images.img_searchw} width="30px" height="30px" alt=""/>Consulta Individual</Link>
                    </li>
                    <li>
                        <Link to="/mod_ventas/Salesmodif"><span className="salesman"></span>
                        <img src={images.img_createw} width="30px" height="30px" alt=""/>Modificación de ventas</Link>
                    </li>
                </ul>
            </div>
        </div>
        
        
        <header>
            <div>
                <img src={images.img_logo} width="60px" height="60px" alt=""/>
            </div>
            <div className="name-company">
                <h2><span>Tecnosoluciones</span></h2>
            </div>
            <div className="user-wrapper">
                <img src={images.img_user} width="40px" height="40px" alt=""/>
            <div/>
            <div>
                <h4>Administrador</h4>
                <small>Super Admin</small>
            </div>
        </div>
        </header>
        <main className="main-content"> 
            <div className="cards-c">
                <div className="card-productos">
                    <div> 
                        <h1>250</h1>
                        <span>Número de productos vendidos</span>
                    </div>
                    <div>
                        <span className="products"></span>
                    </div>
                </div>

                <div className="card-ventas">
                    <div>
                        <h1>1.400 Millones</h1>
                        <span>Total Ventas</span>
                    </div>
                </div>

                <div className="card-single">
                    <div>
                        <h1>1.300.000</h1>
                        <span>Numero de ventas</span>
                    </div>
                </div>
            </div>
            
            <hr/>
             
            <div className="container"> 
                <div className="row"> 
                    <div className="title">
                        <h2>Seleccione periodo</h2>
                    </div>
                </div>
            </div>

            <div className="box-button">
                <div className="text-center">
                    <form action="#">
                        <div className="form-group">
                            Periodo: <input type="month" placeholder="mes (MM)" class="formscontrol" id="periodo"></input>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-sm-6" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <button type="button" onclick= "aceptar();" className="btn btn-outline-primary" id="butt_cons_vend">Mostrar último periodo</button>
                    </div>
                    <div className="col-sm-6" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <button type="button" onclick= "aceptar();" className="btn btn-outline-primary" id="butt_cons_vend">Mostrar periodo en curso</button>
                    </div>
                </div>
            </div>

            <br/>
        
            <div className="main-container">
                <table>
                    <thead>
                        <tr>
                            <th>Periodo</th><th>Item</th><th>Valor</th><th>Unidades vendidas</th><th>Valor total</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>202109</td><td>Computador Gamer</td><td>$6.000.000</td><td>2500</td><td>$15.000.000.000</td>
                    </tr>
                    <tr>
                        <td>202109</td><td>Televisor Samsung LED 55</td><td>$3.000.000</td><td>5000</td><td>$15.000.000.000</td>
                    </tr>
                    <tr>
                        <td>202109</td><td>Televisor Samsung LED 49</td><td>$1.500.000</td><td>4000</td><td>$6.000.000.000</td>
                    </tr>
                    <tr>
                        <td>202109</td><td>SmartWatch Samsumg Fit</td><td>$900.000</td><td>15000</td><td>$13.500.000.000</td>
                    </tr>
                    <tr>
                        <td>202109</td><td>Sistema de audio Bose</td><td>$1.200.000</td><td>2000</td><td>$2.400.000.000</td>
                    </tr> 
                </table>
            </div>
             

        </main>
        </div>

        </>
        );
}
    
    
    export default Inquirysales;