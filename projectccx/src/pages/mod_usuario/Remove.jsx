import React, {Component} from 'react';
import 'style/Styles.css';
import { Link } from 'react-router-dom';
import images from 'images/index_img';

function Remove (){
    return (
        <div className = "Remove">
            <div class="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="Inventario"></span> <span>Administración de usuarios</span></h2>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="Home"><img src={images.img_homew} /><span className="home"></span>
                            <span>Inicio</span></Link>
                        </li>

                        <li>
                            <Link to="Vizualizacion"><img src={images.img_tableview} /><span className="home"></span>
                            <span>Visualizacion</span></Link>
                        </li>
                        <li>
                            <Link to="Create" ><img src={images.img_addcirclew}  /><span className="product"></span>
                            <span>Creación</span></Link>
                        </li>
                        <li>
                            <Link to="Modification"><img src={images.img_editw} /><span className="salesman"></span>
                            <span>Modificacón</span></Link>
                        </li>
                        <li>
                            <Link to="Remove"className="active"><img src={images.img_editb} /><span className="stock"></span>
                            <span>Eliminación</span></Link>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <div className = "main-content">
                <header>
                    <div>
                        <img src={images.img_logo} width="60px" height="60px"/>
                    </div>

                    <div class="name-company">
                       <h2><span>Tecnosoluciones</span></h2>
                    
                    </div>

                    <div class="user-wrapper">
                    <img src={images.img_user} width="40px" height="40px" alt=""/>
                       <div>
                            <h4>Administrador</h4>
                          <small>Super Admin</small>
                        </div>
                   </div>
                </header>

                <main>

                    <table class="table">
                        <thead>
                            <tr>
                                <td scope="col">Nombre del usuario</td>
                                <td scope="col">Genero</td>
                                <td scope="col">Tipo de idenficacion</td>
                                <td scope="col">Numero de identificacion</td>
                                <td scope="col">Correo electronico</td>
                                <td scope="col">Numero de telefono</td>
                                <td scope="col">Rol del sistema</td>
                                <td scope="col">Eliminar</td>
                           </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Mark Otto</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>4543345</td>
                                <td>adm</td>
                                <td><Link to =""><img src={images.img_deleteb}/></Link></td>
                            </tr>

                            <tr>
                                <td>Jacob Thornton</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>4543345</td>
                                <td>adm</td>
                                <td><Link to =""><img src={images.img_deleteb}/></Link></td>
                            </tr>

                            <tr>
                                <td>Larry the Bird</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>4543345</td>
                                <td>adm</td>
                                <td><Link to =""><img src={images.img_deleteb}/></Link></td>
                            </tr>

                            <tr>
                                <td>julio cesar</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>3004355</td>
                                <td>mercante</td>
                                <td><Link to =""><img src={images.img_deleteb}/></Link></td>
                            </tr>

                            <tr>
                                <td>andres julio</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>234562</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>4543345</td>
                                <td>venta</td>
                                <td><Link to =""><img src={images.img_deleteb}/></Link></td>
                            </tr>

                            <tr>
                                <td>Victor Manue</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>10004322</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>30145352</td>
                                <td>vendedor</td>
                                <td><Link to =""><img src={images.img_deleteb}/></Link></td>
                            </tr>

                            <tr>
                                <td>Jhon Deiby Salazar</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>3005953</td>
                                <td>adm</td>
                                <td><Link to =""><img src={images.img_deleteb}/></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </main>

            </div>

        </div>

        



    );
}

export default Remove;