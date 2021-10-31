import React, {Component} from 'react';
import '../../style/Styles.css';
import { Link } from 'react-router-dom';

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
                            <Link to="./Vizualizacion"><img src="../img/icon/table_view_white_24dp.svg" /><span className="home"></span>
                            <span>Visualizacion</span></Link>
                        </li>
                        <li>
                            <Link to="./Create" className="active"><img src="../img/icon/add_circle_outline_black_24dp.svg" /><span className="product"></span>
                            <span>Creación</span></Link>
                        </li>
                        <li>
                            <Link to="./Modification"><img src="../img/icon/edit_white_24dp.svg" /><span className="salesman"></span>
                            <span>Modificacón</span></Link>
                        </li>
                        <li>
                            <Link to="./Remove"><img src="../img/icon/delete_white_24dp.svg" /><span className="stock"></span>
                            <span>Eliminación</span></Link>
                        </li>
                        <li>
                            <Link to="./Home"><img src="../img/icon/home_white_24dp.svg" /><span className="home"></span>
                            <span>Inicio</span></Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="main-content">
                <header>
                    <div>
                        <img src="../img/logo.png" width="60px" height="60px"/>
                    </div>

                    <div className="name-company">
                        <h2><span>Tecnosoluciones</span></h2>
                    </div>

                    <div className="user-wrapper">
                        <img src="../img/icon/user.png" width="40px" height="40px" alt=""/>
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