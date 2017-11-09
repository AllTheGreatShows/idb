import React from 'react';
import { Form, FormGroup, Label, Input, Button, Collapse, Card, CardBody } from 'reactstrap';
import { getFilterDataPodcasts} from "./Request";

class GenreCheckbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { genres : ['Alternative Health', 'Arts', 'Business', 'Business News', 'Careers', 'Comedy', 'Design', 
        'Education', 'Fashion & Beauty', 'Games & Hobbies', 'Government & Organizations', 'Health', 'Higher Education', 'History', 
        'Investing', 'Literature', 'Management & Marketing', 'Natural Sciences', 'News & Politics', 'Performing Arts', 'Personal Journals',
         'Podcasting', 'Podcasts', 'Professional', 'Religion & Spirituality', 'Science & Medicine', 'Self-Help', 'Social Sciences', 
         'Society & Culture', 'Sports & Recreation', 'TV & Film', 'Technology', 'Training'], alpha : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], value: Array(9).fill(false), userInputGenre: {'genre':[]}, userInputAlpha: {'alpha':[]}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        var str = "";
        const squares = this.state.value.slice();
        for (var i = 0; i < this.state.alpha.length; i++) {
            if (squares[i] == 1) {
                this.state.userInputAlpha["alpha"].push(this.state.alpha[i]);
                j = j + 1;
            }
        }
//        alert("you have selected: " + str);
        var j = getFilterDataPodcasts(str);
        console.log("reached the submit handler");
        console.log("you picked: " + this.state.userInputAlpha["alpha"]);
        alert("you picked: " + this.state.userInputAlpha["alpha"]);
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
        for (var i = 0; i < this.state.alpha.length; i++) {
            rows.push(<FormGroup check inline>
                <Label check>
                <Input type="checkbox" onChange={this.handleChange} value={i}/> {this.state.alpha[i]}
                </Label>
            </FormGroup>);
        }


        return (
            <Form onSubmit={this.handleSubmit}>
                {rows}
                <input type="submit" value="Submit" />
            </Form>
        );
    }
}


// made up of multiple toggles
class GenreFilter extends React.Component {

    handleClick() {
        console.log("submitted")
    }

    render() {
        return (
          <div>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Click me to filter!</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                    {/* put checkbox here */}
                    <GenreCheckbox/>
                    
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


export default GenreFilter;