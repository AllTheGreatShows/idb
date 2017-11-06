import React from 'react';
import { Form, FormGroup, Label, Input, Button, Collapse, Card, CardBody } from 'reactstrap';

function Checkbox(props) {
    const genres = ['Alternative Health', 'Arts', 'Business', 'Business News', 'Careers', 'Comedy', 'Design', 'Education', 'Fashion & Beauty', 'Games & Hobbies', 'Government & Organizations', 'Health', 'Higher Education', 'History', 'Investing', 'Literature', 'Management & Marketing', 'Natural Sciences', 'News & Politics', 'Performing Arts', 'Personal Journals?', 'Podcasting', 'Podcasts', 'Professional', 'Religion & Spirituality', 'Science & Medicine', 'Self-Help', 'Social Sciences', 'Society & Culture', 'Sports & Recreation', 'TV & Film', 'Technology', 'Training'];
    var rows = []
    for (var i = 0; i < genres.length; i++) {
        rows.push(<FormGroup check inline>
            <Label check>
              <Input type="checkbox" /> {genres[i]}
            </Label>
          </FormGroup>);
    }

	return (
        <Form>
            {rows}
      </Form>
      );
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
                    <Checkbox/>
                    <Button color="primary" size="sm" onClick={() => this.handleClick()}>Submit</Button>{' '}
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