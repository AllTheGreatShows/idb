import React from 'react';
import {Link} from 'react-router-dom';
import { FormGroup, Label, Input, Button, Collapse, Card, CardBody } from 'reactstrap';

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

export default SearchResults;