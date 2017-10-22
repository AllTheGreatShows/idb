import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


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
				<Navbar color="faded" dark>
        <NavbarBrand href="/">All The Great Shows</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/Grid/">Home</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/podcasts.js/">Podcasts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/genre.js/">Genres</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/host.js/">Hosts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/episodes.js/">Episodes</NavLink>
              </NavItem> 
              <NavItem>
                <NavLink href="/about.js/">About</NavLink>
              </NavItem> 
              */}
            </Nav>
        </Navbar>
			</div>
			);
	}
}

export default NavBar;