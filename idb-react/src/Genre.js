import React, { Component } from 'react';
import {getGenres} from './Request';
import Grid from './Grid';

class Genre extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
    }

    render () {
        return (
                 <Grid Data={getGenres(this.page[0])} CardTitle={"name"} ImageField={""} MediaType = "genre" page={this.page}/>
               );
    }
}

export default Genre;