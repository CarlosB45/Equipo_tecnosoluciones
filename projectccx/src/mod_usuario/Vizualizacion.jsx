import React, {Component} from 'react';
import '../style/Styles.css';

function vizualizacion () {
    return (
        <div className= "Modification">
            <div class="sidebar">

                <div class="sidebar-brand">
               <h2><span className="Inventario"></span> <span>Administración de usuarios</span></h2>
              </div>

              <div className="sidebar-menu">
                  <ul>
                    <li>
                       <a href="Vizualizacion.jsx" class="active"><span class="home"></span>
                       <span>Visualizacion</span></a>
                    </li>
                    <li>
                       <a href="Create.jsx" ><span class="product"></span>
                       <span>Creación</span></a>
                    </li>
                    <li>
                       <a href="Modification.jsx"><span class="salesman"></span>
                       <span>Modificacón</span></a>
                    </li>
                    <li>
                       <a href="Remove.jsx"><span class="stock"></span>
                       <span>Eliminación</span></a>
                    </li>
                    <li>
                       <a href="../index.html"><span class="home"></span>
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
                            </tr>

                            <tr>
                                <td>Jacob Thornton</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>4543345</td>
                                <td>adm</td>
                            </tr>

                            <tr>
                                <td>Larry the Bird</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>4543345</td>
                                <td>adm</td>
                            </tr>

                            <tr>
                                <td>julio cesar</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>214214</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>3004355</td>
                                <td>mercante</td>
                            </tr>

                            <tr>
                                <td>andres julio</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>234562</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>4543345</td>
                                <td>venta</td>
                            </tr>

                            <tr>
                                <td>Victor Manue</td>
                                <td>masculino</td>
                                <td>cedula de ciudadania</td>
                                <td>10004322</td>
                                <td>Mark_Otto@geef.com</td>
                                <td>30145352</td>
                                <td>vendedor</td>
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
                    <a href="../mod_usuario/create.html"><button type="submit" class="btn btn-primary">Añadir usuario</button></a>
                    <a href="../mod_usuario/modification.html"><button type="submit" class="btn btn-primary">Modificar usuario</button></a>
                    <a href="../mod_usuario/remove.html"><button type="submit" class="btn btn-primary">Eliminar usuario</button></a>
                </main>

            </div>

        </div>

    );

}

export default vizualizacion;