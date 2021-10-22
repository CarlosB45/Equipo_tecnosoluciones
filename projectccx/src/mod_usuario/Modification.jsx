import React, {Component} from 'react';
import '../style/Styles.css';

function Modification (){
    return (
        <div className= "Modification">
            <div className="sidebar">

                <div className="sidebar-brand">
               <h2><span className="Inventario"></span> <span>Administración de usuarios</span></h2>
              </div>

              <div className="sidebar-menu">
                  <ul>
                    <li>
                       <a href="index.html"><span className="home"></span>
                       <span>Visualizacion</span></a>
                    </li>
                    <li>
                       <a href="create.html" ><span className="product"></span>
                       <span>Creación</span></a>
                    </li>
                    <li>
                       <a href="modification.html" className="active"><span className="salesman"></span>
                       <span>Modificacón</span></a>
                    </li>
                    <li>
                       <a href="remove.html"><span className="stock"></span>
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

                    <div className="name-company">
                       <h2><span>Tecnosoluciones</span></h2>
                    
                    </div>

                    <div className="user-wrapper">
                    <img src="../img/icon/user.png" width="40px" height="40px" alt=""/>
                       <div>
                            <h4>Administrador</h4>
                          <small>Super Admin</small>
                        </div>
                   </div>
                </header>

                <main>
                    <div className="ventana" id="vent">
                        <div id="cerrar"><a href="javascript:cerrar()"></a></div>
                        
                        Modificar usuario
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
                                <input type="text" id="rol_sis" name="Rol del sistema" placeholder="Ingresa el rol del sistema" id="Rol del sistema"></input>
                                <br />
                                <br />
                                <div class="row">
                                    <div class="col">
                                        <a href="javascript:cerrar()"><button type="submit" class="btn btn-primary">Guardar cambios</button></a>
                                    </div>
                                    <div class="col">
                                        <button type="submit" class="btn btn-primary" onclick="recibir();">Validar Rol</button>
                                    </div>
                                </div>
                            
                            </form>
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
                                <td scope="col">Modificar</td>
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
                                <td style="text-align: center;"><a href="javascript:abrir()"></a></td>
                            </tr>
                        </tbody>
                    </table>
                </main>

            </div>

        </div>

    );
}

export default Modification;