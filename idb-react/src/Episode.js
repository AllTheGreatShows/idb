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

        var backButtonCheck = false;
        var forwardButtonCheck = false;
        if (parseInt(this.page[0]) == 1)
            backButtonCheck=true;
        else{
            backButtonCheck = false;
            prevURL = "/episode/page=" + (parseInt(this.page[0]) - 1);
        }
        if(parseInt(this.page[0]) == 431)
            forwardButtonCheck = true;
        else{
            nextURL = "/episode/page=" + (parseInt(this.page[0]) + 1);
            forwardButtonCheck = false;
        }

        if(backButtonCheck){
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
                    
                    <Link to={nextURL}>
                        <Button outline color="warning" size="lg" onClick= {() => 
                            {this.page[0] = parseInt(this.page[0]) + 1;
                            this.refs.child.changeState(getEpisodes(this.page[0]), this.page[0]);
                            this.forceUpdate();} 
                        }> Next </Button>
                    </Link>
                </div>  
                   );   
        }
        else if (forwardButtonCheck){
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
                        <Button outline color="warning" size="lg" onClick= {() => 
                            {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                            this.refs.child.changeState(getEpisodes(this.page[0]), this.page[0]);
                            this.forceUpdate();} 
                        }> Previous </Button>
                    </Link>
    
                </div>  
                   );    
        }
        else{
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
                    <Button outline color="warning" size="lg" onClick= {() => 
                        {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                        this.refs.child.changeState(getEpisodes(this.page[0]), this.page[0]);
                        this.forceUpdate();} 
                    }> Previous </Button>
                </Link>
                {' '}
                <Link to={nextURL}>
                    <Button outline color="warning" size="lg" onClick= {() => 
                        {this.page[0] = parseInt(this.page[0]) + 1;
                        this.refs.child.changeState(getEpisodes(this.page[0]), this.page[0]);
                        this.forceUpdate();} 
                    }> Next </Button>
                </Link>
            </div>  
               );
            }
    }
}

export default Episode;