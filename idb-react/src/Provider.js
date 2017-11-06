import React, { Component } from 'react';
import {getProviders} from './Request';
import Grid from './Grid';

class Provider extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
    }

    render () {
        return (
                <Grid Data={getProviders(this.page[0])} CardTitle={"name"} ImageField={""} MediaType = "provider" page={this.page}/>    
        );
    }
}

export default Provider;