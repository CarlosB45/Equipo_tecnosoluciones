import React, {Component} from 'react';
import './Styles.css';

function Listproducts () {
    return(
        <div className="Listaproductos">
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="Inventario"></span> <span></span></h2>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="./index.js" ><span className="home"></span>
                            <span>Modulo de Productos</span></a>
                        </li>
                        <li>
                            <a href="./Registerproduct" className="active"><span className="product"></span>
                            <span>Registro de productos</span></a>
                        </li>
                        <li>
                            <a href="./listado_productos.html"><span className="salesman"></span>
                            <span>Información de productos</span></a>
                        </li>
                        <li>
                            <a href="./edicion_productos.html"><span className="stock"></span>
                            <span>Edición de productos</span></a>
                        </li>
                        <li className="list__item list__item--click">
                            <div className="list__button list__button--click">
                                <a href="./index.html" className="nav__link">Volver</a>
                                <img src="../img/icon/icons8-return-30.png" className="list__return"/>
                            </div>
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
                <div classname="card">
                    <div classname="card-header">
                        <h3 classname="Listado">Información de productos</h3>
                    </div>
                    <div classname= "busqueda">
                        <h4 classname="Listado">Busqueda</h4>
                        <input type="text" classname="formscontrols" placeholder= "Nombre del producto"/>
                        <input type="text" classname="formscontrols" placeholder= "Código del producto"/>
                        <input type="text" classname="formscontrols" placeholder= "Referencia del producto"/>
                        <input type="text" classname="formscontrols" placeholder= "Marca del producto"/>
                        <input type="text" classname="formscontrols" placeholder= "Proveedor del producto"/>
                        <input type="text" classname="formscontrols" placeholder= "Lugar de almacenamiento"/>
                    </div>

                    <div classname="table-responsive">
                        <table classname="table mb-0">
                        <thead>
                        <tr>
                            <th scope="col">N°</th>
                            <th scope="col">Código del producto</th>
                            <th scope="col">Nombre del producto</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Referencia</th>
                            <th scope="col">Valor unitario</th>
                            <th scope="col">Proveedor</th>
                            <th scope="col">Almacenamiento</th>
                            <th scope="col">Ver</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>TV8692603</td>
                            <td>TV SAMSUNG 65" Pulgadas 4K-UHD QLED Plano Smart TV</td>
                            <td>Samsung</td>
                            <td>65Q80AA</td>
                            <td> $ 4.599.900</td>
                            <td>Electronic S.A</td>
                            <td>Bodega de Seguridad 1</td>
                            <td><a href="./ficha_producto.html"> <img src="../img/icon/visibility_black_24dp.svg"/></a></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>TV7161325</td>
                            <td>Televisor LG 65 Pulgadas LED 4K Ultra HD Smart TV</td>
                            <td>LG</td>
                            <td>65UP7750</td>
                            <td>2799900</td>
                            <td>Semic S.A.S</td>
                            <td>Bodega de Seguridad 1</td>
                            <td><a href="./ficha_producto.html"> <img src="../img/icon/visibility_black_24dp.svg"/></a></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>TV7640538</td>
                            <td>Televisor Samsung 58 pulgadas LED 4K Ultra HD Smart TV</td>
                            <td>Samsung</td>
                            <td>UN58TU8000KXZL</td>
                            <td>2349900</td>
                            <td>Electronic S.A</td>
                            <td>Bodega de Seguridad 1</td>
                            <td><a href="./ficha_producto.html"> <img src="../img/icon/visibility_black_24dp.svg"/></a></td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>C8766200</td>
                            <td>Portátil Gamer Asus Tuf Gaming F15 FX506 15.6 pulgadas</td>
                            <td>Asus</td>
                            <td>FX506LH-HN002T</td>
                            <td>3329900</td>
                            <td>Semic S.A.S</td>
                            <td>Bodega de Seguridad 2</td>
                            <td><a href="./ficha_producto.html"> <img src="../img/icon/visibility_black_24dp.svg"/></a></td>

                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>C8787384</td>
                            <td>MacBook Air 13,3" Pulgadas MQD32E/A Gris</td>
                            <td>MAC</td>
                            <td>MQD32E/A</td>
                            <td>3559000</td>
                            <td>Electronic S.A</td>
                            <td>Bodega de Seguridad 2</td>
                            <td><a href="./ficha_producto.html"> <img src="../img/icon/visibility_black_24dp.svg"/></a></td>

                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>W8237985</td>
                            <td>Smartwatch Huawei Watch GT2 46mm</td>
                            <td>Huawei</td>
                            <td>Watch GT2</td>
                            <td>649900</td>
                            <td>Maiket</td>
                            <td>Bodega de Seguridad 3</td>
                            <td><a href="./ficha_producto.html"> <img src="../img/icon/visibility_black_24dp.svg"/></a></td>

                        </tr>

                        <tr>
                            <th scope="row">7</th>
                            <td>W8627526</td>
                            <td>Apple Watch Series 3 38 mm</td>
                            <td>Apple</td>
                            <td>MTF02CL/A</td>
                            <td>1139900</td>
                            <td>Electronic S.A</td>
                            <td>Bodega de Seguridad 3</td>
                            <td><a href="./ficha_producto.html"> <img src="../img/icon/visibility_black_24dp.svg"/></a></td>

                        </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
    export default Listproducts;