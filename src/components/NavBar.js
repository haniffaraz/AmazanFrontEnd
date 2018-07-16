import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Page from './Page';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavBar extends React.Component {
 render() {
   return (
     <div>
        <Navbar brand='OPTIMA' center='true' className="nav1 brand-logo ">
          </Navbar>
       <Navbar brand='Optima' center='true' className="nav brand-logo ">
         <NavItem href="/">Home</NavItem>
         <NavItem href='#'>Sign Up</NavItem>
       <NavItem href="/cart">Cart</NavItem>
       </Navbar>
     </div>

 )}
}

export default NavBar;
