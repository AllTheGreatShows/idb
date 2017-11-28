import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Home from './Carousel';
import About from './About';
import Podcast from './Podcast';
import Episode from './Episode';
import Genre from './Genre';
import MyMedia from './Media';
import Provider from './Provider';
import {getPodcasts, getEpisodes, getGenres, getProviders, getFilterDataPodcasts} from './Request';
import Grid from './Grid';
import SearchResults from './Search';
import PodcastSearchGrid from './PodcastSearch';
import EpisodeSearchGrid from './EpisodeSearch';
import GenreSearchGrid from './GenreSearch';
import ProviderSearchGrid from './ProviderSearch';


class NavBar extends React.Component {
	constructor(props) {
    super(props);
    this.page = Array(1)
    this.page[0] = 1
    this.id = -1;
    this.state = {text: '' };

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({text: event.target.value})
    }

	render () {
    console.log("render");
		return (
      <Router>
        <div>
          <Navbar className={"Navbar"}>
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

            <div>
              <input 
                type="text" placeholder="Search..." value={this.state.text}
                onChange={this.handleChange}
              />
              <Link to={"/search/" + this.state.text}>
                  <Button className={"SearchButton"} size={"sm"}> Search </Button>
              </Link>
            </div>

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
          <Route path="/:idtype/id=:idnum" component={MyMedia}/>
          <Route path="/search/:searchterm" component={SearchResults}/>
          <Route path="/search/:searchterm/podcast/page=:pagenum" component={PodcastSearchGrid}/>
          <Route path="/search/:searchterm/episode/page=:pagenum" component={EpisodeSearchGrid}/>
          <Route path="/search/:searchterm/genre/page=:pagenum" component={GenreSearchGrid}/>
          <Route path="/search/:searchterm/provider/page=:pagenum" component={ProviderSearchGrid}/>

        </div>
      </Router>);
	}
}

export default NavBar;