import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Grid from './Grid';


class NavBar extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
        isOpen: true
    };
  }

	render () {
		return (
			<div>
				<Navbar color="black" light>
        <NavbarBrand href="/">All The Great Shows</NavbarBrand>
            <Nav navbar justified horizontal>
              <NavItem Home>
                <NavLink disabled href="/Home/">Home</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
			</div>
			);
	}
}

export default NavBar;