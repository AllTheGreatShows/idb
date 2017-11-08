import React, { Component } from 'react';
import {getPodcasts, getAscending, getDescending, getFilterDataPodcasts} from './Request';
import Grid from './Grid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import GenreFilter from './Filter';
class Podcast extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
    }

    render () {
        var url = "/podcast/page=" + (parseInt(this.page[0]) + 1);
        console.log("rendering on the url")
//        console.log(getFilterDataPodcasts("Careers"));
  
        return (
            <div>
            {"Sort: "}
            <Button color="success" size="sm" onClick= {() => 
                    {this.page[0] = 1;
                    var data = getAscending("title", "podcast");
                    this.refs.child.changeState(data,"title" ,"image_url" ,"podcast", 1);
                    }
                }> Asc </Button>{' '}
            <Button color="success" size="sm" onClick= {() => 
                    {this.page[0] = 1;
                    var data = getDescending("title", "podcast");
                    this.refs.child.changeState(data,"title" ,"image_url" ,"podcast", 1);
                    }
                }> Desc </Button>
                <Grid ref="child" Data={getPodcasts(this.page[0])} CardTitle={"title"} ImageField={"image_url"} MediaType = "podcast" page={this.page[0]} />
                <GenreFilter/>
            <Link to={url}>
                <Button color="secondary" size="lg" onClick= {() => 
                    {this.page[0] = parseInt(this.page[0]) + 1;
                    this.refs.child.changeState(getPodcasts(this.page[0]), this.page[0]);   
                     this.forceUpdate();} 
                  }> Next page </Button>
            </Link>
            </div>
        );
    }
}

export default Podcast;