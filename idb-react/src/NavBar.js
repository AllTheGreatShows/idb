import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from './Carousel';
import About from './About';
import Podcast from './Podcast';
import Episode from './Episode';
import Genre from './Genre';
import Provider from './Provider';
import {getPodcasts, getEpisodes, getGenres, getProviders} from './Request';
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
            render={() => <Grid Data={getPodcasts()} CardTitle={"title"} ImageField={"image_url"} MediaType = "podcast" page={this.page} />}/>
          <Route path="/podcast/page=:pagenum" component={Podcast}/>
          
          <Route path="/provider" 
            render={() => <Grid Data={getProviders()} CardTitle={"name"} ImageField={""} MediaType = "provider" page={this.page}/>}/>
          <Route path="/provider/page=:pagenum" component={Provider}/>


          <Route path="/genre" 
            render={() => <Grid Data={getGenres()} CardTitle={"name"} ImageField={""} MediaType = "genre" page={this.page}/>}/>
          <Route path="/genre/page=:pagenum" component={Genre}/>
          
          <Route path="/episode" 
            render={() => <Grid Data={getEpisodes()} CardTitle={"title"} ImageField={""} MediaType = "episode" page={this.page}/>}/>
          <Route path="/episode/page=:pagenum" component={Episode}/>
        </div>
      </Router>);
	}
}

export default NavBar;