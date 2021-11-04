import React, {Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'style/estilos.css';
import images from 'images/index_img';
import {Link} from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';


function Register () {
    return(
        <div className="Register">
            <body>
                <h3>Registrate</h3>
                        <select className ="identify" name="identificación">
                        <option value= "">Tipo de identificación</option>
                        <option value= "CC">Cédula de ciudadanía</option>
                        <option value= "CE">Cédula de extranjería</option>
                        <option value= "NIT">NIT</option>
                        </select>
                    <div className="form-group5">
                        <input type="email" className="formcontrol" value="Ingresé su nombre o nombre de empresa"/>
                    </div>
                    <div className="form-group1">
                        <input type="email" className="formcontrol" value="Ingresé su correo electrónico"/>
                    </div>
                    <div className="form-group2">
                        <input type="Contraseña" className="formcontrol" value="Ingresé su contraseña"/>
                    </div>
                <div className="form-row d-flex justify-content-between mt-4 mb-2">
                    <div className="form-group3">
                        <div className="formscheck">
                            <input className="form-check-input" type="checkbox" id="basic_checkbox_1"/>
                            <label className="form-check-label" for="basic_checkbox_1">Recordarme</label>
                        </div>
                        <div className="form-group4">
                            <Link to="page-forgot-password.html">¿Olvidaste tu contraseña?</Link>
                        </div>
                        <div className="signup">
                            <button type="submit" className="signup">Iniciar Sesión</button>
                        </div>
                        <div className="new-account">
                        <p>¿No tienes una cuenta? <Link to = "./page-register.html"className="text-primary" >Crea una nueva cuenta</Link></p>
                        </div>
                </div>
                </div>    
        </body>
    </div>


    );

}

export default Register;