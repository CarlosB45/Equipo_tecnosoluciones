import React, {Component} from 'react';
import '../style/Styles.css';

function Fichaproductos () {
    return(
        <div className="fichaproductos">
             <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="Inventario"></span> <span></span></h2>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="./Iniciomodulos" ><span className="home"></span>
                            <span>Modulo de Productos</span></a>
                        </li>
                        <li>
                            <a href="./Registerproduct" ><span className="product"></span>
                            <span>Registro de productos</span></a>
                        </li>
                        <li>
                            <a href="./Listproducts" ><span className="salesman"></span>
                            <span>Información de productos</span></a>
                        </li>
                        <li>
                            <a href="./Edicionproductos"className="active"><span className="stock"></span>
                            <span>Edición de productos</span></a>
                        </li>
                        <li className="list__item list__item--click">
                            <div className="list__button list__button--click">
                                <a href="./Iniciomodulos" className="nav__link">Volver</a>
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

                <section id="containers"/>
                    <div class="cardproducts">
                        <figure>
                            <img src="../img/Productos/1.jfif"/>
                        </figure>
                        <div class="contenido">
                                <h4 class="card-title">TV SAMSUNG 65" Pulgadas 165.1 cm  4K-UHD QLED Plano Smart TV</h4>
                                <p>Código:TV8692603</p>
                                <p>Nombre:TV SAMSUNG 65" Pulgadas 165.1 cm  4K-UHD QLED Plano Smart TV</p>
                                <p>Marca:Samsung</p>
                                <p>Referencia:65Q80AA</p>
                                <p>Precio:$ 4.599.900</p>
                                <p>Proveedor:Electronic S.A</p>
                                <p>Unidades:500</p>
                                <p>Bodega de Seguridad 1</p>    
                        </div>
                    </div>

                    <div class="cardproducts">
                        <figure>
                            <img src="../img/Productos/2.jfif"/>
                        </figure>
                        <div class="contenido">
                                <h4>Televisor LG 65 Pulgadas LED 4K Ultra HD Smart TV</h4>
                                <p>TV7161325</p>
                                <p>Nombre:Televisor LG 65 Pulgadas LED 4K Ultra HD Smart TV</p>
                                <p>Marca:LG</p>
                                <p>Referencia:65UP7750</p>
                                <p>Precio: $ 2.349.900</p>
                                <p>Proveedor:Semic S.A.S</p>
                                <p>Unidades:700</p>
                                <p>Bodega de Seguridad 1</p>
                        </div>
                    </div>x
                    <div class="cardproducts">
                        <figure>
                            <img src="../img/Productos/3.jfif"/>
                        </figure>
                        <div class="contenido">
                                <h4 class="card-title">Televisor Samsung 58" LED 4K Ultra HD Smart TV</h4>
                                <p>TV7161325</p>
                                <p>Nombre:Televisor Samsung 58 pulgadas LED 4K Ultra HD Smart TV
                                </p>
                                <p>Marca:Samsung</p>
                                <p>Referencia:TV7640538</p>
                                <p>Precio: $ 2.349.900</p>
                                <p>Proveedor:Electronic S.A</p>
                                <p>Unidades:700</p>
                                <p>Bodega de Seguridad 1</p>
                        </div>
                    </div>
                    <div class="cardproducts">
                        <figure>
                            <img src="../img/Productos/4.jfif"/>
                        </figure>
                        <div class="contenido">
                                <h4 class="card-title">Portátil Gamer Asus Tuf Gaming F15 FX506</h4>
                                <p>C8766200</p>
                                <p>Nombre:Portátil Gamer Asus Tuf Gaming F15 FX506 15.6 pulgadas Intel Core i5 8GB 512GB</p>
                                <p>Marca:Asus</p>
                                <p>Referencia:FX506LH-HN002T</p>
                                <p>Precio: $ 3.329.900</p>
                                <p>Proveedor:Semic S.A.S</p>
                                <p>Unidades:400</p>
                                <p>Bodega de Seguridad 2</p>
                        </div>
                    </div>
                    <div class="cardproducts">
                        <figure>
                            <img src="../img/Productos/5.jfif"/>
                        </figure>
                        <div class="contenido">
                                <h4 class="card-title">MacBook Air 13,3" Pulgadas MQD32E/A-Gris</h4>
                                <p>C8787384</p>
                                <p>Nombre:MacBook Air 13,3" Pulgadas MQD32E/A-Gris</p>
                                <p>Marca:MAC</p>
                                <p>Referencia:MQD32E/A</p>
                                <p>Precio: $ 3.559.000</p>
                                <p>Proveedor:Electronic S.A</p>
                                <p>Unidades:1800</p>
                                <p>Bodega de Seguridad 2</p>
            
                        </div>
                    </div>
                    <div class="cardproducts">
                        <figure>
                            <img src="../img/Productos/6.jfif"/>
                        </figure>
                        <div class="contenido">
                                <h4 class="card-title">Smartwatch Huawei Watch GT2 46mm</h4>
                                <p>Código:W8237985</p>
                                <p>Nombre:Smartwatch Huawei Watch GT2 46mm</p>
                                <p>Marca:Huawei</p>
                                <p>Referencia:Watch GT2</p>
                                <p>Precio: $ 649.900</p>
                                <p>Proveedor:Maiket</p>
                                <p>Unidades:800</p>
                                <p>Bodega de Seguridad 3</p>
                        </div>
                    </div>
                    <div class="cardproducts">
                        <figure>
                        <img src="../img/Productos/7.jfif"/>
                        </figure>
                        <div class="contenido">
                            <h4 class="card-title">Apple Watch Series 3</h4>
                            <p>Código:W8627526</p>
                            <p>Nombre:Apple Watch Series 3 38 mm</p>
                            <p>Marca:Apple</p>
                            <p>Referencia:MTF02CL/A</p>
                            <p>Precio: $ 1.139.900</p>
                            <p>Proveedor:Electronic S.A</p>
                            <p>Unidades:500</p>
                            <p>Bodega de Seguridad 3</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
    export default Fichaproductos;