import React, {useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import images from 'images/index_img';
import {Link} from 'react-router-dom';
import 'style/register.css';
import { useAuth0 } from '@auth0/auth0-react';
import {GoogleLogin} from 'react-google-login';
import { text } from 'dom-helpers';


function Login () {
    function responseGoogle(response){
        console.log (response);
    }

    return(
        <div className="Login">
         <div className= "fondo">
          <body>
            <h2>Descubre las soluciones
            óptimas para tu empresa</h2>
            <div class="form-group1">
                <input type="email" class="formcontrol" value="Ingrese su correo electrónico"/>
            </div>
            <div class="form-group2">
                <input type="Contraseña" class="formcontrol" value="Ingrese su contraseña"/>
            </div>
                <div class="form-row d-flex justify-content-between mt-4 mb-2">
                    <div class="form-group3">
                        <div class="form-check ml-2">
                            <input class="form-check-input" type="checkbox" id="basic_checkbox_1"/>
                            <label class="form-check-label" for="basic_checkbox_1">Recordarme</label>
                        </div>
                        <div class="form-group4">
                            <a href="page-forgot-password.html">¿Olvidaste tu contraseña?</a>
                        </div>
                    </div>
                    <div class="signup">
                        <button type="submit" class="signup">Iniciar Sesión</button>
                    </div>
                    <div class="new-account">
                    <div>¿No tienes una cuenta? <Link to = "./page-register.html">Crea una nueva cuenta</Link></div>
                    
                            <GoogleLogin
                                clientId="817299739432-6f87ik9hus03a3eog8gl959hm29gsgac.apps.googleusercontent.com"
                                buttonText="Acceder con Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            /> 
                    </div>
                </div>
        </body>
        </div>
    </div>                   
                    

    );
}


export default Login;