import React, { Component } from 'react';
import Mycard, {Fcard} from './Card';
import {Row, Col, CardDeck} from 'reactstrap';


class Grid extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

	renderCard (i) {
		return <Fcard 
			value={this.state.squares[i]}
			onClick={() => this.handleClick(i)}/>;
	}

	render () {
		return (
			<div>
				<CardDeck>
					{this.renderCard(1)}
					{this.renderCard(2)}
					{this.renderCard(3)}
				</CardDeck>
				<CardDeck>
					{this.renderCard(4)}
					{this.renderCard(5)}
					{this.renderCard(6)}
				</CardDeck>
				<CardDeck>
					{this.renderCard(7)}
					{this.renderCard(8)}
					{this.renderCard(9)}

				</CardDeck>
			</div>
			);
	}
}

export default Grid;