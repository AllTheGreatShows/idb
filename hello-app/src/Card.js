import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
	  CardTitle, CardSubtitle} from 'reactstrap';

class Mycard extends Component {

  render() {
    return (
			<Card className="square" onClick={() => this.props.onClick()}>
        <CardImg top width="320px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
	        <CardBody>
		        <CardTitle>{this.props.title} Card Title</CardTitle>
				    <CardSubtitle>Card subtitle</CardSubtitle>
					  <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
					</CardBody>
			</Card>
      );
  }
}


function Fcard(props) {
	return (
			<Card className="square" onClick={props.onClick}>
        <CardImg top width="200px" src={props.image} alt="Card image cap" />
	        <CardBody>
		        <CardTitle>{props.title}</CardTitle>
				    {//<CardSubtitle>Card subtitle</CardSubtitle>
					  //<CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
						}
					</CardBody>
			</Card>
      );
}

export {Fcard};
export default Mycard;
