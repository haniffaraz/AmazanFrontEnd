import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Page from './Page';
<<<<<<< HEAD
import Cart from './Cart';


=======
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
>>>>>>> refs/remotes/origin/master

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand='Optima' center='true' className="nav">
          <NavItem href="/">Home</NavItem>
          <NavItem href='#'>Sign Up</NavItem>
<<<<<<< HEAD
          <NavItem>Cart</NavItem>
        </Navbar>

          <Switch>
            <Route exact path='/' component={Page} />
            {/* <NavItem href='#'><Route exact path='/cart' component={Cart} /></NavItem> */}
            <Route exact path='/cart' component={Cart} />
          </Switch>
=======
        <NavItem href="/cart">Cart</NavItem>
        </Navbar>
>>>>>>> refs/remotes/origin/master
      </div>

  )}
}

export default NavBar;
