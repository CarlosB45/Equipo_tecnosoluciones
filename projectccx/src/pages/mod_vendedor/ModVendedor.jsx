/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from "react";
import 'style/Stylesv.css';
import imag from 'images/index_img';
import {Link} from 'react-router-dom';
//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />

function ConsulVendedor(){
    return(
        <>
        <head>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </head>
        <body>
            <input type="checkbox" id="nav-toggle"/>
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h4><span>Administrar Vendedores</span></h4>
                </div>
                
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="Home"><img src={imag.img_homew} width="30px" height="30px"/><span class="inicio"/><span>Inicio</span></Link>
                        </li>
                        <li>
                            <Link to="ConsulVendedor" ><img src={imag.img_searchw} width="30px" height="30px" /><span>Consultar Vendedores</span></Link>
                        </li>
                        <li>
                            <Link to="IngreVendedor" ><img src={imag.img_savew} width="30px" height="30px"/><span>Crear Vendedores</span></Link>
                        </li>
                        <li>
                            <Link to="ModVendedor" className="active"><img src={imag.img_createb} width="30px" height="30px"/><span>Modificar Vendedores</span></Link>
                        </li>
                        <li>
                            <Link to="ElimVendedor" ><img src={imag.img_deletew} width="30px" height="30px"/><span>Eliminar Vendedores</span></Link>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <div className="main-content">
                <header>
                    <div>
                        <img src={imag.img_logo} width="60px" height="60px"/>
                    </div>
                    <div className="name-company">
                        <div>Tecnosoluciones</div>
                    </div>
                    <div className="user-wrapper">
                        <img src={imag.img_user} width="40px" height="40px" />
                        <div>
                            <h4>Administrador</h4>
                            <small>Super Admin</small>
                        </div>
                    </div>
                </header>
            </div>
            <main className="main-content">
                <form id="mod_vend">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="card-title">Tipo Documento:</h6>
                                <select className="formscontrol-div" id="tipdoc_vend">
                                    <option selected disabled>Seleccione...</option>
                                    <option value= "CC">Cédula de ciudadanía</option>
                                    <option value= "TI">Tarjeta de Identidad</option>
                                    <option value= "CE">Cédula de extranjería</option>
                                    <option value= "NIT">NIT</option>
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <h6 className="card-title">Numero Documento:</h6>
                                <input type="number"  className="formscontrol-div" id="numdoc_vend" placeholder="Numero de Documento"/>
                            </div>
                            <div className="col-sm-3">
                                <h6 className="card-title">Entidad:</h6>
                                <input type="text"  className="formscontrol-div" id="ent_vend" placeholder="Entidad"/>
                            </div>
                            <div className="col-sm-3">
                                <h6 className="card-title">Ciudad:</h6>
                                <input type="text"  className="formscontrol-div" id="ciu_vend" placeholder="Ciudad"/>
                            </div> 
                        </div>
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            <button type="button"  class="btn btn-outline-primary" id="butt_cons_vend">Buscar</button>
                        </div>
                    </div>
                </form>
                <hr/>
                <div className="recent-grid-user">
                    <div className="table-responsive">
                        <table responsive>
                        <thead>
                            <tr>
                                <th>Tipo Documento</th>
                                <th>Numero Documento</th>
                                <th>Nombre Vendedor</th>
                                <th>Entidad</th>
                                <th>Telefono</th>
                                <th>Ciudad</th>
                                <th>Modificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cedula Ciudadania</td>
                                <td>13456789</td>
                                <td>Jhon Deiby Salazar</td>
                                <td>Paga Todo</td>
                                <td>3003113232</td>
                                <td>Bogotá</td>
                                <td><Link to="" ><img src={imag.img_createb}/></Link></td>
                                
                            </tr>
                            <tr>
                                <td>Cedula Ciudadania</td>
                                <td>1020458963</td>
                                <td>Victor Manuel Ciro Ledesma</td>
                                <td>Interrapidisimo</td>
                                <td>3203158789</td>
                                <td>Bogotá</td>
                                <td><Link to="" ><img src={imag.img_createb}/></Link></td>
                            </tr>
                            <tr>
                                <td>Cedula Extranjerida</td>
                                <td>12569966</td>
                                <td>Andres Hernandez Camargo</td>
                                <td>Interrapidisimo</td>
                                <td>3168952120</td>
                                <td>Bogotá</td>
                                <td><Link to="" ><img src={imag.img_createb}/></Link></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>  
                </div>
            </main>    
        </body>
        </>
    );
}


export default ConsulVendedor;