import React, { Component } from 'react';
import {getEpisodes} from './Request';
import Grid from './Grid';

class Episode extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
    }

    render () {
        return (
            <Grid Data={getEpisodes(this.page[0])} CardTitle={"title"} ImageField={""} MediaType = "episode" page={this.page}/>
               );
    }
}

export default Episode;