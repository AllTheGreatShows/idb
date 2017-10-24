import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from './Carousel';
import About from './About';

class NavBar extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
      content: <Home/>
    };
  }

  getHome() {
    this.setState({content: <Home/>});
  }

  getAbout() {
    this.setState({content: <About/>});
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
                <NavItem disabled Podcasts>
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
                  <NavLink onClick={() => this.getAbout()}>About</NavLink>
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