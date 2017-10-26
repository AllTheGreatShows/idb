import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from './Carousel';
import About from './About';
import {getPodcasts, getEpisodes, getGenres, getProviders} from './Request';
import Grid from './Grid';

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

  getPodcasts(){
    var v = getPodcasts();

    return this.setState({content: <Grid Data={v} CardTitle={"title"} ImageField={"image_url"}/>});
  }

  getProviders(){
    var v = getProviders();
    return this.setState({content: <Grid Data={v} CardTitle={"name"} ImageField={""}/>});
  }

  getGenres(){
    var v = getGenres();
    return this.setState({content: <Grid Data={v} CardTitle={"name"} ImageField={""}/>});
  }

  getEpisodes(){
    var v = getEpisodes();
    return this.setState({content: <Grid Data={v} CardTitle={"title"} ImageField={""}/>});
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
                  <NavLink onClick={() => this.getPodcasts()}>Podcasts</NavLink>
                </NavItem>
                <NavItem Providers>
                  <NavLink onClick={() => this.getProviders()}>Providers</NavLink>
                </NavItem>
                <NavItem Genre>
                  <NavLink onClick={() => this.getGenres()}>Genres</NavLink>
                </NavItem>
                <NavItem Episodes>
                  <NavLink onClick={() => this.getEpisodes()}>Episodes</NavLink>
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