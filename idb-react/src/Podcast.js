import React, { Component } from 'react';
import {getPodcasts, getAscending, getDescending} from './Request';
import Grid from './Grid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button} from 'reactstrap';

class Podcast extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
    }

    render () {    
                
    
        var url = "/podcast/page=" + (parseInt(this.page[0]) + 1);
        return (
            <div>
             <Button color="success" size="sm" onClick= {() => 
                    {this.page[0] = 1;
                    var data = getAscending("title", "podcast");
                    console.log(data["objects"]);
                    this.refs.child.changeState(data,"title" ,"image_url" ,"podcast", 1);
                    console.log("HERE");
                    }
                }> Asc </Button>
                <Grid ref="child" Data={getPodcasts(this.page[0])} CardTitle={"title"} ImageField={"image_url"} MediaType = "podcast" page={this.page} />     
                <Link to={url}>
                    <Button color="secondary" size="lg" onClick= {() => {this.page[0] = parseInt(this.page[0]) + 1} }> Next page </Button>
                </Link>
            </div>  
        );
    }
}

export default Podcast;