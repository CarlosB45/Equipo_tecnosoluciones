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
                            <Link to="IngreVendedor" className="active"><img src={imag.img_saveb} width="30px" height="30px"/><span>Crear Vendedores</span></Link>
                        </li>
                        <li>
                            <Link to="ModVendedor" ><img src={imag.img_createw} width="30px" height="30px"/><span>Modificar Vendedores</span></Link>
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
                <form id="crear_vend" class="was-validated">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h6 className="card-title">Tipo Documento:</h6>
                                <select className="formscontrol-div" id="tipdoc_vend">
                                    <option selected disabled>Seleccione...</option>
                                    <option value= "CC">Cédula de ciudadanía</option>
                                    <option value= "TI">Tarjeta de Identidad</option>
                                    <option value= "CE">Cédula de extranjería</option>
                                    <option value= "NIT">NIT</option>
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="card-title">Numero Documento:</h6>
                                <input type="number"  className="formscontrol-div" id="numdoc_vend" placeholder="Numero de Documento"/>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="card-title">Nombre Vendedor:</h6>
                                <input type="text"  className="formscontrol-div" id="nom_vend" placeholder="Nombre de Vendedor"/>
                            </div> 
                            <div className="col-sm-6">
                                <h6 className="card-title">Entidad:</h6>
                                <input type="text"  className="formscontrol-div" id="ent_vend" placeholder="Entidad"/>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="card-title">Telefono:</h6>
                                <input type="text"  className="formscontrol-div" id="tel_vend" placeholder="Telefono"/>
                            </div>
                            <div className="col-sm-6">
                                <h6 className="card-title">Ciudad:</h6>
                                <input type="text"  className="formscontrol-div" id="ciu_vend" placeholder="Ciudad"/>
                            </div>
                            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                                <br/>
                                <button type="button" className="btn btn-outline-primary" id="butt_crear_vend" onclick="aceptar();">Crear Vendedor</button>
                            </div>  
                        </div>
                    </div>
                </form>
                <br/>
                <div className="alert alert-success" role="alert">
                    <span>El vendedor fue creado correctamente, <strong>validar en plataforma</strong> </span>
                </div>
                <div className="alert alert-danger" role="alert">
                    <span>Hubo una falla a la hora de crear el vendedor, <strong>por favor validar</strong> </span>
                </div>
            </main>    
        </body>
        </>
    );
}


export default ConsulVendedor;