import React, { Component } from 'react';
import MyMedia from './Media';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {getSingleItem} from './Request'

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        var data = getSingleItem(this.props.match.params.mediatype, this.props.match.params.BrowserRouterid)
        return(
                <MyMedia json={data} media_type={this.props.match.params.mediatype} index={parseInt(this.props.match.params.id)}/>
        );
    }
}

export default Detail;  