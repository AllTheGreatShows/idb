import React, { Component } from 'react';
import {getProviders} from './Request';
import Grid from './Grid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button} from 'reactstrap';

class Provider extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
    }

    render () {
        var url = "/provider/page=" + (parseInt(this.page[0]) + 1);
        return (
                <div>
                    <Grid Data={getProviders(parseInt(this.page[0]))} CardTitle={"name"} ImageField={""} 
                        MediaType = "provider" page={parseInt(this.page[0])}/>    
                    
                    <Link to={url}>
                        <Button color="secondary" size="lg" onClick= {() => {this.page[0] = parseInt(this.page[0]) + 1} }> Next page </Button>
                    </Link>
                </div>  
            );
    }
    
}

export default Provider;