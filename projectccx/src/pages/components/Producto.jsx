import React, {Component} from 'react';
import {Link, Navlink} from 'react-router-dom';
import 'style/interfaz.css';
import images from 'images/index_img';


function Products () {
    return(
        <div className="Productos">
            <div className="barra-lateral">
                <div className="sidebar-title">
                    <div className="Productos"></div>
                </div>

                <div className="barra-menu">
                    <ul>
                        <li>
                            <Link to ="Home" ><img src= {images.img_homew}/>Inicio</Link>
                        </li>
                        <li>
                            <Link to="Registerproduct" ><img src= {images.img_addcirclew}/>Registro de productos</Link>
                        </li>
                        <li>
                            <Link to="Listproducts"><img src= {images.img_searchw}/>Información de productos</Link>
                        </li>
                        <li>
                            <Link to="Edicionproductos" className="active"><img src= {images.img_editb}/>Edición de productos</Link>
                        </li>

                    </ul>
                </div>
            </div>
            <header>
                <div className= "encabezado">
                    <img src={images.img_logo} width="60px" height="60px"/>
                </div>
                <div className="namecompany">
                    <div>Tecnosoluciones</div>
                </div>
                <div className="user-wrapper">
                    <img src={images.img_user} width="40px" height="40px" alt=""/>
                    <p><h4>Administrador</h4>
                    <small>Super Admin</small></p>
                </div>
            </header>
            <main>
            </main>
        </div>
    );
}
    export default Products;