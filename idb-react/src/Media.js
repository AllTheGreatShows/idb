import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Media, Jumbotron, Button
} from 'reactstrap';
import {getPodcastsID, getEpisodesID, getGenresID, getProvidersID} from './Request';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// VALID MEDIA TYPES
// podcast
// provider
// episode
// genre

function renderPodcast(obj) {
    var val = obj;
    console.log(val);
    var pod = val["genres"];
    var l = [];
    console.log(val["genres"].length);
    for (var i = 0; i < val["genres"].length; i++) {
        l.push(<div><Link className="Link" to={"/genre/id=" + pod[i]["id"]}> {pod[i]["name"]} </Link><br/></div>);
    }
    return (
        <Card className={"PodcastCard"}>
            <div className={"Detail-Body"}>
            <img className={"Detail-Img"} data-src="holder.js/64x64" src={val.image_url.toString()}
                   alt="Generic placeholder image"/>

            <div  className={"Detail-BodyText"}>
                <CardTitle>
                    {val.title.toString()}
                </CardTitle>

                <CardSubtitle className={"Detail-Subtitle"}>id: {val.id.toString()}
                <br/> itunes_id: {val.itunes_id.toString()} </CardSubtitle>
                <p> feed_url: <a href={val.feed_url.toString()}> {val.feed_url.toString()}</a> </p>

                <p>genres: {l} </p>
            </div>
            </div>
        </Card>
    );
}

// PROVIDERS, runs when media_type == "provider"
function renderProvider(obj) {
    var val = obj;
    console.log(val);

    var provider_podcasts = "";
    var pod = val["podcasts"];
    console.log(pod.length);
    var c = []
    for (var i = 0; i < pod.length; i++) {

        c.push(<div><Link to={"/podcast/id=" + pod[i]["id"]}> {pod[i]["title"]} </Link><br/></div>);
    }
    var d = []
    for (var i = 0; i < pod.length; i++) {
        d[i] = pod[i]["feed_url"]
    }
    var p = pod[0];
    return (
        <Card className={"ProviderCard"}>
            <div className={"Detail-Body"}>
            <img className={"Detail-Img"} data-src="holder.js/64x64"  src={p.image_url.toString()}
                 alt="Generic placeholder image"/>


                <div  className={"Detail-BodyText"}>
                    <CardTitle>
                    {val.name.toString()}
                    </CardTitle>
                    <CardSubtitle className={"Detail-Subtitle"}>id: {val.id.toString()}
                        <br/> itunes id: {val.podcasts[0].itunes_id.toString()} </CardSubtitle>
                    <p>feed_url: <a href={val.podcasts[0].feed_url.toString()}> {val.podcasts[0].feed_url.toString()}</a></p>
                    <p>Podcast titles: {c} </p>
                </div>
            </div>
        </Card>
    );
}

// GENRE, runs when media_type == "genre"
function renderGenre(obj) {
    var val = obj;
    var pod = val["podcasts"];
    var c = []
    for (var i = 0; i < pod.length; i++) {
        c.push(<div><Link to={"/podcast/id=" + pod[i]["id"]}> {pod[i]["title"]} </Link><br/></div>);
    }
    var d = []
    for (var i = 0; i < pod.length; i++) {

        d.push(<div><a href={pod[i]["feed_url"]}>{pod[i]["feed_url"]}</a><br/></div>);
    }
    var p = pod[0];

    return (
        <Card className={"GenreCard"}>
            <div className={"Detail-Body"}>
            <img className={"Detail-Img"} data-src="holder.js/64x64" src={p.image_url.toString()}
                       alt="Generic placeholder image"/>
            <div className={"Detail-BodyText"}>
                <CardTitle>
                    {
                        val.name.toString()}
                </CardTitle>
                <CardSubtitle>itunes id: {val.itunes_id.toString()} <br/>
                    id: {val.id.toString()} </CardSubtitle>
                <b> podcasts</b>: {c} <br/>
                <b>feed_urls</b>: {d} <br/>
            </div>
            </div>
        </Card>
    );
}

// EPISODES, runs when media_type == "episode"
function renderEpisode(obj) {
    var val = obj;
    return (
        <Card>
            <div className={"Detail-Body"}>
            <img className={"Detail-Img"} src={val.podcast.image_url.toString()} alt="Podcast artwork"/>

            <div className={"Detail-BodyText"}>
                <CardTitle>
                    <b>{val.podcast.title.toString()}</b><br/>
                    {val.title.toString()}
                </CardTitle>
                <CardSubtitle>ATGSID: {val.id.toString()} <br/>
                    Date Published: {val.published.toString()}<br/></CardSubtitle>
                <a href={val.podcast.feed_url.toString()}>RSS Feed</a><br/>
                <audio controls>
                    <source src={val.file_url.toString()} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
            </div>
        </Card>
    );
}

class MyMedia extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.match);
    }

    render() {
        const obj = this.props.json;
        const i = this.props.match.params.idnum;

        switch (this.props.match.params.idtype) {//(this.props.media_type) {
            case "podcast":
                return renderPodcast(getPodcastsID(this.props.match.params.idnum));
            case "provider":
                return renderProvider(getProvidersID(this.props.match.params.idnum));
            case "genre":
                return renderGenre(getGenresID(this.props.match.params.idnum));
            case "episode":
                return renderEpisode(getEpisodesID(this.props.match.params.idnum));
            default:
                alert( this.props.match.params.idnum);

                return (<h3>{getGenresID(this.props.match.params.idnum)["name"]}</h3>);
        }
    }
}

export default MyMedia;