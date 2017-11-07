import React, { Component } from 'react';
import {getEpisodes} from './Request';
import Grid from './Grid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button} from 'reactstrap';

class Episode extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
    }

    render () {
        var url = "/provider/page=" + (parseInt(this.page[0]) + 1);
        return (
            <div>
                <Grid Data={getEpisodes(this.page[0])} CardTitle={"title"} ImageField={""} MediaType = "episode" page={this.page}/>     
                
                <Link to={url}>
                    <Button color="secondary" size="lg" onClick= {() => {this.page[0] = parseInt(this.page[0]) + 1} }> Next page </Button>
                </Link>
            </div>  
               );
    }
}

export default Episode;