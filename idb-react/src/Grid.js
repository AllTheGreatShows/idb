import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Mycard, {Fcard} from './Card';
import MyMedia from './Media'
import {Row, Col, CardDeck} from 'reactstrap';



class Grid extends React.Component {
	constructor(props) {
    super(props);
	this.changeState(props.Data, props.Data["page"]);
	// this.idpage = this.props.match.params.idnum;//this.props.match.params.idnum;
  }


    changeState(data, pages, stateChange=true){
		console.log(data);
		console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
		const squaresT = Array(9);//Titles
		const squaresI = Array(9).fill("");//Images
		const obj = data;
		console.log(obj["objects"]);
		const page = pages;
		console.log(page);
		var hasImg = !(this.props.ImageField === "");
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
   
	   this.state = {
		   squares: squaresT,
		   images: squaresI,
		   activePage: page,
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
		this.setState(this.state);
	}


	renderCard (i) {
		i = i-1;
		if(this.state.squares[i]==undefined) return <div></div>;
		console.log(i)
		var there = "/" + this.props.MediaType + "/id=" + parseInt(this.props.Data["objects"][i]["id"]);
		console.log(there);
		return <Link to={there}> <Fcard
			title={String(this.state.squares[i])}
			image={String(this.state.images[i])}/> </Link>;
	}

	render () {
		console.log("rendering Grid");
		return (
				<div>{this.state.content}</div>
			);
	}
}

export default Grid;