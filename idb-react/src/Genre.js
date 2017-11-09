import React, { Component } from 'react';
import {getGenres, getAscending, getDescending, getFilterDataModels} from './Request';
import Grid from './Grid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button} from 'reactstrap';

class Genre extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
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
                prevURL = "/genre/sort=asc/page=" + (parseInt(this.page[0]) - 1);            
            else if (boolDSC)
                prevURL = "/genre/sort=dsc/page=" + (parseInt(this.page[0]) - 1);
            else
                prevURL = "/genre/page=" + (parseInt(this.page[0]) - 1);
        }
        if(parseInt(this.page[0]) == 4)
            forwardButtonCheck = true;
        else{
            if (boolASC)
                nextURL = "/genre/sort=asc/page=" + (parseInt(this.page[0]) + 1);            
            else if (boolDSC)
                nextURL = "/genre/sort=dsc/page=" + (parseInt(this.page[0]) + 1);
            else
                nextURL = "/genre/page=" + (parseInt(this.page[0]) + 1);

            forwardButtonCheck = false;
        }
        if(backButtonCheck){
            return (
                <div>
                {"Sort: "}
                 <Button color="success" size="sm" onClick= {() => 
                        {this.page[0] = 1;
                        var data = getAscending("name", "genre");
                        this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1);
                        }
                    }> Asc </Button>{' '}
                <Button color="success" size="sm" onClick= {() => 
                        {this.page[0] = 1;
                        var data = getDescending("name", "genre");
                        this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1);
                        }
                    }> Desc </Button>
                     <Grid ref="child" Data={getGenres(this.page[0])} CardTitle={"name"} ImageField={""} MediaType = "genre" page={this.page}/>
                     <Link to={nextURL}>
                        <Button outline color="warning" size="lg" onClick= {() => 
                            {this.page[0] = parseInt(this.page[0]) + 1;
                             this.refs.child.changeState(getGenres(this.page[0]), this.page[0]);
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
                 <Button color="success" size="sm" onClick= {() => 
                        {this.page[0] = 1;
                        var data = getAscending("name", "genre");
                        this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1);
                        }
                    }> Asc </Button>{' '}
                <Button color="success" size="sm" onClick= {() => 
                        {this.page[0] = 1;
                        var data = getDescending("name", "genre");
                        this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1);
                        }
                    }> Desc </Button>
                     <Grid ref="child" Data={getGenres(this.page[0])} CardTitle={"name"} ImageField={""} MediaType = "genre" page={this.page}/>
    
                    <Link to={prevURL}>
                        <Button outline color="warning" size="lg" onClick= {() => 
                            {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                             this.refs.child.changeState(getGenres(this.page[0]), this.page[0]);
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
                    var data = getAscending("name", "genre");
                    this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1);
                    }
                }> Asc </Button>{' '}
            <Button color="success" size="sm" onClick= {() => 
                    {this.page[0] = 1;
                    var data = getDescending("name", "genre");
                    this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1);
                    }
                }> Desc </Button>
                 <Grid ref="child" Data={getGenres(this.page[0])} CardTitle={"name"} ImageField={""} MediaType = "genre" page={this.page}/>

                <Link to={prevURL}>
                    <Button outline color="warning" size="lg" onClick= {() => 
                        {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                         this.refs.child.changeState(getGenres(this.page[0]), this.page[0]);
                         this.forceUpdate();}
                        }> Previous </Button>
                </Link>
                {' '}
                 <Link to={nextURL}>
                    <Button outline color="warning" size="lg" onClick= {() => 
                        {this.page[0] = parseInt(this.page[0]) + 1;
                         this.refs.child.changeState(getGenres(this.page[0]), this.page[0]);
                         this.forceUpdate();}
                        }> Next </Button>
                 </Link>
            </div>  
               );
            }
    }
}

export default Genre;