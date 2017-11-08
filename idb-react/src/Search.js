import React from 'react';
import { FormGroup, Label, Input, Button, Collapse, Card, CardBody } from 'reactstrap';


/*<Form>
  <FormGroup>
    <Label for="exampleEmail">Email</Label>
    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
  </FormGroup>
</Form>
*/

class SearchBar extends React.Component {
  constructor (props) {
    super (props);
        this.state = {value: ''};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A search was submitted: ' + this.state.value);
    event.preventDefault();
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

export default SearchBar;