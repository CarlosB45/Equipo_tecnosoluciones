import React, {Component} from 'react';
import '../style/Styles.css';

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
                            <a href="vizualizacion.js"><span className="home"></span>
                            <span>Visualizacion</span></a>
                        </li>
                        <li>
                            <a href="create.jsx" ><span className="product"></span>
                            <span>Creación</span></a>
                        </li>
                        <li>
                            <a href="modification.jsx"><span className="salesman"></span>
                            <span>Modificacón</span></a>
                        </li>
                        <li>
                            <a href="remove.jsx"className="active"><span className="stock"></span>
                            <span>Eliminación</span></a>
                        </li>
                        <li>
                            <a href="../index.html"><span className="home"></span>
                            <span>Inicio</span></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className = "main-content">
                <header>
                    <div>
                        <img src="../img/logo.png" width="60px" height="60px"/>
                    </div>

                    <div class="name-company">
                       <h2><span>Tecnosoluciones</span></h2>
                    
                    </div>

                    <div class="user-wrapper">
                    <img src="../img/icon/user.png" width="40px" height="40px" alt=""/>
                       <div>
                            <h4>Administrador</h4>
                          <small>Super Admin</small>
                        </div>
                   </div>
                </header>

                <main>
                    <div class="ventana" id="vent">
                        <div id="cerrar"><a href="javascript:cerrar()"></a></div>
                        <div class="cent">ESTAS SEGURO QUE QUIERES ELIMINAR ESTE USUARIO</div> 

                        <div class="buton">

                            <a href="javascript:cerrar()"><button type="button" class="btn btn-success">SI</button></a>
                            <a href="javascript:cerrar()"><button type="button" class="btn btn-danger">NO</button></a>

                        </div>
    
                    </div>

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
                                <td style="text-align: center;"><a href="javascript:abrir()"></a></td>
                            </tr>

                            <tr>
                                <td>Jacob Thornton</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>4543345</td>
                                <td>adm</td>
                                <td style="text-align: center;"><a href="javascript:abrir()"></a></td>
                            </tr>

                            <tr>
                                <td>Larry the Bird</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>4543345</td>
                                <td>adm</td>
                                <td style="text-align: center;"><a href="javascript:abrir()"></a></td>
                            </tr>

                            <tr>
                                <td>julio cesar</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>3004355</td>
                                <td>mercante</td>
                                <td style="text-align: center;"><a href="javascript:abrir()"></a></td>
                            </tr>

                            <tr>
                                <td>andres julio</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>234562</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>4543345</td>
                                <td>venta</td>
                                <td style="text-align: center;"><a href="javascript:abrir()"></a></td>
                            </tr>

                            <tr>
                                <td>Victor Manue</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>10004322</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>30145352</td>
                                <td>vendedor</td>
                                <td style="text-align: center;"><a href="javascript:abrir()"></a></td>
                            </tr>

                            <tr>
                                <td>Jhon Deiby Salazar</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>3005953</td>
                                <td>adm</td>
                            </tr>
                        </tbody>
                    </table>
                </main>

            </div>

        </div>

        



    );
}

export default Remove;