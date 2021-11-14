import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'style/Styles.css';
import images from 'images/index_img';


function Invrecord () {
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
                    <a href= "Invrecord" className="active"><span className="home"></span>
                    <img src={images.img_saveb} width="30px" height="30px" alt=""/>Registro de inventario</a>
                </li>
                <li>
                    <a href="Invmodif" className="product"><span className="product"></span>
                    <img src={images.img_editw} width="30px" height="30px" alt=""/>Modificación de inventario</a>
                </li>
                <li>
                    <a href="InquiryInv"><span className="product"></span>
                    <img src={images.img_searchw} width="30px" height="30px" alt=""/>Consulta de Inventario</a>
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
                        <h2>Registro de inventario</h2>
                    </div>
                </div>
            </div>
            <br/>
                    
            <div className="main-container">

                
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Categoria</label>
                    <input type="text" className="formscontrol" placeholder="Ingrese lote del producto" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Código del producto</label>
                    <input type="text" className="formscontrol" placeholder="Ingrese lote del producto" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Nombre del Producto</label>
                    <input type="text" className="formscontrol" placeholder="Ingrese nombre del producto" required autocomplete></input>
                </div>
                
                <div className="row justify-content-center">
                    <div className="text-center">
                        <form action="#">
                            <div className="form-group">
                                <label className="labelform justify-content-center">Fecha de recepción</label>
                                <input type="datetime-local" className="formscontrol"></input>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Marca</label>
                    <input type="text" className="formscontrol" placeholder="Ingrese proveedor" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Proveedor</label>
                    <input type="text" className="formscontrol" placeholder="Ingrese proveedor" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Unidades</label>
                    <input type="number" className="formscontrol" placeholder="Ingrese número de unidades de producto" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Novedades</label>
                    <input type="text" className="formscontrol" placeholder="Ingrese cualquier novedad que se presente con este lote" required autocomplete></input>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Imagen del producto</label>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <button type="button" onclick= "aceptar();" className="btn btn-outline-primary" id="butt_cons_vend">Cargar imagen</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <label className="labelform justify-content-center">Almacenamiento</label>
                    <input type="text" className="formscontrol" placeholder="Ingrese ubicación final del lote" required autocomplete></input>
                </div>
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
    
    
    export default Invrecord;