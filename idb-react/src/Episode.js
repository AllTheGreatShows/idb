import React, { Component } from 'react';
import {getEpisodes, getAscending, getDescending, getFilterDataModels} from './Request';
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
        var prevURL;
        var nextURL;

        nextURL = "/episode/page=" + (parseInt(this.page[0]) + 1);        
        if (parseInt(this.page[0] == 1))
            prevURL = "/episode/page=1";
        else
            prevURL = "/episode/page=" + (parseInt(this.page[0]) + 1);

            // console.log(getFilterDataModels("episode","C"));
        // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        return (
            <div>
            {"Sort: "}
             <Button color="success" size="sm" onClick= {() => 
                    {this.page[0] = 1;
                    var data = getAscending("title", "episode");
                    this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                    }
                }> Asc </Button>{' '}
            <Button color="success" size="sm" onClick= {() => 
                    {this.page[0] = 1;
                    var data = getDescending("title", "episode");
                    this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                    }
                }> Desc </Button>
                <Grid ref="child" Data={getEpisodes(this.page[0])} CardTitle={"title"} ImageField={""} MediaType = "episode" page={this.page[0]}/>     
                
                <Link to={prevURL}>
                    <Button color="secondary" size="lg" onClick= {() => 
                        {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                        this.refs.child.changeState(getEpisodes(this.page[0]), this.page[0]);
                        this.forceUpdate();} 
                    }> Previous </Button>
                </Link>

                <Link to={nextURL}>
                    <Button color="secondary" size="lg" onClick= {() => 
                        {this.page[0] = parseInt(this.page[0]) + 1;
                        this.refs.child.changeState(getEpisodes(this.page[0]), this.page[0]);
                        this.forceUpdate();} 
                    }> Next </Button>
                </Link>
            </div>  
               );
    }
}

export default Episode;