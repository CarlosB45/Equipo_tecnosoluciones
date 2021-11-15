import React from 'react';
import {Link, Navlink} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'style/Styles.css';
import images from 'images/index_img';


function Invmodif () {
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
                    <Link to="/inicio/Home">
                    <img src={images.img_homew} width="30px" height="30px" alt=""/><span>Inicio</span></Link>
                </li>
                <li>
                    <Link to="/mod_inventarios/Invrecord">
                    <img src={images.img_savew} width="30px" height="30px" alt=""/>Registro de inventario</Link>
                </li>
                <li>
                    <Link to="/mod_inventarios/Invmodif" className="active">
                    <img src={images.img_editb} width="30px" height="30px" alt=""/>Modificación de inventario</Link>
                </li>
                <li>
                    <Link to="/mod_inventarios/InquiryInv">
                    <img src={images.img_searchw} width="30px" height="30px" alt=""/>Consulta de Inventario</Link>
                </li>
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
                        <h2>Modificación de registro de inventario</h2>
                    </div>
                </div>
            </div>
            <br/>
                    
            <div className="main-container">
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Producto</label>
                    <input type="text" className="formscontrol" placeholder="Modifique nombre del producto" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Lote</label>
                    <input type="text" className="formscontrol" placeholder="Modifique lote del producto" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Conteo de unidades</label>
                    <input type="number" className="formscontrol" placeholder="Modifique número de unidades de producto" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Novedades</label>
                    <input type="text" className="formscontrol" placeholder="Ingrese motivo de modificación" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Almacenamiento</label>
                    <input type="text" className="formscontrol" placeholder="Modifique ubicación final del lote" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Imagen del producto</label>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <button type="button" onclick= "aceptar();" className="btn btn-outline-primary" id="butt_cons_vend">Cargar imagen</button>
                    </div>
                </div>
                <br/>
                <div className="row justify-content-center">
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <button type="button" onclick= "aceptar();" className="btn btn-outline-primary" id="butt_cons_vend">Guardar información</button>
                    </div>
                </div>
            </div>
        </main>
        </div>
        </>
        );
    }
    
    
    export default Invmodif;