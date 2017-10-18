import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
	  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Mycard extends Component {
  render() {
    return (
			<Card >
        <CardImg top width="320px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
	        <CardBody>
		        <CardTitle>{this.props.value} Card title</CardTitle>
				    <CardSubtitle>Card subtitle</CardSubtitle>
					  <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
						<Button>Button</Button>
					</CardBody>
			</Card>
      );
  }
}

export default Mycard;
