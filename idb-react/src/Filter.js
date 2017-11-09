import React from 'react';
import { Form, FormGroup, Label, Input, Button, Collapse, Card, CardBody } from 'reactstrap';
import { getFilterDataPodcasts} from "./Request";

class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { alpha : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], value: Array(26).fill(false)};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const squares = this.state.value.slice();
        var userInput = [];
        for (var i = 0; i < this.state.alpha.length; i++) {
            if (squares[i] == 1) {
                userInput.push(this.state.alpha[i]);
            }
        }
        console.log("reached the submit handler");
        console.log("you picked: " + userInput);
        this.props.sendData(userInput);
        
        // alert("you picked: " + this.state.userInput);
    }

    handleChange(event) {
        const i = event.target.value;
        const squares = this.state.value.slice();
        squares[i] = !squares[i];
        this.setState({value: squares});
        // this.forceUpdate();
    }

    render() { 
        var rows = []
        for (var i = 0; i < this.state.alpha.length; i++) {
            rows.push(<FormGroup check inline>
                <Label check>
                <Input type="radio" onChange={this.handleChange} value={i}/> {this.state.alpha[i]}
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
class MyFilter extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
        this.getData = this.getData.bind(this);
        }

    getData = (childData) => {
        this.props.child_value(childData);
    }

    render() {
        return (
          <div>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Click me to filter!</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                    {/* put checkbox here */}
                    <CheckBox sendData={this.getData}/>
                    
                    
                </CardBody>
              </Card>
            </Collapse>
          </div>
        );
      }

    
    

    toggle() {
    this.setState({ collapse: !this.state.collapse });
    }
}


export default MyFilter;