import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'style/Styles.css';
import images from 'images/index_img';



function Inquiryinv () {
    return(
        <>
        <div>
        <input type="checkbox" id="nav-toggle"></input>
        <div className="sidebar">
            <div className="sidebar-brand">
                <h2><span className="Inventario"></span> <span>Inventario</span></h2>
            </div>
            <div className="sidebar-menu">
                <li>
                    <a href="Home" className="product">
                    <img src={images.img_homew} width="30px" height="30px" alt=""/><span>Inicio</span></a>
                </li>
                <li>
                    <a href= "Invrecord"className="product"><span className="product"></span>
                    <img src={images.img_savew} width="30px" height="30px" alt=""/>Registro de inventario</a>
                </li>
                <li>
                    <a href="Invmodif"><span className="product"></span>
                    <img src={images.img_editw} width="30px" height="30px" alt=""/>Modificación de inventario</a>
                </li>
                <li>
                    <a href=  "InquiryInv" className="active"><span className="home"></span>
                    <img src={images.img_searchb} width="30px" height="30px" alt=""/>Consulta de Inventario</a>
                </li>
            </div>
        </div>

        <header>
            <div>
                <img src={images.img_logo} width="60px" height="60px" alt=""/>
            </div>
            <div className="name-company">
                 <div>Tecnosoluciones</div>
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
        
        <main>
             <div className = "main-content">
            
        <div className="container"> 
                <div className="row"> 
                    <div className="title">
                        <div>Consulta de inventario</div>
                    </div>
                </div>
            </div>
            <br/>
       
        <br/>
    
            <div className="row">
                <div className="col-sm-3">
                    <h6 className="card-title">Lote:</h6>
                    <input type="number"  className="formscontrol-c" placeholder="Ingrese No. Lote"></input>
                </div>
                <div className="col-sm-3">
                    <h6 className="card-title">Proveedor:</h6>
                    <input type="number"  className="formscontrol-c" placeholder="Ingrese nombre proveedor"></input>
                </div> 
                <div className="col-sm-3">
                    <h6 className="card-title">ID. Proveedor:</h6>
                    <input type="number"  className="formscontrol-c" placeholder="Ingrese Nit. Proveedor"></input>
                </div>
                <div className="col-sm-3">
                    <h6 className="card-title">Tipo de producto:</h6>
                    <input type="number"  className="formscontrol-c" placeholder="Ingrese tipo de producto"></input>
                </div> 
                <div className="row justify-content-center">
                        
                                <label className="labelform justify-content-center">Fecha de recepción</label>
                                <input type="datetime-local" className="formscontrol"></input>
                </div>
                    
            </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <button type="button" onclick= "aceptar();" className="btn btn-outline-primary" id="butt_cons_vend">Consulta</button>
                </div>
            </div>
        </main>
        </div>
        </>
        );
    }
    
    
    export default Inquiryinv;
