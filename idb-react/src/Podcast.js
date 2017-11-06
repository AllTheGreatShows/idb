import React, { Component } from 'react';
import {getPodcasts} from './Request';
import Grid from './Grid';

class Podcast extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
    }

    render () {
        return (
            <Grid Data={getPodcasts(this.page[0])} CardTitle={"title"} ImageField={"image_url"} MediaType = "podcast" page={this.page} />
        );
    }
}

export default Podcast;