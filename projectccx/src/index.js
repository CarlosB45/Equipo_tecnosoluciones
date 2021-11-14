import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './/App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
//import ConlVend from './pages/mod_vendedor/index'

ReactDOM.render(
  <Auth0Provider
  domain="development-web.us.auth0.com"
  clientId="eSPZYvuh7RhZAXUwooRNaIXcx9INmou8"
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

//<App />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();