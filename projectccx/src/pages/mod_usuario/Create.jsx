import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'style/Styles.css';
import { Link } from 'react-router-dom';
import images from 'images/index_img';

function Create (){
    return(
        <div className ="Create">
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="Inventario"></span> <span>Administración de usuarios</span></h2>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        
                         <li>
                            <Link to="/inicio/Home"><img src={images.img_homew} /><span className="home"></span>
                            <span>Inicio</span></Link>
                        </li>
                        <li>
                            <Link to="/mod_usuario/Vizualizacion"><img src={images.img_tableview} /><span className="home"></span>
                            <span>Visualizacion</span></Link>
                        </li>
                        <li>
                            <Link to="/mod_usuario/Create" className="active"><img src={images.img_addcircleb} /><span className="product"></span>
                            <span>Creación</span></Link>
                        </li>
                        <li>
                            <Link to="/mod_usuario/Modification"><img src={images.img_editw} /><span className="salesman"></span>
                            <span>Modificación</span></Link>
                        </li>
                        <li>
                            <Link to="/mod_usuario/Remove"><img src={images.img_deletew} /><span className="stock"></span>
                            <span>Eliminación</span></Link>
                        </li>
                       
                    </ul>
                </div>
            </div>

            <div className="main-content">
                <header>
                    <div>
                        <img src={images.img_logo} width="60px" height="60px"/>
                    </div>

                    <div className="name-company">
                        <h2><span>Tecnosoluciones</span></h2>
                    </div>

                    <div className="user-wrapper">
                        <img src={images.img_user} width="40px" height="40px" alt=""/>
                        <p><h4>Administrador</h4>
                        <small>Super Admin</small></p>
                    </div>
                </header>


                <main>

                    <div className="sub_titulo">
                        <h2>Añadir usuario</h2>
                    </div>

                    <div className="formulario">
                        <form name="registro"> 
                            <p>Nombre completo</p> 
                            <input type="text" name="Nombre completo" placeholder="Ingresa el nombre" id="Nombre completo"></input>  
                            <br />
                            <br />
                            <p>Genero</p> 
                            <input type="text" name="Genero" placeholder="Ingresa el genero" id="Genero"></input>
                            <br />
                            <br />
                            <p>Tipo de identinficacion</p>
                            <select name="Tipo de identificacion" id="Tipo de identificacion">
                                <option value="">seleciona una opcion</option>
                                <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                <option value="Pasaporte">Pasaporte</option>
                            </select>
                            <br />
                            <br />
                            <p>Numero de identificacion</p>
                            <input type="text" name="Numero de identificacion" placeholder="Ingresa el numero de identificacion" id="Numero de identificacion"></input>
                            <br />
                            <br />
                            <p>Correo electronico</p>
                            <input type="email" name="Correo electronico" placeholder="Ingresa el correo" id="Correo electronico"></input>
                            <br />
                            <br />
                            <p>Numero de telefono</p>
                            <input type="text" name="Numero de telefono" placeholder="Ingresa el numero de telefono" id="Numero de telefono"></input>
                            <br />
                            <br />
                            <p>Rol del sistema</p>
                            <input type="text" name="Rol del sistema" placeholder="Ingresa el rol del sistema" id="Rol del sistema"></input>
                            <br />
                            <br />
                            <button type="submit" className="btn btn-primary">Añadir usuario</button>
                            <br />
                        </form>
                    </div>

 
                 </main>

            </div>

        </div>


    );
}

export default Create;