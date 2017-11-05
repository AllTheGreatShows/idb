import React from 'react';
import { Form, FormGroup, Label, Input, Button, Collapse, Card, CardBody } from 'reactstrap';

function Checkbox(props) {
	return (
        <Form>
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" /> Comedy
            </Label>
          </FormGroup>
          <FormGroup check inline>
            <Label check>
               <Input type="checkbox" /> Thriller
            </Label>
          </FormGroup>
  
          <FormGroup check inline>
            <Label check>
               <Input type="checkbox" /> Politics
            </Label>
          </FormGroup>
  
          <FormGroup check inline>
            <Label check>
               <Input type="checkbox" /> Family
            </Label>
          </FormGroup>
  
          <FormGroup check inline>
            <Label check>
               <Input type="checkbox" /> Sports
            </Label>
          </FormGroup>
      </Form>
      );
}





// class InnerToggle extends React.Component {
//   render() {
//     return (
//       <div>
//         <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Genre</Button>
//         <Collapse isOpen={this.state.collapse}>
//           <Card>
//             <CardBody>
//                 {/* put checkbox here */}
//                 <Checkbox/>
//             </CardBody>
//           </Card>
//         </Collapse>
//       </div>
//     );
//   }

//   constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = { collapse: false };
//   }
  

//   toggle() {
//     this.setState({ collapse: !this.state.collapse });
//   }
// }

// made up of multiple toggles
class MyFilter extends React.Component {

    render() {
        return (
          <div>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Genre</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                    {/* put checkbox here */}
                    <Checkbox/>
                    <Button color="primary" size="sm">Submit</Button>{' '}
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