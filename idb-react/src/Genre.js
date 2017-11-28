import React, { Component } from 'react';
import {getGenres, getAscending, getDescending, getFilterDataModels} from './Request';
import Grid from './Grid';
import MyFilter from './Filter';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button} from 'reactstrap';

class Genre extends React.Component{

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
                <div className={"notNav"}>
                {"Sort: "}
                <Link to={"/genre/sort=asc/page=1"}>
                    <Button className={"SortButton"} onClick= {() =>
                            {this.page[0] = 1;
                            var data = getAscending("name", "genre", 1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1, true);
                            }
                        }> Ascending </Button>{' '}
                </Link>
                <Link to={"/genre/sort=dsc/page=1"}>
                    <Button className={"SortButton"} onClick= {() =>
                            {this.page[0] = 1;
                            var data = getDescending("name", "genre",1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1);
                            }
                        }> Descending </Button>
                </Link>
                <MyFilter getData = {() => this.getChildData()}/>
                     <Grid ref="child" Data={getGenres(this.page[0])} CardTitle={"name"} ImageField={""} MediaType = "genre" page={this.page}/>
                     <Link to={nextURL}>
                        <Button className={"NextButton"} size="lg" onClick= {() =>
                            {this.page[0] = parseInt(this.page[0]) + 1;
                            var data;
                            if (boolASC)
                                data = getAscending("name", "genre", this.page[0]);
                            else if (boolDSC)
                                data = getDescending("name", "genre", this.page[0]);
                            else
                                data = getGenres(this.page[0]);
                             this.refs.child.changeState(data, this.page[0]);
                             this.forceUpdate();}
                            }> Next </Button>
                     </Link>
                </div>  
                   );    
        }
        else if(forwardButtonCheck){
            return (
                <div className={"notNav"}>
                {"Sort: "}
                <Link to={"/genre/sort=asc/page=1"}>
                    <Button className={"SortButton"} onClick= {() =>
                            {this.page[0] = 1;
                            var data = getAscending("name", "genre", 1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1, true);
                            }
                        }> Ascending </Button>{' '}
                </Link>
                <Link to={"/genre/sort=dsc/page=1"}>
                    <Button className={"SortButton"} onClick= {() =>
                            {this.page[0] = 1;
                            var data = getDescending("name", "genre",1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1);
                            }
                        }> Descending </Button>
                </Link>
                <MyFilter getData = {() => this.getChildData()}/>
                     <Grid ref="child" Data={getGenres(this.page[0])} CardTitle={"name"} ImageField={""} MediaType = "genre" page={this.page}/>
    
                    <Link to={prevURL}>
                        <Button className={"NextButton"} size="lg" onClick= {() =>
                            {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                                var data;
                                if (boolASC)
                                    data = getAscending("name", "genre", this.page[0]);
                                else if (boolDSC)
                                    data = getDescending("name", "genre", this.page[0]);
                                else
                                    data = getGenres(this.page[0]);
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
                <Link to={"/genre/sort=asc/page=1"}>
                    <Button className={"SortButton"} onClick= {() =>
                            {this.page[0] = 1;
                            var data = getAscending("name", "genre", 1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1, true);
                            }
                        }> Ascending </Button>{' '}
                </Link>
                <Link to={"/genre/sort=dsc/page=1"}>
                    <Button className={"SortButton"} onClick= {() =>
                            {this.page[0] = 1;
                            var data = getDescending("name", "genre",1);
                            this.refs.child.changeState(data,"name" ,"image_url" ,"genre", 1);
                            }
                        }> Descending </Button>
                </Link>
                <MyFilter getData = {() => this.getChildData()}/>
                 <Grid ref="child" Data={getGenres(this.page[0])} CardTitle={"name"} ImageField={""} MediaType = "genre" page={this.page}/>

                <Link to={prevURL}>
                    <Button className={"NextButton"} size="lg" onClick= {() =>
                        {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0]) - 1;
                            var data;
                            if (boolASC)
                                data = getAscending("name", "genre", this.page[0]);
                            else if (boolDSC)
                                data = getDescending("name", "genre", this.page[0]);
                            else
                                data = getGenres(this.page[0]);
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
                                data = getAscending("name", "genre", this.page[0]);
                            else if (boolDSC)
                                data = getDescending("name", "genre", this.page[0]);
                            else
                                data = getGenres(this.page[0]);
                         this.refs.child.changeState(data, this.page[0]);
                         this.forceUpdate();}
                        }> Next </Button>
                 </Link>
            </div>  
               );
            }
    }
}

export default Genre;