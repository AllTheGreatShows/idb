import React, { Component } from 'react';
import {getEpisodes, getAscending, getDescending, getFilterDataModels} from './Request';
import Grid from './Grid';
import MyFilter from './Filter';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button} from 'reactstrap';

class Episode extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
        this.getChildData = this.getChildData.bind(this);
    }

    getChildData = (childData) => {
        // console.log("In parent and child data is " + childData);
        console.log("state originally set to " + this.state.userInput);
        console.log(childData);

        this.setState({userInput:childData});
        this.forceUpdate();
        console.log("STATE NOW SET TO: " + this.state.userInput);
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

        
        if (parseInt(this.page[0]) == 1)
            backButtonCheck=true;
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
            return (
                <div>
                    {"Sort: "}
                    <Link to={"/episode/sort=asc/page=1"}>
                        <Button color="success" size="lg" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getAscending("title", "episode",1);
                            this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                            }
                        }> Asc </Button>
                    </Link>
                    {' '}
                    <Link to={"/episode/sort=dsc/page=1"}>
                        <Button color="success" size="lg" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getDescending("title", "episode",1);
                            this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                            }
                        }> Desc </Button>
                    </Link>
                    <MyFilter getData = {() => this.getChildData()}/>
                    <Grid ref="child" Data={getEpisodes(this.page[0])} CardTitle={"title"} ImageField={""} MediaType = "episode" page={this.page[0]}/>     
                    
                    <Link to={nextURL}>
                        <Button outline color="warning" size="lg" onClick= {() => 
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
                    <div>
                        {"Sort: "}
                        <Link to={"/episode/sort=asc/page=1"}>
                            <Button color="success" size="lg" onClick= {() => 
                                {this.page[0] = 1;
                                var data = getAscending("title", "episode",1);
                                this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                                }
                            }> Asc </Button>
                        </Link>
                        {' '}
                        <Link to={"/episode/sort=dsc/page=1"}>
                        <Button color="success" size="lg" onClick= {() => 
                                {this.page[0] = 1;
                                var data = getDescending("title", "episode",1);
                                this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                                }
                            }> Desc </Button>
                        </Link>
                        <MyFilter getData = {() => this.getChildData()}/>
                        <Grid ref="child" Data={getEpisodes(this.page[0])} CardTitle={"title"} ImageField={""} MediaType = "episode" page={this.page[0]}/>     
                        
                        <Link to={prevURL}>
                            <Button outline color="warning" size="lg" onClick= {() => 
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
            <div>
                {"Sort: "}
                <Link to={"/episode/sort=asc/page=1"}>
                    <Button color="success" size="lg" onClick= {() => 
                        {this.page[0] = 1;
                        var data = getAscending("title", "episode",1);
                        this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                        }
                    }> Asc </Button>
                </Link>
                {' '}
                <Link to={"/episode/sort=dsc/page=1"}>
                <Button color="success" size="lg" onClick= {() => 
                        {this.page[0] = 1;
                        var data = getDescending("title", "episode",1);
                        this.refs.child.changeState(data,"title" ,"image_url" ,"episode", 1);
                        }
                    }> Desc </Button>
                </Link>
                <MyFilter getData = {() => this.getChildData()}/>
                <Grid ref="child" Data={getEpisodes(this.page[0])} CardTitle={"title"} ImageField={""} MediaType = "episode" page={this.page[0]}/>     
                <Link to={prevURL}>
                    <Button outline color="warning" size="lg" onClick= {() => 
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
                    <Button outline color="warning" size="lg" onClick= {() => 
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