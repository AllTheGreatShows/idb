import React, {Component, Rerender} from 'react';
import {getPodcasts, getAscending, getDescending, getFilterDataPodcasts} from './Request';
import Grid from './Grid';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import {Button} from 'reactstrap';
import MyFilter from './Filter';
import FlavorForm from './Brita';

class Podcast extends React.Component {

    constructor(props) {
        super(props)
        this.page = Array(1)
        this.page[0] = this.props.match.params.pagenum;
        this.state = {userInput: null, mynewurl: 'podcast/', fireRefine: false};
        this.getChildData = this.getChildData.bind(this);
        this.onRefine = this.onRefine.bind(this);

    }


    getChildData = (childData) => {
        // console.log("In parent and child data is " + childData);
        console.log("state originally set to " + this.state.userInput);
        console.log(childData);

        this.setState({userInput: childData});
        this.forceUpdate();
        console.log("STATE NOW SET TO: " + this.state.userInput);
    }

    onRefine = (sorting, filtering) => {
        console.log("onFilter: " + sorting + ", " + filtering);
        var data;
        var filter;
        if (filtering != '') {
            this.page[0] = 1;
            data = getFilterDataPodcasts(filtering);
            filter = filtering;
            // this.refs.child.changeState(data, "title", "image_url", "podcast", 1);
            this.state.mynewurl = "/podcast/sort=" + filter + "/page=1";
        }
        else if (sorting == "asc") {
            this.page[0] = 1;
            data = getAscending("title", "podcast", 1);
            filter = sorting;
            // this.refs.child.changeState(data, "title", "image_url", "podcast", 1);
            this.state.mynewurl = "/podcast/sort=" + filter + "/page=1";
        }
        else if (sorting == "dsc") {
            this.page[0] = 1;
            data = getDescending("title", "podcast", 1);
            filter = sorting;
            // this.refs.child.changeState(data, "title", "image_url", "podcast", 1);

            this.state.mynewurl = "/podcast/sort=" + filter + "/page=1";
        }
        else {alert('No refinements submitted'); this.state.mynewurl = "podcast/page=" + this.page[0];}
        this.setState({myfilter: filter});

        this.state.fireRefine = true;
        console.log(this.state.fireRefine + " " + this.state.mynewurl);
    }


    render() {
        var prevURL;
        var nextURL;
        var sort;

        console.log("sort argument = " + this.props.match.params.sorttype + "which is " + (this.props.match.params.sorttype != null));
        var backButtonCheck = false;
        var forwardButtonCheck = false;
        var boolASC = false;
        var boolDSC = false;
        var boolSORT = false;
        var filter = null;

        var DATA;

        if (this.props.match.params.sorttype == "asc") {
            console.log("asc bool is true");
            boolASC = true;
            DATA = getAscending("title", "podcast", 1);

        }
        else if (this.props.match.params.sorttype == "dsc") {
            boolDSC = true;
            DATA = getDescending("title", "podcast", 1);
        }
        else if (this.props.match.params.sorttype != null) {
            if (filter == null) console.log("the filter is null");
            filter = this.props.match.params.sorttype;
            if (filter != null) console.log("the filter is not null");
            DATA = getFilterDataPodcasts(this.props.match.params.sorttype);
        } else {
            DATA = getPodcasts(this.page[0])
        }


        if (parseInt(this.page[0]) == 1)
            backButtonCheck = true;
        else {
            backButtonCheck = false;
            if (boolASC)
                prevURL = "/podcast/sort=asc/page=" + (parseInt(this.page[0]) - 1);
            else if (boolDSC)
                prevURL = "/podcast/sort=dsc/page=" + (parseInt(this.page[0]) - 1);
            else if (this.props.match.params.sorttype != null)
                prevURL = "/podcast/sort=" + this.props.match.params.sorttype + "/page=" + (parseInt(this.page[0]) - 1);
            else
                prevURL = "/podcast/page=" + (parseInt(this.page[0]) - 1);
        }
        if (parseInt(this.page[0]) == 11)
            forwardButtonCheck = true;
        else {
            if (boolASC)
                nextURL = "/podcast/sort=asc/page=" + (parseInt(this.page[0]) + 1);
            else if (boolDSC)
                nextURL = "/podcast/sort=dsc/page=" + (parseInt(this.page[0]) + 1);
            else if (this.props.match.params.sorttype != null)
                nextURL = "/podcast/sort=" + this.props.match.params.sorttype + "/page=" + (parseInt(this.page[0]) + 1);
            else
                nextURL = "/podcast/page=" + (parseInt(this.page[0]) + 1);
            forwardButtonCheck = false;
        }
        console.log("rendering on the url")

        if (true) {//(backButtonCheck) {
            /*Return*/
            this.state.mynewurl = '';
            return (
                <div>
                    {"Sort: "}
                    <Link to={"/podcast/sort=asc/page=1"}>
                        <Button color="success" size="lg" onClick={() => {
                            this.page[0] = 1;
                            var data = getAscending("title", "podcast", 1);
                            this.refs.child.changeState(data, "title", "image_url", "podcast", 1);
                        }
                        }> Asc </Button>
                    </Link>
                    {' '}
                    <Link to={"/podcast/sort=dsc/page=1"}>
                        <Button color="success" size="lg" onClick={() => {
                            this.page[0] = 1;
                            var data = getDescending("title", "podcast", 1);
                            this.refs.child.changeState(data, "title", "image_url", "podcast", 1);
                        }
                        }> Desc </Button>
                    </Link>
                    {/*<MyFilter getData = {() => this.getChildData()}/>*/}
                    <div>
                    <FlavorForm onFilter={this.onRefine}/>
                    {this.state.fireRefine && (<Redirect to={"/podcast/sort="+this.state.myfilter+"/page=1"}/>) }
                    </div>

                    <Grid ref="child" Data={DATA} CardTitle={"title"} ImageField={"image_url"}
                          MediaType="podcast" page={this.page[0]}/>
                    <Link to={nextURL}>
                        <Button outline color="warning" size="lg" onClick={() => {
                            this.page[0] = parseInt(this.page[0]) + 1;
                            var data;
                            if (boolASC) {
                                data = getAscending("title", "podcast", this.page[0]);
                            }
                            else if (boolDSC)
                                data = getDescending("title", "podcast", this.page[0]);
                            else
                                data = getPodcasts(this.page[0]);
                            this.refs.child.changeState(data, this.page[0]);
                            this.forceUpdate();
                        }
                        }> Next </Button>
                    </Link>

                </div>
            );

        }
        /*
        else if (forwardButtonCheck) {
//RETURN
            return (
                <div>
                    {"Sort: "}
                    <Link to={"/podcast/sort=asc/page=1"}>
                        <Button color="success" size="lg" onClick={() => {
                            this.page[0] = 1;
                            var data = getAscending("title", "podcast");
                            this.refs.child.changeState(data, "title", "image_url", "podcast", 1);
                        }
                        }> Asc </Button>
                    </Link>
                    {' '}
                    <Link to={"/podcast/sort=dsc/page=1"}>
                        <Button color="success" size="lg" onClick={() => {
                            this.page[0] = 1;
                            var data = getDescending("title", "podcast");
                            this.refs.child.changeState(data, "title", "image_url", "podcast", 1);
                        }
                        }> Desc </Button>
                    </Link>
                    {/*<MyFilter getData = {() => this.getChildData()}/>}
                    <FlavorForm/>
                    <Grid ref="child" Data={getPodcasts(this.page[0])} CardTitle={"title"} ImageField={"image_url"}
                          MediaType="podcast" page={this.page[0]}/>


                    <Link to={prevURL}>
                        <Button outline color="warning" size="lg" onClick={() => {
                            this.page[0] = (parseInt(this.page[0]) == 1) ? 1 : parseInt(this.page[0]) - 1;
                            var data;
                            if (boolASC)
                                data = getAscending("title", "podcast", this.page[0]);
                            else if (boolDSC)
                                data = getDescending("title", "podcast", this.page[0]);
                            else
                                data = getPodcasts(this.page[0]);
                            this.refs.child.changeState(data, this.page[0]);
                            this.forceUpdate();
                        }
                        }> Previous </Button>
                    </Link>
                </div>
            );

        }
        else {
//RETURN
    //<MyFilter getData = {() => this.getChildData()}/>
            return (
                <div>
                    {"Sort: "}
                    <Link to={"/podcast/sort=asc/page=1"}>
                        <Button color="success" size="lg" onClick={() => {
                            this.page[0] = 1;
                            var data = getAscending("title", "podcast");
                            this.refs.child.changeState(data, "title", "image_url", "podcast", 1);
                        }
                        }> Asc </Button>
                    </Link>
                    {' '}
                    <Link to={"/podcast/sort=dsc/page=1"}>
                        <Button color="success" size="lg" onClick={() => {
                            this.page[0] = 1;
                            var data = getDescending("title", "podcast");
                            this.refs.child.changeState(data, "title", "image_url", "podcast", 1);
                        }
                        }> Desc </Button>
                    </Link>

                    <FlavorForm/>
                    <Grid ref="child" Data={getPodcasts(this.page[0])} CardTitle={"title"} ImageField={"image_url"}
                          MediaType="podcast" page={this.page[0]}/>


                    <Link to={prevURL}>
                        <Button outline color="warning" size="lg" onClick={() => {
                            this.page[0] = (parseInt(this.page[0]) == 1) ? 1 : parseInt(this.page[0]) - 1;
                            var data;
                            if (boolASC)
                                data = getAscending("title", "podcast", this.page[0]);
                            else if (boolDSC)
                                data = getDescending("title", "podcast", this.page[0]);
                            else
                                data = getPodcasts(this.page[0]);
                            this.refs.child.changeState(data, this.page[0]);
                            this.forceUpdate();
                        }
                        }> Previous </Button>
                    </Link>
                    {'  '}
                    <Link to={nextURL}>
                        <Button outline color="warning" size="lg" onClick={() => {
                            this.page[0] = parseInt(this.page[0]) + 1;
                            var data;
                            if (boolASC)
                                data = getAscending("title", "podcast", this.page[0]);
                            else if (boolDSC)
                                data = getDescending("title", "podcast", this.page[0]);
                            else
                                data = getPodcasts(this.page[0]);
                            this.refs.child.changeState(data, this.page[0]);
                            this.forceUpdate();
                        }
                        }> Next </Button>
                    </Link>

                </div>
            );
        }*/
    }
}

export default Podcast;