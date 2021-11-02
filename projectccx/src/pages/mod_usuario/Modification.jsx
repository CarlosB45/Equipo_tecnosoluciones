import React, {Component} from 'react';
import 'style/Styles.css';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Input, Label, Select} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import images from 'images/index_img';

const data = [
  {id: 1 ,nombre: "Mark Otto", genero: "masculino", identificacion: "cedula de ciudadania",n_identificacion: 214214,correo: "Mark_Otto@geef.com",telefono: 4543345, rol: "adm"},
  {id: 2 ,nombre: "Jacob Thornton", genero: "masculino", identificacion: "cedula de ciudadania",n_identificacion: 214214,correo: "Mark_Otto@geef.com",telefono: 4543345, rol: "vendedor"},
  {id: 3 ,nombre: "Larry the Bird", genero: "masculino", identificacion: "cedula de ciudadania",n_identificacion: 214214,correo: "Mark_Otto@geef.com",telefono: 4543345, rol: "comprador"},
  {id: 4 ,nombre: "julio cesar", genero: "masculino", identificacion: "cedula de ciudadania",n_identificacion: 214214,correo: "Mark_Otto@geef.com",telefono: 3004355, rol: "consultor"},
  {id: 5 ,nombre: "andres julio", genero: "masculino", identificacion: "cedula de ciudadania",n_identificacion:234562,correo: "Mark_Otto@geef.com",telefono: 4543345, rol: "logistica"},
  {id: 6 ,nombre: "Victor Manuel", genero: "masculino", identificacion: "cedula de ciudadania",n_identificacion: 214214,correo: "Mark_Otto@geef.com",telefono: 30145352, rol: "mercader"},
  {id: 7 ,nombre: "Jhon Deiby Salazar", genero: "masculino", identificacion: "cedula de ciudadania",n_identificacion: 214214,correo: "Mark_Otto@geef.com",telefono: 3005953, rol: "adm"},
];



class Modification extends React.Component{
state={
  data : data,
  abierto : false,
}

abrirmodal=()=>{
  this.setState({abierto: !this.state.abierto});
}
  render() {
    return (
        <div className= "Modification">
            <div className="sidebar">

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
                       <Link to="Create"><img src={images.img_addcirclew} /><span className="product"></span>
                       <span>Creación</span></Link>
                    </li>
                    <li>
                       <Link to="Modification" className="active"><img src={images.img_editb} /><span className="salesman"></span>
                       <span>Modificación</span></Link>
                    </li>
                    <li>
                       <Link to="Remove"><img src={images.img_deletew} /><span className="stock"></span>
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

                    <div className="name-company">
                       <h2><span>Tecnosoluciones</span></h2>
                    
                    </div>

                    <div className="user-wrapper">
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
                                <td scope="col">id</td>
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
                            {this.state.data.map((elemento)=>(
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.genero}</td>
                                    <td>{elemento.identificacion}</td>
                                    <td>{elemento.n_identificacion}</td>
                                    <td>{elemento.correo}</td>
                                    <td>{elemento.telefono}</td>
                                    <td>{elemento.rol}</td>
                                    <td><button color ="success" onClick={this.abrirmodal}><img src={images.img_editb}/></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Modal isOpen ={this.state.abierto}>
                        <ModalHeader>
                            Modificar Usuario
                        </ModalHeader>

                        <div class = "formulario2">
                         <ModalBody>
                            <FormGroup>
                                <label for="id">Nombre completo</label>
                                <br />
                                <input type="text" id= "usuario"/>
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <br />
                                <label for="usuario">Nombre completo</label>
                                <br />
                                <input type="text" id= "usuario"/>
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <br />
                                <label for="genero">Genero</label>
                                <br />
                                <input type="text" id= "genero"/>
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <br />
                                <label for="identificacion">Tipo de identinficacion</label>
                                <br />
                                   <select name="" id="identificacion">
                                   <option value="">seleciona una opcion</option>
                                   <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                                   <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                   <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                   <option value="Pasaporte">Pasaporte</option>
                                </select>
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <br />
                                <label for="n_iden">Numero de identificacion</label>
                                <br />
                                <input type="number" id= "n_iden"/>
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <br />
                                <label for="e">Correo electronico</label>
                                <br />
                                <input type="email" id= "e"/>
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <br />
                                <label for="tel">Numero de telefono</label>
                                <br />
                                <input type="number" id= "tel"/>
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <br />
                                <label for="rol">Rol del sistema</label>
                                <br />
                                <input type="text" id= "rol"/>
                                <br />
                            </FormGroup>
                         </ModalBody>
                        </div>

                        <ModalFooter>
                            <button color ="primary" onClick ={this.abrirmodal}>Guardar cambios</button>
                            <button color ="Secondary" onClick ={this.abrirmodal}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </main>

            </div>

        </div>

    );
  }
}

export default Modification;