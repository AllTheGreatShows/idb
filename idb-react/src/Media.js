import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Media, Jumbotron, Button} from 'reactstrap';

// VALID MEDIA TYPES
// podcast
// provider
// episode
// genre

// PODCASTS, runs when media_type == "podcast"
function renderPodcast(obj, i) {
    var val = obj["objects"][i];
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
function renderProvider(obj, i) {
    var val = obj["objects"][i];
    console.log(val);

    var provider_podcasts = "";
    for (i = 0; i < val.podcasts.length; i++) { 
        provider_podcasts += val.podcasts[i].title + ", ";
    }

    return (
        <Card>
            <Media left href="#">
            {<Media object data-src="holder.js/64x64" img src={val.podcasts[0].image_url.toString()} alt="Generic placeholder image" />}
            </Media>
            <Media body>
            <Media heading>
                {val.name.toString()}
            </Media>                
                id: {val.id.toString()} <br/>
                itunes id: {val.id.toString()} <br/>
                name: {val.name.toString()} <br/>
                title: {val.podcasts[0].title.toString()} <br/>
                podcasts: {provider_podcasts}

            </Media>
        </Card>  
        );
}

// GENRE, runs when media_type == "genre"
function renderGenre(obj, i) {
    var val = obj["objects"][i];
    console.log(val);
    return (
        <Card>
            <Media left href="#">
            {/* <Media object data-src="holder.js/64x64" img src={val.image_url.toString()} alt="Generic placeholder image" /> */}
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />

            </Media>
            <Media body>
            <Media heading>
                {val.name.toString()}
            </Media>
                podcasts: {val.podcasts.toString()} <br/>
                itunes id: {val.itunes_id.toString()} <br/>
                id: {val.id.toString()} <br/>
            </Media>
        </Card>  
        );
}

// EPISODES, runs when media_type == "episode"
function renderEpisode(obj, i) {
    var val = obj["objects"][i];
    console.log(val);
    return (
        <Card>
            <Media left href="#">
            {/* <Media object data-src="holder.js/64x64" img src={obj.image_url} alt="Generic placeholder image" /> */}
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />

            </Media>
            <Media body>
            <Media heading>
                {val.title.toString()}
            </Media>
                id: {val.id.toString()} <br/>
                published: {val.published.toString()} <br/>
                file_url: {val.file_url.toString()} <br/>
                podcast_id: {val.podcast_id.toString()} <br/>
            </Media>
        </Card>  
        );
}

class MyMedia extends Component {

    render() {
        const obj = this.props.json;
        const i = this.props.index;
        switch (this.props.media_type) {
            case "podcast":
                return renderPodcast(obj, i);
            case "provider":
                return renderProvider(obj, i);
            case "genre":
                return renderGenre(obj, i);
            case "episode":
                return renderEpisode(obj, i);
        }
    }
}

export default MyMedia;