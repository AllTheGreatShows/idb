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
        this.state = {userFilterSelection : null};
        
    }
    myCallBack = (dataFromChild) => {
        console.log("reached myCallBack function");
        console.log("State originally set to: " + this.state.userFilterSelection);
        this.setState({userFilterSelection : dataFromChild});
        console.log("State set to: " + this.state.userFilterSelection);
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
            prevURL = "/podcast/page=" + (parseInt(this.page[0]) - 1);
        }
        if(parseInt(this.page[0]) == 11)
            forwardButtonCheck = true;
        else{
            nextURL = "/podcast/page=" + (parseInt(this.page[0]) + 1);
            forwardButtonCheck = false;
        }
        console.log("rendering on the url")
//        console.log(getFilterDataPodcasts("Careers"));
  
        if(backButtonCheck){
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
                <Link to={nextURL}>
                    <Button outline color="warning" size="lg" onClick= {() => 
                        {this.page[0] = parseInt(this.page[0]) + 1;
                        this.refs.child.changeState(getPodcasts(this.page[0]), this.page[0]);   
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
                    
                <Link to={prevURL}>
                    <Button outline color="warning" size="lg" onClick= {() => 
                        {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0])- 1;
                        this.refs.child.changeState(getPodcasts(this.page[0]), this.page[0]);   
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
                <GenreFilter callBackFromParent={this.myCallback}/>    
                <Grid ref="child" Data={getPodcasts(this.page[0])} CardTitle={"title"} ImageField={"image_url"} MediaType = "podcast" page={this.page[0]} />

                <GenreFilter/>
                
            <Link to={prevURL}>
                <Button outline color="warning" size="lg" onClick= {() => 
                    {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0])- 1;
                    this.refs.child.changeState(getPodcasts(this.page[0]), this.page[0]);   
                     this.forceUpdate();} 
                  }> Previous </Button>
            </Link>
            {'  '}
            <Link to={nextURL}>
                <Button outline color="warning" size="lg" onClick= {() => 

                    {this.page[0] = parseInt(this.page[0]) + 1;
                    this.refs.child.changeState(getPodcasts(this.page[0]), this.page[0]);   
                     this.forceUpdate();} 
                  }> Next </Button>
            </Link>

            </div>
        );
    }
    }
}

export default Podcast;