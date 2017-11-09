import React, { Component } from 'react';
import {getProviders, getAscending, getDescending} from './Request';
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
        var prevURL;
        var nextURL;
        var backButtonCheck = false;
        var forwardButtonCheck = false;
        if (parseInt(this.page[0]) == 1)
            backButtonCheck=true;
        else{
            backButtonCheck = false;
            prevURL = "/provider/page=" + (parseInt(this.page[0]) - 1);
        }
        if(parseInt(this.page[0]) == 8)
            forwardButtonCheck = true;
        else{
            nextURL = "/provider/page=" + (parseInt(this.page[0]) + 1);
            forwardButtonCheck = false;
        }
        if(backButtonCheck){
            return (
                <div>
                    {"Sort: "}
                    <Button color="success" size="sm" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getAscending("name", "provider");
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1);
                            }
                        }> Asc </Button>{' '}
                    <Button color="success" size="sm" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getDescending("name", "provider");
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1);
                            }
                        }> Desc </Button>
                    <Grid ref="child" Data={getProviders(parseInt(this.page[0]))} CardTitle={"name"} ImageField={""} 
                        MediaType = "provider" page={parseInt(this.page[0])}/>    
                    
                    <Link to={nextURL}>
                        <Button outline color="warning" size="lg" onClick= {() => 
                            {this.page[0] = parseInt(this.page[0]) + 1;
                             this.refs.child.changeState(getProviders(this.page[0]), this.page[0]);   
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
                            var data = getAscending("name", "provider");
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1);
                            }
                        }> Asc </Button>{' '}
                    <Button color="success" size="sm" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getDescending("name", "provider");
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1);
                            }
                        }> Desc </Button>
                    <Grid ref="child" Data={getProviders(parseInt(this.page[0]))} CardTitle={"name"} ImageField={""} 
                        MediaType = "provider" page={parseInt(this.page[0])}/>    
                    
                    <Link to={prevURL}>
                        <Button outline color="warning" size="lg" onClick= {() => 
                            {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                             this.refs.child.changeState(getProviders(this.page[0]), this.page[0]);   
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
                            var data = getAscending("name", "provider");
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1);
                            }
                        }> Asc </Button>{' '}
                    <Button color="success" size="sm" onClick= {() => 
                            {this.page[0] = 1;
                            var data = getDescending("name", "provider");
                            this.refs.child.changeState(data,"name" ,"image_url" ,"provider", 1);
                            }
                        }> Desc </Button>
                    <Grid ref="child" Data={getProviders(parseInt(this.page[0]))} CardTitle={"name"} ImageField={""} 
                        MediaType = "provider" page={parseInt(this.page[0])}/>    
                    
                    <Link to={prevURL}>
                        <Button outline color="warning" size="lg" onClick= {() => 
                            {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                             this.refs.child.changeState(getProviders(this.page[0]), this.page[0]);   
                             this.forceUpdate();} 
                         }> Previous </Button>
                    </Link>
                    {' '}

                    <Link to={nextURL}>
                        <Button outline color="warning" size="lg" onClick= {() => 
                            {this.page[0] = parseInt(this.page[0]) + 1;
                             this.refs.child.changeState(getProviders(this.page[0]), this.page[0]);   
                             this.forceUpdate();} 
                         }> Next </Button>
                    </Link>
                </div>  
            );
        }
    }
    
}

export default Provider;