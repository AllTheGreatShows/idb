import React, { Component, Rerender} from 'react';
import {getPodcasts, getAscending, getDescending, getFilterDataPodcasts} from './Request';
import Grid from './Grid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import MyFilter from './Filter';
class Podcast extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
        this.state = {userInput : null};
        this.getChildData = this.getChildData.bind(this);
        
    }

    // getChildData(childData) {
    //     console.log("In parent and child data is " + childData);
    //     console.log(childData);
    //     console.log("state originally set to " + this.state.userInput);
    //     this.setState({userInput: childData});
    //     // this.setState((state) => ({userInput:childData}));
    //     // this.forceUpdate();
    //     console.log("STATE SET TO: " + this.state.userInput);
    //     // debugger;
    // }

    getChildData = (childData) => {
        // console.log("In parent and child data is " + childData);
        console.log("state originally set to " + this.state.userInput);
        console.log(childData);

        // this.setState({userInput: childData} , 
        //     function() {
        //         console.log("hello " + this.state.userInput); 
        //         this.forceUpdate();
        //     });
        // this.setState((state) => ({userInput:childData}));
        this.setState({userInput:childData});
        this.forceUpdate();
        console.log("STATE NOW SET TO: " + this.state.userInput);
    }

    render () {
        var url = "/podcast/page=" + (parseInt(this.page[0]) + 1);
        console.log("rendering on the url")
  
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
                <MyFilter child_value={this.getChildData}/>
                <Grid ref="child" Data={getPodcasts(this.page[0])} CardTitle={"title"} ImageField={"image_url"} MediaType = "podcast" page={this.page[0]} />
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