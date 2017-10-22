import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Grid from './Grid';

class NavBar extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
      content: <div/>
    };
  }

  getHome() {
    this.setState({content: <Grid/>});
  }

	render () {
		return (
      <div>
        <div>
          <Navbar color="black" light>
          <NavbarBrand href="/">All The Great Shows</NavbarBrand>
              <Nav justified horizontal>
                <NavItem Home>
                  <NavLink onClick={() => this.getHome()}>Home</NavLink>
                </NavItem>
                <NavItem Podcasts>
                  <NavLink disabled href="/Podcasts/">Podcasts</NavLink>
                </NavItem>
                <NavItem Hosts>
                  <NavLink disabled href="/Hosts/">Hosts</NavLink>
                </NavItem>
                <NavItem Genre>
                  <NavLink disabled href="/Genre/">Genre</NavLink>
                </NavItem>
                <NavItem Episodes>
                  <NavLink disabled href="/Episodes/">Episodes</NavLink>
                </NavItem>
                <NavItem About>
                  <NavLink disabled href="/About/">About</NavLink>
                </NavItem>
              </Nav>
          </Navbar>
        </div>

        <div>
          {this.state.content}
        </div>
      </div>
			);
	}
}

export default NavBar;