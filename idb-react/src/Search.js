import React from 'react';
import {Link} from 'react-router-dom';
import { FormGroup, Label, Input, Button, Collapse, Card, CardBody } from 'reactstrap';
import {getPodcastSearch, getProviderSearch, getGenreSearch, getEpisodeSearch} from "./Request";

class SearchBar extends React.Component {
  constructor (props) {
    super (props);
        this.state = {value: ''};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    // alert('no');
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //onSubmit={this.handleSubmit}
    // alert('A search was submitted: ' + this.state.value);
    event.preventDefault();
    this.props.onSearch(this.state.value);

  }

  render() { 
    var rows = []
      rows.push(
        <label>
          Search:
        </label>
      );

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} placeholder="Search" onChange={this.handleChange} />
        <input type="submit" value="Go" />
      </form>
    );
  }


}


class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
      return (
          <div>
                <Link to={"/search/podcast/" + this.props.match.params.searchterm + "/1"}>
                    <Button outline color="danger" size="sm"> Podcast Search Results </Button>
                </Link>
                {"\t"}
                <Link to={"/search/genre/" + this.props.match.params.searchterm + "/1"}>
                    <Button outline color="danger" size="sm"> Genre Search Results </Button>
                </Link>
                {"\t"}
                <Link to={"/search/episode/" + this.props.match.params.searchterm + "/1"}>
                    <Button outline color="danger" size="sm"> Episode Search Results </Button>
                </Link>
                {"\t"}
                <Link to={"/search/provider/" + this.props.match.params.searchterm + "/1"}>
                    <Button outline color="danger" size="sm"> Provider Search Results </Button>
                </Link>
          </div>
      );
  }

}




export default SearchBar;
export {SearchResults};