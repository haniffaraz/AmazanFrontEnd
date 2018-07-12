import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Page from './Page';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand='Optima' center='true' className="nav">
          <NavItem href="/">Home</NavItem>
          <NavItem href='#'>Sign Up</NavItem>
        <NavItem href="/cart">Cart</NavItem>
        </Navbar>
      </div>

  )}
}

export default NavBar;
