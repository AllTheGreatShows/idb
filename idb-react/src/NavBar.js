import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from './Carousel';
import About from './About';
import {getPodcasts, getEpisodes, getGenres, getProviders} from './Request';
import Grid from './Grid';


class NavBar extends React.Component {
	constructor(props) {
    super(props);
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
                  <NavLink><Link to="/podcast">Podcasts</Link></NavLink>
                </NavItem>
                <NavItem Providers>
                  <NavLink><Link to="/provider">Providers</Link></NavLink>
                </NavItem>
                <NavItem Genre>
                  <NavLink><Link to="/genre">Genre</Link></NavLink>
                </NavItem>
                <NavItem Episodes>
                  <NavLink><Link to="/episode">Episodes</Link></NavLink>
                </NavItem>
                <NavItem About>
                  <NavLink><Link to="/about" >About </Link></NavLink>
                </NavItem>
              </Nav>
          </Navbar>
          
          <Route exact path="/home" component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/podcast" 
            render={() => <Grid Data={getPodcasts()} CardTitle={"title"} ImageField={"image_url"} />}/>
          <Route path="/provider" 
            render={() => <Grid Data={getProviders()} CardTitle={"name"} ImageField={""}/>}/>
          <Route path="/genre" 
            render={() => <Grid Data={getGenres()} CardTitle={"name"} ImageField={""}/>}/>
          <Route path="/episode" 
            render={() => <Grid Data={getEpisodes()} CardTitle={"title"} ImageField={""}/>}/>
        </div>
      </Router>);
	}
}

export default NavBar;