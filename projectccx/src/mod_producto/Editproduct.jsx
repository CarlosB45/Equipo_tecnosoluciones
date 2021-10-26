import React, {Component} from 'react';
import '../style/Styles.css';
import '../style/Styles.css';

function Editproduct () {
    return(
        <div className="editproduct">
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
                            <a href="./Listproducts"><span className="salesman"></span>
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
                <div className="Title2">Edición de productos</div>
                &nbsp;
                &nbsp;
                <div className="field">
                    <label className="labelform">Código del producto</label>
                    <input type="number" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <label className="labelform">Nombre del producto</label>
                    <input type="text" className="formscontrol" required autocomplete/>
                 </div>
                <div className="field">
                    <label className="labelform">Marca</label>
                    <input type="text" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <label className="labelform">Referencia</label>
                    <input type="text" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <label className="labelform">Valor unitario</label>
                    <input type="text" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <label className="labelform">Proveedor</label>
                <input type="text" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <label className="labelform">Imagen del producto</label>
                    <input type="submit" className="botonedit" value="Cargar Imagen"/>
                </div>
                <div className="field">
                    <label className="labelform">Almacenamiento</label>
                    <input type="text" className="formscontrol" required autocomplete/>
                </div>
                <div className="field">
                    <input type="submit" className="botonedit" value="Actualizar Producto"/>
                </div>
                <div className="field">
                    <input type="submit" className="botonedit" value="Eliminar Producto"/>
                </div>
            </main>
        </div>


    );
}
    export default Editproduct;