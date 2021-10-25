import React, {Component} from 'react';
import '../style/Styles.css';
import {Link} from 'react-router-dom';


function Iniciomodulos () {
    return(
        <div className="iniciomodulos">
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="Inventario"></span> <span></span></h2>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="./Iniciomodulos" className="active"><img src="../img/icon/home_black_24dp.svg" width="30px" height="30px"/>Inicio</Link>
                        </li>
                        <li>
                            <Link to="./Registerproduct"><span className="product"></span>
                            <img src="../img/icon/store_white_24dp.svg" width="30px" height="30px"/>Productos</Link>
                        </li>
                        <li>
                            <Link to="./mod.usuario/create"><span className="salesman"></span>
                            <img src="../img/icon/account_circle_white_24dp.svg" width="30px" height="30px"/>Comerciales</Link>
                        </li>
                        <li>
                            <Link to="." class="product"><span className="sales"></span>
                            <img src="../img/icon/point_of_sale_white_24dp.svg" width="30px" height="30px"/>Ventas</Link>
                        </li>
                        <li>
                            <Link to="."><img src="../img/icon/add_circle_outline_white_24dp.svg" alt=""/><span class="users"></span>
                                <img src="../img/icon/manage_accounts_white_24dp.svg" width="30px" height="30px"/>Gestión de usuarios</Link>
                        </li>
                    </ul>
                </div>
            </div>
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
            <div className="cards-c">
            </div>

        </main>
    </div>

    );
}
    export default Iniciomodulos;
