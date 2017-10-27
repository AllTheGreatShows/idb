import React, { Component } from 'react';
import Mycard, {Fcard} from './Card';
import MyMedia from './Media'
import {Row, Col, CardDeck} from 'reactstrap';


var sampleData = [["Name", "Image"], 
["The Joe Rogan Experience", "http://is1.mzstatic.com/image/thumb/Music127/v4/d0/e6/5f/d0e65f81-c2cf-7f59-38e4-6abcfab7e38a/source/200x200bb.png"],
["The Splendid Table", "http://is3.mzstatic.com/image/thumb/Music71/v4/1a/36/4e/1a364eba-792c-09c3-545b-1382c7b01a94/source/200x200bb.jpg"],
["Rough Translation", "http://is1.mzstatic.com/image/thumb/Music118/v4/f4/d2/18/f4d218f7-cc28-e9f2-69f6-958abc6cd9b0/source/200x200bb.png"]];




class Grid extends React.Component {
	constructor(props) {
    super(props);
    const squaresT = Array(9);//Titles
    const squaresI = Array(9).fill("");//Images

    //obj
    //titleAttr
    //imgAttr
    const obj = this.props.Data;
	var hasImg = !(this.props.ImageField === "");
	console.log(obj);
    for (var i = obj["objects"].length - 1; i >= 0; i--) {
		 //obj[i]
			squaresT[i] = obj["objects"][i][this.props.CardTitle];

			if (hasImg) squaresI[i] = obj["objects"][i][this.props.ImageField];
			else{
				if (this.props.CardTitle == "title")
					squaresI[i] = obj["objects"][i]["podcast"]["image_url"];					
				else
					squaresI[i] = obj["objects"][i]["podcasts"][0]["image_url"];
				
			}
    }
    
    /*
    for (var i = 0; i < squaresT.length; i++) {
    	squaresT[i] = sampleData[i%3+1][0];
    	squaresI[i] = sampleData[i%3+1][1];
    };
	*/

	this.state = {
		squares: squaresT,
		images: squaresI,
	}

    this.state = {
      content: <div>
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
    };
    
  }

  handleClick(i) {
  	/* TODO: Make this advance to the page of the podcast
  		
    const squares = this.state.squares.slice();
    squares[i] = i;
    this.setState({squares: squares});
      */
    const detail = <MyMedia
    	json={this.props.Data} />
  }

	renderCard (i) {
		i = i-1;
		console.log(this.state.squares[1])
		return <Fcard
			title={String(this.state.squares[i])}
			image={String(this.state.images[i])}
			onClick={() => this.handleClick(i)}/>;
	}

	render () {
		return (
				<div>{this.state.content}</div>
			);
	}
}

export default Grid;