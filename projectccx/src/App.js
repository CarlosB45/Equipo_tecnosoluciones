import React, { Component } from "react";
//import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import routes from './config/routes'
//import { render } from "@testing-library/react";
//import HolaMundo, { AdiosMundo } from './components/HolaMundo';

class App extends Component {
  render(){
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (
      <BrowserRouter>
        {routeComponents}
      </BrowserRouter>
    );
  }
}

export default App;