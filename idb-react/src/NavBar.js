import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from './Carousel';
import About from './About';
import {getPodcasts, getEpisodes, getGenres, getProviders} from './Request';
import Grid from './Grid';


var whatToLoad = <Home/>;


const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
class NavBar extends React.Component {
	constructor(props) {
    super(props);

    this.props = {
      dPodcasts : getPodcasts(),
      dProviders : getProviders(),
      dGenres : getGenres(),
      dEpisodes : getEpisodes()};
    }

	render () {
    console.log("render");

		return (
      <Router>
        <div>
          <Navbar color="black" light>
          <NavbarBrand href="/">All The Great Shows</NavbarBrand>
              <Nav justified horizontal>
                <NavItem Home>
                  <NavLink><Link to="/">Home  </Link></NavLink>
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
          <Route exact path="/" component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/podcast" 
            render={(props) => <Grid Data={getPodcasts()} CardTitle={"title"} ImageField={"image_url"}/>}/>
          <Route path="/provider" 
            render={(props) => <Grid Data={getProviders()} CardTitle={"name"} ImageField={""}/>}/>
          <Route path="/genre" 
            render={(props) => <Grid Data={getGenres()} CardTitle={"name"} ImageField={""}/>}/>
          <Route path="/episode" 
            render={(props) => <Grid Data={getEpisodes()} CardTitle={"title"} ImageField={""}/>}/>
        </div>
      </Router>);
	}
}

export default NavBar;