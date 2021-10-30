import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../style/Styles.css';
import images from '../../src/images/index_img';


function Salesrecord () {
    return(
        <>
        <div>
        <input type="checkbox" id="nav-toggle"></input>
        <div className="sidebar">
            <div className="sidebar-brand">
                <h2><span className="Inventario"></span> <span>Ventas</span></h2>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <a href="../index.html" className="product">
                        <img src={images.img_createw} width="30px" height="30px" alt=""/><span>Inicio</span></a>
                    </li>
                    <li>
                        <a href="Consulta de ventas" className="product">
                        <img src={images.img_searchw} width="30px" height="30px" alt=""/>Consulta de ventas</a>
                    </li>
                    <li>
                        <a href="reg_vta.html" className="active"><span className="home"></span>
                        <img src={images.img_saveb} width="30px" height="30px" alt=""/>Registro de ventas</a>
                    </li>
                    <li>
                        <a href="cons_ind.html"><span className="product"></span>
                        <img src={images.img_searchw} width="30px" height="30px" alt=""/>Consulta Individual</a>
                    </li>
                    <li>
                        <a href="md_rg_venta.html"><span className="salesman"></span>
                        <img src={images.img_createw} width="30px" height="30px" alt=""/>Modificación de ventas</a>
                    </li>
                </ul>
            </div>
        </div>
        
        
        <header>
            <div>
                <img src={images.img_log} width="60px" height="60px" alt=""/>
            </div>
            <div className="name-company">
                <h2><span>Tecnosoluciones</span></h2>
            </div>
            <div className="user-wrapper">
                <img src={images.img_icon} width="40px" height="40px" alt=""/>
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
                        <h2>Registro de ventas</h2>
                    </div>
                </div>
            </div>
            <br/>
            
            <div className="main-container">
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">No. Documento Cliente</label>
                    <input type="number" className="formscontrol" placeholder="Ingrese No. Documento cliente" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Producto</label>
                    <input type="text" className="formscontrol" placeholder="Registre Producto" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Código de producto</label>
                    <input type="text" className="formscontrol" placeholder="Código de producto" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Descuento</label>
                    <input type="number" className="formscontrol" placeholder="Ingrese descuento autorizado" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">No. Unidades vendidas</label>
                    <input type="number" className="formscontrol" placeholder="Registre No. unidades vendidas" required autocomplete></input>
                </div>
            </div>
            
            <br/>

            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <button type="button" onclick= "aceptar();" className="btn btn-outline-primary" id="butt_cons_vend">Registrar</button>
            </div>
        </main> 
    </div>

</>
);
}


export default Salesrecord;