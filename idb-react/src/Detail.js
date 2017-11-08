import React, { Component } from 'react';
import MyMedia from './Media';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import {getSingleItem} from './Request'

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const data = getSingleItem(this.props.mediatype, this.props.id)
        return(
                <MyMedia json={data} media_type={this.props.mediatype} index={parseInt(this.props.id)}/>
        );
    }
}

export default Detail;  