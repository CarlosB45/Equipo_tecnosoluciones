import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'style/Styles.css';
import images from 'images/index_img';
import {Link} from 'react-router-dom';

const Registerproduct = ({ handleChange, handleClick, categorias, formValue }) => {
    return (
        <div className Registerproduct>
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="Inventario"></span> <span></span></h2>
                </div>

            <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to ="Home" ><span className="home"><img src= {images.img_homew}/></span>
                            <span>Inicio</span></Link>
                        </li>
                        <li>
                            <Link to="Registerproduct" className="active"><img src= {images.img_addcircleb}/><span className="product"></span>
                            <span>Registro de productos</span></Link>
                        </li>
                        <li>
                            <Link to="Listproducts"><span className="salesman"><img src= {images.img_searchw}/></span>
                            <span>Información de productos</span></Link>
                        </li>
                        <li>
                            <Link to="Edicionproductos"><span className="stock"><img src= {images.img_editw}/></span>
                            <span>Edición de productos</span></Link>
                        </li>
                    </ul>
                </div>
                </div>



            <header>
                <div>
                <img src={images.img_logo} width="60px" height="60px"/>
                </div>
                <div className="name-company">
                    <div>Tecnosoluciones</div>
                </div>
        <       div className="user-wrapper">
                    <img src={images.img_user} width="40px" height="40px" alt=""/>
                    <p><h4>Administrador</h4>
                    <small>Super Admin</small></p>
                </div>
            </header>

                <main>
                <div className= "Title1"> Registro de producto</div>
                <div className = "main-content">
                    
                <Form>      

                <Form.Select aria-label="Default select example">
                    <option>Seleccione una categoria</option>
                    <option value="TV">Televisor</option>
                    <option value="C">Computador</option>
                    <option value="W">SmartWatch</option>
                    <option value="J">Juegos</option>
                </Form.Select>
                
                    <Form.Group className="mb-3">
                        <Form.Label>Código del producto</Form.Label>
                        <Form.Control
                        type="text"
                        name="codigo"
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Nombre del Producto</Form.Label>
                        <Form.Control
                         type="text"
                        name="nombre"
                        style={{ height: "50px" }}
                        onChange={handleChange}
                        
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Especificaciones</Form.Label>
                        <Form.Control
                        as="textarea"
                        name="especificaciones"
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Referencia</Form.Label>
                        <Form.Control
                        type="text"
                        name="especificaciones"
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control
                        type="text"
                        name="especificaciones"
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Valor Unitario</Form.Label>
                        <Form.Control
                        type="text"
                        name="valorunit"
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Proveedor</Form.Label>
                        <Form.Control
                        type="text"
                        name="proveedor"
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formFileDisabled" className="mb-3">
                        <Form.Label>Cargar imagen del producto</Form.Label>
                        <Form.Control type="file"
                        name="imagen" 
                        onChange= {handleChange}/>
                        </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Almacenamiento</Form.Label>
                        <Form.Control
                        type="text"
                        name="almacenamiento"
                        onChange={handleChange}
                        />
                    </Form.Group>

                    <Button type="button" variant="danger">
                    Cancelar
                    </Button>
                    <Button  
                    onClick={handleClick}
                    type="button"
                    variant="danger"
                    className="float-end"
                        >
                    Guardar
                    </Button>

                </Form>
                </div>
                </main>
                </div>

    );
};
    export default Registerproduct;
