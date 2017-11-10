import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Media, Jumbotron, Button} from 'reactstrap';
import {getPodcastsID, getEpisodesID, getGenresID, getProvidersID} from './Request';

// VALID MEDIA TYPES
// podcast
// provider
// episode
// genre

// PODCASTS, runs when media_type == "podcast"
function renderPodcast(obj) {
    var val = obj;
    console.log(val);
    return (
        <Card>
            <Media left href="#">
            <Media object data-src="holder.js/64x64" img src={val.image_url.toString()} alt="Generic placeholder image" />
            </Media>
            <Media body>
            <Media heading>
                {val.title.toString()}
            </Media>
                genres: {val.genres.toString()} <br/>
                id: {val.id.toString()} <br/>
                feed_url: {val.feed_url.toString()} <br/>
                itunes_id: {val.itunes_id.toString()} <br/>
            </Media>
        </Card>  
        );
}

// PROVIDERS, runs when media_type == "provider"
function renderProvider(obj) {
    var val = obj;
    console.log(val);

    var provider_podcasts = "";
    // for (i = 0; i < val.podcasts.length; i++) { 
    //     provider_podcasts += val.podcasts[i].title + ", ";
    // }

    var pod = val["podcasts"];
    console.log(pod.length);
    var c = []
    for(var i =0; i<pod.length; i++){
        c[i] = pod[i]["title"]
    }
    var d = []
    for(var i =0; i<pod.length; i++){
        d[i] = pod[i]["feed_url"]
    }
    var p = pod[0];
    return (
        <Card>
            <Media left href="#">
            {<Media object data-src="holder.js/64x64" img src={p.image_url.toString()} alt="Generic placeholder image" />}
            </Media>
            <Media body>
            <Media heading>
                {val.name.toString()}
            </Media>                
                id: {val.id.toString()} <br/>
                itunes id: {val.id.toString()} <br/>
                name: {val.name.toString()} <br/>
                title: {val.podcasts[0].title.toString()} <br/>
                {/* podcasts: {provider_podcasts} */}
                feed_url: {val.podcasts[0].feed_url.toString()}

            </Media>
        </Card>  
        );
}

// GENRE, runs when media_type == "genre"
function renderGenre(obj) {
    var val = obj;
    console.log(val);
    var pod = val["podcasts"];
    console.log(pod.length);
    var c = []
    for(var i =0; i<pod.length; i++){
        c[i] = pod[i]["title"]
    }
    var d = []
    for(var i =0; i<pod.length; i++){
        d[i] = pod[i]["feed_url"]
    }
    var p = pod[0];

    console.log(c);
    return (
        <Card>
            <Media left href="#">
            {/* <Media object data-src="holder.js/64x64" img src={val.image_url.toString()} alt="Generic placeholder image" /> */}
            <Media object data-src="holder.js/64x64" img src={p.image_url.toString()}  alt="Generic placeholder image" />

            </Media>
            <Media body>
            <Media heading>
                {
                    val.name.toString()}
            </Media>
               <b> podcasts</b>: {c.toString()} <br/>
                <b>feed_urls</b>: {d.toString()} <br/>
                <b>itunes id</b>: {val.itunes_id.toString()} <br/>
               <b> id: </b>{val.id.toString()} <br/>
            </Media>
        </Card>  
        );
}

// EPISODES, runs when media_type == "episode"
function renderEpisode(obj) {
    var val = obj;
    console.log(val);
    return (
        <Card>
            <Media left href="#">
            <Media object src={ val.podcast.image_url.toString() } alt="Podcast artwork" />

            </Media>
            <Media body>
            <Media heading>
                { val.podcast.title.toString() }<br/>
                { val.title.toString() }
            </Media>
                ATGSID: { val.id.toString() } <br/>
                Date Published: { val.published.toString() }<br/>
                <a href={ val.podcast.feed_url.toString() }>RSS Feed</a><br/>
                <audio controls><source src={ val.file_url.toString() } type="audio/mpeg" /> Your browser does not support the audio element.</audio>
            </Media>
        </Card>  
        );
}

class MyMedia extends Component {

    constructor (props) {
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
              alert('shit'+ this.props.match.params.idnum);
              
              return (<h3>{getGenresID(this.props.match.params.idnum)["name"]}</h3>);
        }
    }
}

export default MyMedia;