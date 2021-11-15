import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, Navlink} from 'react-router-dom';
import 'style/Styles.css';
import images from 'images/index_img';


function Edicionproductos () {
    return(
        <div className="edicionproductos">
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
                            <Link to="Registerproduct" ><span className="product"><img src= {images.img_addcirclew}/></span>
                            <span>Registro de productos</span></Link>
                        </li>
                        <li>
                            <Link to="Listproducts"><span className="salesman"><img src= {images.img_searchw}/></span>
                            <span>Información de productos</span></Link>
                        </li>
                        <li>
                            <Link to="Edicionproductos" className="active"><img src= {images.img_editb}/><span className="stock"></span>
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
                <div className="user-wrapper">
                    <img src={images.img_user} width="40px" height="40px" alt=""/>
                    <p><h4>Administrador</h4>
                    <small>Super Admin</small></p>
                </div>
            </header>
            <main>
                <div className = "main-content">
            
    
            <form id="consul_prod">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="card-title">Categoria</h6>
                        <select className="formscontrol-div" id="tipo_categoria">
                            <option selected disabled>Seleccione...</option>
                            <option value= "TV">Televisión</option>
                            <option value= "C">Computador</option>
                            <option value= "W">SmartWatch</option>
                            <option value= "J">Juego</option>
                        </select>
                    </div>
                    <div className="col-sm-3">
                        <h6 className="card-title">Nombre del producto:</h6>
                        <input type="number"  className="formscontrol-div" id="numdoc_vend" placeholder="Nombre del producto"/>
                    </div>
                    <div className="col-sm-3">
                        <h6 className="card-title">Código del producto:</h6>
                        <input type="text"  className="formscontrol-div" id="nom_vend" placeholder="Código del producto"/>
                    </div> 
                                              
                    <div className="col-sm-3">
                        <h6 className="card-title">Marca del producto:</h6>
                        <input type="text"  className="formscontrol-div" id="ent_vend" placeholder="Marca del producto"/>
                    </div>
                    <div className="col-sm-3">
                        <button type="button"  className="btn btn-outline-primary" id="butt_cons_vend">Consultar</button>
                    </div>

                </div>
            </div>
        </form>

                <div className="table-responsive1">
                    <table className="table table-xs">
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
                            <th scope="col">Edición</th>
                            <th scope="col">Eliminar</th>
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
                            <td> <img src={images.img_editb}/></td>
                            <td> <img src={images.img_deleteb}/></td>
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
                            <td> <img src={images.img_editb}/></td>
                            <td> <img src={images.img_deleteb}/></td>
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
                            <td> <img src={images.img_editb}/></td>
                            <td> <img src={images.img_deleteb}/></td>

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
                            <td> <img src={images.img_editb}/></td>
                            <td> <img src={images.img_deleteb}/></td>
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
                            <td> <img src={images.img_editb}/></td>
                            <td> <img src={images.img_deleteb}/></td>
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
                            <td> <img src={images.img_editb}/></td>
                            <td> <img src={images.img_deleteb}/></td>

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
                            <td> <img src={images.img_editb}/></td>
                            <td> <img src={images.img_deleteb}/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </main>
        </div>
    );
}
    export default Edicionproductos;