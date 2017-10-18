import React, { Component } from 'react';
import Mycard from './Card';
import {Row, Col} from 'reactstrap';


class Grid extends React.Component {
	renderCard (i) {
		return <Col sm="4"><Mycard value={i}/></Col>;
	}

	render () {
		return (
			<div>
				<Row>
					{this.renderCard(1)}
					{this.renderCard(2)}
					{this.renderCard(3)}
				</Row>
				<Row>
					{this.renderCard(4)}
					{this.renderCard(5)}
					{this.renderCard(6)}
				</Row>
			</div>
			);
	}
}

export default Grid;