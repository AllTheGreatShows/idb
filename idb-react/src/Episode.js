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
        var sort;
        sort = this.props.match.params.sorttype;

        
        var backButtonCheck = false;
        var forwardButtonCheck = false;
        var boolASC = false;
        var boolDSC = false;

        if (this.props.match.params.sorttype == "asc")
            {
                console.log("asc bool is true");
                boolASC = true;
            }       
            else if (this.props.match.params.sorttype == "dsc")
                boolDSC = true;

        
        console.log("Page: " + this.page[0])
        if (parseInt(this.page[0]) == 1){
            backButtonCheck=true;
        }
        else{
            backButtonCheck = false;
            if (boolASC)
                prevURL = "/episode/sort=asc/page=" + (parseInt(this.page[0]) - 1);
            else if (boolDSC)
                prevURL = "/episode/sort=dsc/page=" + (parseInt(this.page[0]) - 1);
            else
                prevURL = "/episode/page=" + (parseInt(this.page[0]) - 1);
        }
        if(parseInt(this.page[0]) == 431)
            forwardButtonCheck = true;
        else{
            if (boolASC)
                nextURL = "/episode/sort=asc/page=" + (parseInt(this.page[0]) + 1);
            else if (boolDSC)
                nextURL = "/episode/sort=dsc/page=" + (parseInt(this.page[0]) + 1);
            else
                nextURL = "/episode/page=" + (parseInt(this.page[0]) + 1);
            forwardButtonCheck = false;
        }

        if(backButtonCheck){
            console.log("REacign hereeeeeeeeeeeeeeeeeeee")            
            console.log("Reaching here")
            return (
                <div className={"notNav"}>
                    {"Sort: "}
                    <Link to={"/episode/sort=asc/page=1"}>
                        <Button className={"SortButton"} onClick= {() =>
                            {this.page[0] = 1;
                            var data = getAscending("title", "episode",1);
                            console.log("GETTING DATA")
                            console.log(data)
                            this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                            }
                        }> Ascending </Button>
                    </Link>
                    {' '}
                    <Link to={"/episode/sort=dsc/page=1"}>
                        <Button className={"SortButton"} onClick= {() =>
                            {this.page[0] = 1;
                            var data = getDescending("title", "episode",1);
                            this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                            }
                        }> Descending </Button>
                    </Link>
                    <Grid ref="child" Data={getEpisodes(this.page[0])} CardTitle={"title"} ImageField={""} MediaType = "episode" page={this.page[0]}/>     
                    
                    <Link to={nextURL}>
                        <Button className={"NextButton"} size="lg" onClick= {() =>
                            {this.page[0] = parseInt(this.page[0]) + 1;
                            var data;
                            if (boolASC)
                                data = getAscending("title", "episode", this.page[0]);
                            else if (boolDSC)
                                data = getDescending("title", "episode", this.page[0]);
                            else
                                data = getEpisodes(this.page[0]);
                            this.refs.child.changeState(data, this.page[0]);
                            this.forceUpdate();} 
                        }> Next </Button>
                    </Link>
                </div>  
                   );   
        }
        else if (forwardButtonCheck){
            return (
                    <div className={"notNav"}>
                        {"Sort: "}
                        <Link to={"/episode/sort=asc/page=1"}>
                            <Button className={"SortButton"} onClick= {() =>
                                {this.page[0] = 1;
                                var data = getAscending("title", "episode",1);
                                this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                                }
                            }> Ascending </Button>
                        </Link>
                        {' '}
                        <Link to={"/episode/sort=dsc/page=1"}>
                        <Button className={"SortButton"} onClick= {() =>
                                {this.page[0] = 1;
                                var data = getDescending("title", "episode",1);
                                this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                                }
                            }> Descending </Button>
                        </Link>
                        <Grid ref="child" Data={getEpisodes(this.page[0])} CardTitle={"title"} ImageField={""} MediaType = "episode" page={this.page[0]}/>     
                        
                        <Link to={prevURL}>
                            <Button className={"NextButton"} size="lg" onClick= {() =>
                                {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                                var data;
                                if (boolASC)
                                    data = getAscending("title", "episode", this.page[0]);
                                else if (boolDSC)
                                    data = getDescending("title", "episode", this.page[0]);
                                else
                                    data = getEpisodes(this.page[0]);    
                                this.refs.child.changeState(data, this.page[0]);
                                this.forceUpdate();} 
                            }> Previous </Button>
                        </Link>    
                </div>  
                   );    
        }
        else{
        return (
            <div className={"notNav"}>
                {"Sort: "}
                <Link to={"/episode/sort=asc/page=1"}>
                    <Button className={"SortButton"} onClick= {() =>
                        {this.page[0] = 1;
                        var data = getAscending("title", "episode",1);
                        this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                        }
                    }> Ascending </Button>
                </Link>
                {' '}
                <Link to={"/episode/sort=dsc/page=1"}>
                <Button className={"SortButton"} onClick= {() =>
                        {this.page[0] = 1;
                        var data = getDescending("title", "episode",1);
                        this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                        }
                    }> Descending </Button>
                </Link>
                <Grid ref="child" Data={getEpisodes(this.page[0])} CardTitle={"title"} ImageField={"image_url"} MediaType = "episode" page={this.page[0]}/>     
                <Link to={prevURL}>
                    <Button className={"NextButton"} size="lg" onClick= {() =>
                        {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                        var data;
                        if (boolASC)
                            data = getAscending("title", "episode", this.page[0]);
                        else if (boolDSC)
                            data = getDescending("title", "episode", this.page[0]);
                        else
                            data = getEpisodes(this.page[0]);                            
                        this.refs.child.changeState(data, this.page[0]);
                        this.forceUpdate();} 
                    }> Previous </Button>
                </Link>
                {' '}
                <Link to={nextURL}>
                    <Button className={"NextButton"} size="lg" onClick= {() =>
                        {this.page[0] = parseInt(this.page[0]) + 1;
                            var data;
                            if (boolASC)
                                data = getAscending("title", "episode", this.page[0]);
                            else if (boolDSC)
                                data = getDescending("title", "episode", this.page[0]);
                            else
                                data = getEpisodes(this.page[0]);
                            
                        this.refs.child.changeState(data, this.page[0]);
                        this.forceUpdate();} 
                    }> Next </Button>
                </Link>
            </div>  
               );
            }
    }
}

export default Episode;