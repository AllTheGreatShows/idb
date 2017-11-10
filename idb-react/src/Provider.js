import React, { Component } from 'react';
import {getProviders, getAscending, getDescending} from './Request';
import Grid from './Grid';
import MyFilter from './Filter';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button} from 'reactstrap';

class Provider extends React.Component{

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
        var nextURL;
        var prevURL;
        var sort;
        
        sort = this.props.match.params.sorttype;

        var backButtonCheck = false;
        var forwardButtonCheck = false;
        var boolASC = false;
        var boolDSC = false;

        console.log(this.props.match.params.sorttype);
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
                prevURL = "/provider/sort=asc/page=" + (parseInt(this.page[0]) - 1);            
            else if (boolDSC)
                prevURL = "/provider/sort=dsc/page=" + (parseInt(this.page[0]) - 1);
            else
                prevURL = "/provider/page=" + (parseInt(this.page[0]) - 1);
        }
        if(parseInt(this.page[0]) == 4)
            forwardButtonCheck = true;
        else{
            if (boolASC)
                nextURL = "/provider/sort=asc/page=" + (parseInt(this.page[0]) + 1);            
            else if (boolDSC)
                nextURL = "/provider/sort=dsc/page=" + (parseInt(this.page[0]) + 1);
            else
                nextURL = "/provider/page=" + (parseInt(this.page[0]) + 1);

            forwardButtonCheck = false;
        }
        if(backButtonCheck){
            return (
                <div>
                {"Sort: "}
                <Link to={"/provider/sort=asc/page=1"}>
                    <Button color="success" size="lg" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getAscending("name", "provider", 1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1, true);
                            }
                        }> Asc </Button>{' '}
                </Link>
                <Link to={"/provider/sort=dsc/page=1"}>
                    <Button color="success" size="lg" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getDescending("name", "provider",1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1);
                            }
                        }> Desc </Button>
                </Link>
                <MyFilter getData = {() => this.getChildData()}/>
                    <Grid ref="child" Data={getProviders(this.page[0])} CardTitle={"name"} ImageField={""} MediaType = "provider" page={this.page}/>
                    <Link to={nextURL}>
                        <Button outline color="warning" size="lg" onClick= {() => 
                            {this.page[0] = parseInt(this.page[0]) + 1;
                            var data;
                            if (boolASC)
                                data = getAscending("name", "provider", this.page[0]);
                            else if (boolDSC)
                                data = getDescending("name", "provider", this.page[0]);
                            else
                                data = getProviders(this.page[0]);
                            this.refs.child.changeState(data, this.page[0]);
                            this.forceUpdate();}
                            }> Next </Button>
                    </Link>
                </div>  
                );    
        }
        else if(forwardButtonCheck){
            return (
                <div>
                {"Sort: "}
                <Link to={"/provider/sort=asc/page=1"}>
                    <Button color="success" size="lg" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getAscending("name", "provider", 1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1, true);
                            }
                        }> Asc </Button>{' '}
                </Link>
                <Link to={"/provider/sort=dsc/page=1"}>
                    <Button color="success" size="lg" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getDescending("name", "provider",1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1);
                            }
                        }> Desc </Button>
                </Link>
                <MyFilter getData = {() => this.getChildData()}/>
                    <Grid ref="child" Data={getProviders(this.page[0])} CardTitle={"name"} ImageField={""} MediaType = "provider" page={this.page}/>

                    <Link to={prevURL}>
                        <Button outline color="warning" size="lg" onClick= {() => 
                            {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                                var data;
                                if (boolASC)
                                    data = getAscending("name", "provider", this.page[0]);
                                else if (boolDSC)
                                    data = getDescending("name", "provider", this.page[0]);
                                else
                                    data = getProviders(this.page[0]);
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
                <Link to={"/provider/sort=asc/page=1"}>
                    <Button color="success" size="lg" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getAscending("name", "provider", 1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1, true);
                            }
                        }> Asc </Button>{' '}
                </Link>
                <Link to={"/provider/sort=dsc/page=1"}>
                    <Button color="success" size="lg" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getDescending("name", "provider",1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1);
                            }
                        }> Desc </Button>
                </Link>
                <MyFilter getData = {() => this.getChildData()}/>
                <Grid ref="child" Data={getProviders(this.page[0])} CardTitle={"name"} ImageField={""} MediaType = "provider" page={this.page}/>

                <Link to={prevURL}>
                    <Button outline color="warning" size="lg" onClick= {() => 
                        {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                            var data;
                            if (boolASC)
                                data = getAscending("name", "provider", this.page[0]);
                            else if (boolDSC)
                                data = getDescending("name", "provider", this.page[0]);
                            else
                                data = getProviders(this.page[0]);
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
                                data = getAscending("name", "provider", this.page[0]);
                            else if (boolDSC)
                                data = getDescending("name", "provider", this.page[0]);
                            else
                                data = getProviders(this.page[0]);
                        this.refs.child.changeState(data, this.page[0]);
                        this.forceUpdate();}
                        }> Next </Button>
                </Link>
            </div>  
            );
            }
        }
}
export default Provider;