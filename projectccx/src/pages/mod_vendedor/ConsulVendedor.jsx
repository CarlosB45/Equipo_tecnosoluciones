/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from "react";
import {Link, Navlink} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../style/Styles.css';
import imag from '../../images/index_img';
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
                            <Link to="/inicio/Home"><img src={imag.img_homew} width="30px" height="30px"/><span>Inicio</span></Link>
                        </li>
                        <li>
                            <Link to="/mod_vendedor/ConsulVendedor" className="active"><img src={imag.img_searchb} width="30px" height="30px" /><span>Consultar Vendedores</span></Link>                            
                        </li>
                        <li>
                            <Link to="/mod_vendedor/IngreVendedor"><img src={imag.img_savew} width="30px" height="30px"/><span>Crear Vendedores</span></Link>
                        </li>
                        <li>
                            <Link to="/mod_vendedor/ModVendedor"><img src={imag.img_createw} width="30px" height="30px"/><span>Modificar Vendedores</span></Link>
                        </li>
                        <li>
                            <Link to="/mod_vendedor/ElimVendedor"><img src={imag.img_deletew} width="30px" height="30px"/><span>Eliminar Vendedores</span></Link>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <div className="main-content">
                <header>
                    <div>
                        <img src={imag.img_log} width="60px" height="60px"/>
                    </div>
                    <div className="name-company">
                        <h2><span>Tecnosoluciones</span></h2>
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
                <form id="consul_vend">
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
                                <h6 className="card-title">Nombre Vendedor:</h6>
                                <input type="text"  className="formscontrol-div" id="nom_vend" placeholder="Nombre de Vendedor"/>
                            </div> 
                            <div className="col-sm-3">
                                <button type="button"  className="btn btn-outline-primary" id="butt_cons_vend">Consultar</button>
                            </div>
                            
                            <div className="col-sm-3">
                                <h6 className="card-title">Entidad:</h6>
                                <input type="text"  className="formscontrol-div" id="ent_vend" placeholder="Entidad"/>
                            </div>
                            <div className="col-sm-3">
                                <h6 className="card-title">Telefono:</h6>
                                <input type="text"  className="formscontrol-div" id="tel_vend" placeholder="Telefono"/>
                            </div>
                            <div className="col-sm-3">
                                <h6 className="card-title">Ciudad:</h6>
                                <input type="text"  className="formscontrol-div" id="ciu_vend" placeholder="Ciudad"/>
                            </div> 
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
                                </tr>
                                <tr>
                                    <td>Cedula Ciudadania</td>
                                    <td>1020458963</td>
                                    <td>Victor Manuel Ciro Ledesma</td>
                                    <td>Interrapidisimo</td>
                                    <td>3203158789</td>
                                    <td>Bogotá</td>
                                </tr>
                                <tr>
                                    <td>Cedula Ciudadania</td>
                                    <td>92568879</td>
                                    <td>Julian Andres Quesada</td>
                                    <td>Servientrega</td>
                                    <td>3112554141</td>
                                    <td>Cartagena</td>
                                </tr>
                                <tr>
                                    <td>Cedula Extranjerida</td>
                                    <td>12569966</td>
                                    <td>Andres Hernandez Camargo</td>
                                    <td>Interrapidisimo</td>
                                    <td>3168952120</td>
                                    <td>Bogotá</td>
                                </tr>
                                <tr>
                                    <td>Cedula Ciudadania</td>
                                    <td>40385662</td>
                                    <td>Manuel Garzón Sanchez</td>
                                    <td>Paga Todo</td>
                                    <td>3122669897</td>
                                    <td>Medellín</td>
                                </tr>
                                <tr>
                                    <td>Cedula Ciudadania</td>
                                    <td>10195602123</td>
                                    <td>Julieta Milena Quesada</td>
                                    <td>El Solecito Caliente</td>
                                    <td>3012668582</td>
                                    <td>Medellín</td>
                                </tr>
                                <tr>
                                    <td>Cedula Extranjerida</td>
                                    <td>21556213</td>
                                    <td>Marlen Salazar Orozco</td>
                                    <td>Madremia</td>
                                    <td>305226889</td>
                                    <td>Cali</td>
                                </tr>
                                <tr>
                                    <td>Cedula Ciudadania</td>
                                    <td>1025562133</td>
                                    <td>Katherine Gil Ortiz</td>
                                    <td>Mermelada Catalina</td>
                                    <td>3112295051</td>
                                    <td>Bogotá</td>
                                </tr>
                                <tr>
                                    <td>Cedula Ciudadania</td>
                                    <td>40256887</td>
                                    <td>Barbara Ortiz Bermudez</td>
                                    <td>Servientrega</td>
                                    <td>3213659797</td>
                                    <td>Bucaramanga</td>
                                </tr>
                                <tr>
                                    <td>Cedula Ciudadania</td>
                                    <td>86521321</td>
                                    <td>Julian Andres Salazar Rayo</td>
                                    <td>Servientrega</td>
                                    <td>3006118585</td>
                                    <td>Bogotá</td>
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