import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from './Carousel';
import About from './About';
import Podcast from './Podcast';
import Episode from './Episode';
import Genre from './Genre';
import Provider from './Provider';
import {getPodcasts, getEpisodes, getGenres, getProviders, getFilterDataPodcasts} from './Request';
import Grid from './Grid';


class NavBar extends React.Component {
	constructor(props) {
    super(props);
    this.page = Array(1)
    this.page[0] = 1
    }

	render () {
    console.log("render");
		return (
      <Router>
        <div>
          <Navbar color="black" light>
          <NavbarBrand href="/home">All The Great Shows</NavbarBrand>
              <Nav justified horizontal>
                <NavItem Home>
                  <NavLink><Link to="/home">Home</Link></NavLink>
                </NavItem>
                <NavItem Podcasts>
                  <NavLink><Link to="/podcast/page=1">Podcasts</Link></NavLink>
                </NavItem>
                <NavItem Providers>
                  <NavLink><Link to="/provider/page=1">Providers</Link></NavLink>
                </NavItem>
                <NavItem Genre>
                  <NavLink><Link to="/genre/page=1">Genre</Link></NavLink>
                </NavItem>
                <NavItem Episodes>
                  <NavLink><Link to="/episode/page=1">Episodes</Link></NavLink>
                </NavItem>
                <NavItem About>
                  <NavLink><Link to="/about" >About </Link></NavLink>
                </NavItem>
              </Nav>
          </Navbar>
          
          <Route exact path="/home" component={Home}/>
          <Route path="/about"  component={About}/>       
          <Route path="/podcast/page=:pagenum" component={Podcast}/>
          <Route path="/podcast/sort=:sorttype/page=:pagenum" component={Podcast}/>
          <Route path="/provider/page=:pagenum" component={Provider}/>
          <Route path="/provider/sort=:sorttype/page=:pagenum" component={Provider}/>
          <Route path="/genre/page=:pagenum" component={Genre}/>
          <Route path="/genre/sort=:sorttype/page=:pagenum" component={Genre}/>
          <Route path="/episode/page=:pagenum" component={Episode}/>
          <Route path="/episode/sort=:sorttype/page=:pagenum" component={Episode}/>
        </div>
      </Router>);
	}
}

export default NavBar;