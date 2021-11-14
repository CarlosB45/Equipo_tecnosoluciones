import React, {useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import images from 'images/index_img';
import {Link} from 'react-router-dom';
import 'style/register.css';
import {GoogleLogin} from 'react-google-login';


function Login () {
    function responseGoogle(response){
        console.log (response);
    }

    return(
        <div className="Login">
         <div className= "fondo">
          <body>
            <h2>Descubre las soluciones<br/>
            óptimas para tu empresa<br/></h2>
            <h3>Iniciar Sesión</h3>
            <div className="form-group1">
                <input type="email" className="formcontrol" value="Ingrese su correo electrónico"/>
            </div>
            <div className="form-group2">
                <input type="Contraseña" className="formcontrol" value="Ingrese su contraseña"/>
            </div>
                <div className="form-row d-flex justify-content-between mt-4 mb-2">
                    <div className="form-group3">
                        <div className="form-check ml-2">
                            <input className="form-check-input" type="checkbox" id="basic_checkbox_1"/>
                            <label className="form-check-label" for="basic_checkbox_1">Recordarme</label>
                        </div>
                        <div className="new-account1">
                          
                            <GoogleLogin
                                clientId="817299739432-6f87ik9hus03a3eog8gl959hm29gsgac.apps.googleusercontent.com"
                                buttonText="Acceder con Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                            <div className="new-account2">
                            <button type="submit" className="signup">Iniciar Sesión</button> 
                            </div>
                        </div>
                                              
                        <div className="form-group">
                            <div><Link to="page-forgot-password.html">¿Olvidaste tu contraseña?</Link></div>       
                            <div><Link to = "./page-register.html">Crea una nueva cuenta</Link></div>    
                        </div>
                        
                        
                </div>
            </div>
        </body>
        </div>
    </div>                   
                    

    );
}


export default Login;