import React from 'react';
import {Link} from 'react-router-dom';
import { FormGroup, Label, Input, Button, Collapse, Card, CardBody } from 'reactstrap';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
      var term = this.props.match.params.searchterm;
      return (
          <div>
                <Link to={"/search/"+term+"/podcast/page=1"}>
                    <Button outline color="danger" size="sm"> Podcast Search Results </Button>
                </Link>
                {"\t"}
                <Link to={"/search/"+term+"/genre/page=1"}>
                    <Button outline color="danger" size="sm"> Genre Search Results </Button>
                </Link>
                {"\t"}
                <Link to={"/search/"+term+"/episode/page=1"}>
                    <Button outline color="danger" size="sm"> Episode Search Results </Button>
                </Link>
                {"\t"}
                <Link to={"/search/"+term+"/provider/page=1"}>
                    <Button outline color="danger" size="sm"> Provider Search Results </Button>
                </Link>
          </div>
      );
  }

}

export default SearchResults;