import React, {Component} from 'react';
import 'style/Styles.css';
import images from 'images/index_img';
import {Link} from 'react-router-dom';

function Registerproduct () {
    return(
        <div className="registerproduct">
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="Inventario"></span> <span></span></h2>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to ="Iniciomodulos" ><span className="home"></span>
                            <span>Modulo de Productos</span></Link>
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
                        <li className="list__item list__item--click">
                            <div className="list__button list__button--click">
                                <Link to="Iniciomodulos" className="nav__link"><img src={images.img_return}/>Volver</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
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
                <div className= "Title1"> Registro de producto</div>
                &nbsp;
                <div className="field">
                    <label className="labelform">Tipo de producto</label>
                    <select className="formscontrol" required autocomplete>
                        <option value= "">Seleccione</option>
                        <option value= "C">Computador</option>
                        <option value= "TV">Televisor</option>
                        <option value= "W">SmartWatch</option>
                        <option value= "AC">Accesorios</option>
                    </select>
                </div>
                <div className="field">
                    <label className="labelform">Código del producto</label>
                    <input type="number" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <label className="labelform">Nombre del producto</label>
                    <input type="text" className="formscontrol" required autocomplete/>
                 </div>
                <div className="field">
                    <label className="labelform">Marca</label>
                    <input type="text" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <label className="labelform">Referencia</label>
                    <input type="text" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <label className="labelform">Valor unitario</label>
                    <input type="text" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <label className="labelform">Proveedor</label>
                <input type="text" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <label className="labelform">Imagen del producto</label>
                    <input type="submit" className="boton" value="Cargar Imagen"/>
                </div>
                <div className="field">
                    <label className="labelform">Almacenamiento</label>
                    <input type="text" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <input type="submit" className="boton" value="Guardar Producto"/>
                </div>
            </main>
        </div>


    );
}
    export default Registerproduct;