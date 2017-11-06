import React from 'react';
import { Form, FormGroup, Label, Input, Button, Collapse, Card, CardBody } from 'reactstrap';

class MyCheckbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { genres : ['Alternative Health', 'Arts', 'Business', 'Business News', 'Careers', 'Comedy', 'Design', 
        'Education', 'Fashion & Beauty', 'Games & Hobbies', 'Government & Organizations', 'Health', 'Higher Education', 'History', 
        'Investing', 'Literature', 'Management & Marketing', 'Natural Sciences', 'News & Politics', 'Performing Arts', 'Personal Journals',
         'Podcasting', 'Podcasts', 'Professional', 'Religion & Spirituality', 'Science & Medicine', 'Self-Help', 'Social Sciences', 
         'Society & Culture', 'Sports & Recreation', 'TV & Film', 'Technology', 'Training'], value: 'foo'};

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        alert("you have selected" + this.state.value);
        console.log("reached the submit handler")
        // event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() { 
        var rows = []
        for (var i = 0; i < this.state.genres.length; i++) {
            rows.push(<FormGroup check inline>
                <Label check>
                <Input type="checkbox" onChange={this.handleChange} /> {this.state.genres[i]}
                </Label>
            </FormGroup>);
        }
     
        return (
            <Form>
                {rows}
                <Button color="primary" size="sm" onClick={this.handleSubmit()} >Submit</Button>{' '}
            </Form>
        );
    }
}


// made up of multiple toggles
class MyFilter extends React.Component {

    handleClick() {
        console.log("submitted")
    }

    render() {
        return (
          <div>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Genre</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                    {/* put checkbox here */}
                    <MyCheckbox/>
                    
                </CardBody>
              </Card>
            </Collapse>
          </div>
        );
      }

    constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
    }
    

    toggle() {
    this.setState({ collapse: !this.state.collapse });
    }
}


export default MyFilter;