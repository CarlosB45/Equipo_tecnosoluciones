import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'style/Styles.css';
import {Link} from 'react-router-dom';
import images from 'images/index_img';


function Iniciomodulos () {
    return(
        <div className="iniciomodulos">
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="Inventario"></span> <span></span></h2>
                </div>

                 <div class="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="" class="active" ><span class="home" ></span>
                            <img src={images.img_homeb} class="list__img"/>
                            <span>Módulo de Productos</span></Link>
                        </li>
                        <li class="list__item list__item--click">
                            <div class="list__button list__button--click">
                                <Link to="Registerproduct" class="nav__link"><img src={images.img_storew} />Productos</Link>
                                <img src={images.img_arrowdropdown} class="list__arrow"/>
                            </div>

                            <ul class="list__show">
                                <li class="list__inside">
                                    <Link to="Registerproduct" class="nav__link nav__link--inside">Registro de productos</Link>
                                </li>

                                <li class="list__inside">
                                    <Link to="Listproducts" class="nav__link nav__link--inside">Información de productos</Link>
                                </li>
                                <li class="list__inside">
                                    <Link to="Edicionproducts" class="nav__link nav__link--inside">Edición de productos</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="list__item list__item--click">
                            <div class="list__button list__button--click">
                                <Link to="Inquiryinv" class="nav__link"><img src={images.img_inventoryw} />Inventario</Link>
                                <img src={images.img_arrowdropdown} class="list__arrow"/>
                            </div>

                        <ul class="list__show">
                            <li class="list__inside">
                                <Link to="Inquiryinv" class="nav__link nav__link--inside">Registro de Inventario</Link>
                            </li>

                            <li class="list__inside">
                                <Link to="Invrecord" class="nav__link nav__link--inside">Almacenamiento de productos</Link>
                            </li>
                        </ul>
                        </li>
                        <li class="list__item list__item--click">
                            <div class="list__button list__button--click">
                                <Link to="Home" class="nav__link"><img src={images.img_return}/>Volver</Link>
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
            <script src = "./main.js"></script>
        </div>
    

    );
}
    export default Iniciomodulos;
