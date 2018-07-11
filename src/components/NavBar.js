import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from './Page';


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand='SuperStore' center='true' className="nav">
          <NavItem>Home</NavItem>
          <NavItem href='#'>Sign Up</NavItem>
          <NavItem href='#'>Cart</NavItem>
        </Navbar>

          <Switch>
            <Route exact path='/' component={Page} />
            {/* <NavItem href='#'><Route exact path='/cart' component={Cart} /></NavItem> */}
          </Switch>
      </div>

  )}
}

export default NavBar;
//
// <Switch>
//   <Route exact path='/' component={Page} />
//   <Route exact path='/signup' component={Signup} />
//   <Route exact path='/cart' component={Cart} />
// </Switch>
