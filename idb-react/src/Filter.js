import React from 'react';
import { Form, FormGroup, Label, Input, Button, Collapse, Card, CardBody } from 'reactstrap';

class MyCheckbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { genres : ['Alternative Health', 'Arts', 'Business', 'Business News', 'Careers', 'Comedy', 'Design', 
        'Education', 'Fashion & Beauty', 'Games & Hobbies', 'Government & Organizations', 'Health', 'Higher Education', 'History', 
        'Investing', 'Literature', 'Management & Marketing', 'Natural Sciences', 'News & Politics', 'Performing Arts', 'Personal Journals',
         'Podcasting', 'Podcasts', 'Professional', 'Religion & Spirituality', 'Science & Medicine', 'Self-Help', 'Social Sciences', 
         'Society & Culture', 'Sports & Recreation', 'TV & Film', 'Technology', 'Training'], value: Array(9).fill(false)};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        var str = "";
        const squares = this.state.value.slice();
        for (var i = 0; i < this.state.genres.length; i++) {
            if (squares[i] == 1)
                str = str + this.state.genres[i] + " | ";
        }
        alert("you have selected: " + str);
        console.log("reached the submit handler");
        // event.preventDefault();
    }

    handleChange(event) {
        const i = event.target.value;
        const squares = this.state.value.slice();
        squares[i] = !squares[i];
        this.setState({value: squares});
        // this.setState({value: event.target.value});
        // console.log("index"+this.props.index);
    }

    render() { 
        var rows = []
        for (var i = 0; i < this.state.genres.length; i++) {
            rows.push(<FormGroup check inline>
                <Label check>
                <Input type="checkbox" onChange={this.handleChange} value={i}/> {this.state.genres[i]}
                </Label>
            </FormGroup>);
        }
     
                     // <Button color="primary" size="sm" onClick={this.handleSubmit()} >Submit</Button>{' '}

        return (
            <Form onSubmit={this.handleSubmit}>
                {rows}
                <input type="submit" value="Submit" />
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