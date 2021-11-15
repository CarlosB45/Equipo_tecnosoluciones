import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'style/Styles.css';
import images from 'images/index_img';
import {Link} from 'react-router-dom';

function Salesmodif () {
    return(
        <>
        <div>
        <div className="sidebar">
            <div className="sidebar-brand">
                <h4><span className="Inventario"></span> <span>Ventas</span></h4>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <Link to="Home" className="product">
                        <img src={images.img_homew} width="30px" height="30px" alt=""/><span>Inicio</span></Link>
                    </li>
                    <li>
                        <Link to="Inquirysales" className="product">
                        <img src={images.img_searchw} width="30px" height="30px" alt=""/>Consulta de ventas</Link>
                    </li>
                    <li>
                        <Link to="Salesrecord"><span className="product"></span>
                        <img src={images.img_savew} width="30px" height="30px" alt=""/>Registro de ventas</Link>
                    </li>
                    <li>
                        <Link to="Indivsearch"><span className="product"></span>
                        <img src={images.img_searchw} width="30px" height="30px" alt=""/>Consulta Individual</Link>
                    </li>
                    <li>
                        <Link to="Salesmodif" className="active"><span className="home"></span>
                        <img src={images.img_createb} width="30px" height="30px" alt=""/>Modificación de ventas</Link>
                    </li>
                </ul>
            </div>
        </div>
        
        
        <header>
            <div>
                <img src={images.img_logo} width="60px" height="60px" alt=""/>
            </div>
            <div className="name-company">
                <h2><span>Tecnosoluciones</span></h2>
            </div>
            <div className="user-wrapper">
                <img src={images.img_user} width="40px" height="40px" alt=""/>
            <div/>
            <div>
                <h4>Administrador</h4>
                <small>Super Admin</small>
            </div>
        </div>
        </header>
        <main className="main-content">
            <div className="container"> 
                <div className="row"> 
                    <div className="title">
                        <h2>Información de venta</h2>
                    </div>
                </div>
            </div>
            <br/>

            <div className="main-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID Venta</th><th>Fecha compra</th><th>Documento</th><th>Item</th><th>Valor</th><th>Unidades vendidas</th><th>Valor total</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>205652</td><td>20210915</td><td>1018449485</td><td>Computador Gamer</td><td>$6.000.000</td><td>2</td><td>$12.000.000</td>
                    </tr>
                </table>
            </div>
            <br/>

            <div className="main-container">
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">No. Documento</label>
                    <input type="number" className="formscontrol" placeholder="Modifique No. Documento cliente" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Código de producto</label>
                    <input type="number" className="formscontrol" placeholder="Modifique Producto vendido" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Unidades vendidas</label>
                    <input type="text" className="formscontrol" placeholder="Modifique No. unidades vendidas" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Descuento autorizado</label>
                    <input type="text" className="formscontrol" placeholder="Modifique descuento autorizado" required autocomplete></input>
                </div>
            </div>
            
            <br/>

            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <button type="button" onclick= "aceptar();" className="btn btn-outline-primary" id="butt_cons_vend">Modificar Registro</button>
            </div>

 
            </main> 
        <hr/>
        </div>

</>
);
}


export default Salesmodif;
