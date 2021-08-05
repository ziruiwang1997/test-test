import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import NavigationComponent from './components/NavComponents/NavigationComponent.js';
import UserNaviComponent from './components/NavComponents/UserNaviComponent.js';

import LoginComponent from './components/UserComponents/LoginComponent';
import RegistrationComponent from './components/UserComponents/RegistrationComponent';

function App() {
  return (
    <Router>
      <div>
        <NavigationComponent />
        <UserNaviComponent />

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Search</Link> |
              <Link to="/Login">Login</Link> |
              <Link to="/Register">Register</Link> |
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <Route exact path="/Login" component={LoginComponent} />
          <Route exact path="/Register" component={RegistrationComponent} />
          <Route exact path="/AccountInformation" component={LoginComponent} />
          <Route exact path="/Confirmation" component={LoginComponent} />
          <Route exact path="/Menu" component={LoginComponent} />
          <Route exact path="/OrderSummary" component={LoginComponent} />
          <Route exact path="/PastOrder" component={LoginComponent} />
          <Route exact path="/ShoppingBags" component={LoginComponent} />
        </Switch>
      </div>

    </Router>

  );
}




export default App;
