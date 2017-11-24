import React from 'react';
import Grid from './Grid';
import {Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {getProviderSearch, getPodcastSearch, getEpisodeSearch, getGenreSearch, getEpisodesID, getGenres} from './Request';


class SearchGrid extends React.Component{

    constructor(props){
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
        this.state = {userInput : null};
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
        var sort = this.props.match.params.sorttype;
        var model = this.props.match.params.searchtype;
        var term = this.props.match.params.searchterm;

        var backButtonCheck = false;
        var forwardButtonCheck = false;

        if (parseInt(this.page[0]) == 1)
            backButtonCheck=true;
        else{
            backButtonCheck = false;
            prevURL = "/search/" + term + "/"+ model + "/page=" + (parseInt(this.page[0]) - 1);
        }
        if(parseInt(this.page[0]) == 11)
            forwardButtonCheck = true;
        else{
            nextURL = "/search/"+term+"/"+model+"/page=" + (parseInt(this.page[0]) + 1);
            forwardButtonCheck = false;
        }
        var data;
        if (model == "podcast")
            data = getPodcastSearch(term, this.page[0]);
        else if (model == "episode")
            data = getEpisodeSearch(term, this.page[0]);
        else if (model == "episode")
            data = getGenreSearch(term, this.page[0]);
        else if (model == "episode")
            data = getProviderSearch(term, this.page[0]);

        if(backButtonCheck){
            return (
                <div>
                <Grid ref="child" Data={data} CardTitle={"title"} ImageField={"image_url"} MediaType = "podcast" page={this.page[0]} />
                <Link to={nextURL}>
                    <Button outline color="warning" size="lg" onClick= {() => 
                        {
                            this.page[0] = parseInt(this.page[0]) + 1;
                            if (model == "podcast")
                                data = getPodcastSearch(term, this.page[0]);
                            else if (model == "episode")
                                data = getEpisodeSearch(term, this.page[0]);
                            else if (model == "episode")
                                data = getGenreSearch(term, this.page[0]);
                            else if (model == "episode")
                                data = getProviderSearch(term, this.page[0]);
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
                <Grid ref="child" Data={data} CardTitle={"title"} ImageField={"image_url"} MediaType = "podcast" page={this.page[0]} />
                    
                <Link to={prevURL}>
                    <Button outline color="warning" size="lg" onClick= {() => 
                        {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0])- 1;
                            if (model == "podcast")
                                data = getPodcastSearch(term, this.page[0]);
                            else if (model == "episode")
                                data = getEpisodeSearch(term, this.page[0]);
                            else if (model == "episode")
                                data = getGenreSearch(term, this.page[0]);
                            else if (model == "episode")
                                data = getProviderSearch(term, this.page[0]);
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
            <Grid ref="child" Data={data} CardTitle={"title"} ImageField={"image_url"} MediaType = "podcast" page={this.page[0]} />
 
            <Link to={prevURL}>
                <Button outline color="warning" size="lg" onClick= {() => 
                    {this.page[0] = (parseInt(this.page[0]) == 1)? 1: parseInt(this.page[0])- 1;
                        if (model == "podcast")
                            data = getPodcastSearch(term, this.page[0]);
                        else if (model == "episode")
                            data = getEpisodeSearch(term, this.page[0]);
                        else if (model == "episode")
                            data = getGenreSearch(term, this.page[0]);
                        else if (model == "episode")
                            data = getProviderSearch(term, this.page[0]);
                    this.refs.child.changeState(data, this.page[0]);  
                 this.forceUpdate();} 
                  }> Previous </Button>
            </Link>
            {'  '}
            <Link to={nextURL}>
                <Button outline color="warning" size="lg" onClick= {() => 

                    {this.page[0] = parseInt(this.page[0]) + 1;
                        if (model == "podcast")
                            data = getPodcastSearch(term, this.page[0]);
                        else if (model == "episode")
                            data = getEpisodeSearch(term, this.page[0]);
                        else if (model == "episode")
                            data = getGenreSearch(term, this.page[0]);
                        else if (model == "episode")
                            data = getProviderSearch(term, this.page[0]);
                    this.refs.child.changeState(data, this.page[0]);   
                     this.forceUpdate();} 
                  }> Next </Button>
            </Link>

            </div>
        );
    }
    }
}

export default SearchGrid;